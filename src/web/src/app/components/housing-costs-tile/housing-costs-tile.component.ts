import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Bar, HousingCosts } from 'src/app/models';

import {
  CircularBarChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BarSelection,
  VoronoiChartBuilderService,
  GSelection,
  VoronoiSelection,
  CIRCULAR_BAR_CHART
} from 'src/app/services';

import * as d3 from 'd3';
import { compositionCategoryColors } from 'src/app/constants/styling.constants';

@Component({
  selector: 'app-housing-costs-tile',
  templateUrl: './housing-costs-tile.component.html',
  styleUrls: ['./housing-costs-tile.component.scss'],
  providers: [VoronoiChartBuilderService, CircularBarChartBuilderService]
})
export class HousingCostsTileComponent implements AfterViewInit {

  @Input()
  housingCosts!: HousingCosts;

  @Input()
  maxY!: number;

  @Output()
  zoom = new EventEmitter<boolean>();

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  private readonly voronoiChartRootId = 'voronoiChartRoot';
  private readonly barChartRootId = 'barChartRoot';

  private isZoomed = false;

  private svgRoot: SvgSelection;
  private barsRoot: GSelection;
  private bars: BarSelection;
  private voronoiRoot: GSelection;
  private voronoi?: VoronoiSelection = undefined;

  private innerRadiusPercentage = 0.25;
  private chartPaddingPercentage = 0.015;
  private height = 1440;
  private width = 1440;
  private chartRadius = (Math.min(this.width, this.height) / 2);

  private innerRadius = this.chartRadius * this.innerRadiusPercentage;
  private outerRadius = this.chartRadius - (this.chartPaddingPercentage * this.chartRadius);


  constructor(
    private circularBarChartBuilder: CircularBarChartBuilderService,
    private voronoiChartBuilder: VoronoiChartBuilderService,
    private chartManipulator: ChartManipulatorService) { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, this.width, this.height);
    this.createSvgClickInteraction();

    this.barsRoot = this.createBarChart();
    this.voronoiRoot = this.createVoronoiChart();
  }

  private createVoronoiChart(): GSelection {
    const root = this.svgRoot
      .append('g')
      .attr('id', this.voronoiChartRootId)
      .style('display', 'none')
      .style('pointer-events', 'none');

    return root;
  }

  private createBarChart(): GSelection {
    const root = this.svgRoot
      .append('g')
      .attr('id', this.barChartRootId);

    this.bars = this.circularBarChartBuilder.appendChart(
      root,
      this.housingCosts.totalShareOnIncome,
      this.maxY,
      this.innerRadius,
      this.outerRadius,
      () => this.housingCosts.country);

    this.createBarsInteraction();

    return root;
  }

  private createBarsInteraction(): void {
    this.bars
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
        const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;

        this.chartManipulator.setVisible(this.barsRoot, [hoverLabelsId, defaultLabelId], false);

        if (this.isZoomed) {
          return;
        }

        this.chartManipulator.setVisible(this.barsRoot, [hoverLabelsId], true);

        this.chartManipulator.highlight(event.target as any);

        const { hoverTopLabelId, hoverBottomLabelId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.setText(this.barsRoot, hoverTopLabelId, `${Math.ceil(bar.percent * 100)}%`);
        this.chartManipulator.setText(this.barsRoot, hoverBottomLabelId, `${bar.year}`);
      });

    this.bars.on('mouseleave', (event: MouseEvent, _) => {
      if (this.isZoomed) {
        return;
      }

      this.chartManipulator.unhighlight(event.target as any);

      const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setVisible(this.barsRoot, [defaultLabelId], true);
      this.chartManipulator.setVisible(this.barsRoot, [hoverLabelsId], false);
    });

    this.bars.on('click', (event: MouseEvent, bar: Bar) => {
      event.stopPropagation();

      if (!this.isZoomed) {
        this.setIsZoomed(true);

        const { defaultLabelId, hoverLabelsId, xAxisLabelsId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.setVisible(this.barsRoot, [defaultLabelId, hoverLabelsId], false);
        this.chartManipulator.setVisible(this.barsRoot, [xAxisLabelsId], true);
      }

      this.chartManipulator.unhighlight(this.bars);
      this.chartManipulator.highlight(event.target as any);

      const data = this.housingCosts.composition[bar.year];
      this.voronoi = this.voronoiChartBuilder.appendChart(this.voronoiRoot, data, this.innerRadius, (data) => data.percentage, (id) => compositionCategoryColors[id], this.voronoi === undefined);

      this.chartManipulator.setVisible(this.svgRoot, [this.voronoiChartRootId], true);
    });
  }

  private createSvgClickInteraction(): void {
    this.svgRoot
      .on('click', (event: MouseEvent, _) => {
        event.stopPropagation();
        if (!this.isZoomed) {
          return;
        }

        this.setIsZoomed(false);

        const { defaultLabelId, hoverLabelsId, xAxisLabelsId, barPathId } = CIRCULAR_BAR_CHART;

        const bars = this.barsRoot.select(barPathId);
        this.chartManipulator.unhighlight(bars);

        this.chartManipulator.setVisible(this.svgRoot, [xAxisLabelsId, hoverLabelsId, this.voronoiChartRootId], false);
        this.chartManipulator.setVisible(this.barsRoot, [defaultLabelId], true);
      });
  }

  private setIsZoomed(zoomed: boolean) {
    this.isZoomed = zoomed;
    this.zoom.emit(this.isZoomed);
  }
}
