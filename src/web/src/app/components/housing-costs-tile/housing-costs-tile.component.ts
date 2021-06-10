import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Bar, HousingCosts } from 'src/app/models';
import * as d3 from 'd3';

import {
  CircularBarChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BarSelection,
  VoronoiChartBuilderService,
  VoronoiSelection,
  CIRCULAR_BAR_CHART,
  VORONOI_CHART
} from 'src/app/services';

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

  private readonly defaultRadiusPercentage = 0.25;
  private readonly zoomedRadiusPercentage = 0.55;
  private readonly chartPaddingPercentage = 0.015;

  private readonly height = 1440;
  private readonly width = 1440;

  private readonly maxRadius = (Math.min(this.width, this.height) / 2);
  private readonly outerRadius = this.maxRadius - (this.chartPaddingPercentage * this.maxRadius);
  private readonly defaultRadius = this.maxRadius * this.defaultRadiusPercentage;
  private readonly zoomedRadius = this.maxRadius * this.zoomedRadiusPercentage;

  private isZoomed = false;

  private svgRoot: SvgSelection;
  private bars: BarSelection;
  private voronoiChart?: VoronoiSelection = undefined;

  private selectedBar: Bar;

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

    this.createBarChart();
  }

  private createBarChart() {
    this.bars = this.circularBarChartBuilder.appendChart(
      this.svgRoot,
      this.housingCosts.totalShareOnIncome,
      this.maxY,
      this.defaultRadius,
      this.outerRadius,
      true);


    const { defaultLabelId } = CIRCULAR_BAR_CHART;
    this.chartManipulator.setText(this.svgRoot, defaultLabelId, this.housingCosts.country);
    this.createBarsInteraction();
  }

  private createBarsInteraction(): void {
    this.bars
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
        this.chartManipulator.highlight(event.target as any);

        const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId, defaultLabelId], false);

        if (this.isZoomed) {
          return;
        }

        this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId], true);

        const { hoverTopLabelId, hoverBottomLabelId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.setText(this.svgRoot, hoverTopLabelId, `${Math.ceil(bar.percent * 100)}%`);
        this.chartManipulator.setText(this.svgRoot, hoverBottomLabelId, `${bar.year}`);
      });

    this.bars.on('mouseleave', (event: MouseEvent, bar: Bar) => {
      if (bar !== this.selectedBar) {
        this.chartManipulator.unhighlight(event.target as any, true);
      }

      if (this.isZoomed) {
        return;
      }

      const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId], true);
      this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId], false);
    });

    this.bars.on('click', (event: MouseEvent, bar: Bar) => {
      event.stopPropagation();

      this.selectedBar = bar;
      this.chartManipulator.unhighlight(this.bars, false);

      if (!this.isZoomed) {
        this.setIsZoomed(true);

        this.bars = this.circularBarChartBuilder.appendChart(
          this.svgRoot,
          this.housingCosts.totalShareOnIncome,
          this.maxY,
          this.zoomedRadius,
          this.outerRadius,
          false);

        const { defaultLabelId, hoverLabelsId, xAxisLabelsId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId, hoverLabelsId], false);
        this.chartManipulator.setVisible(this.svgRoot, [xAxisLabelsId], true);
      }

      this.chartManipulator.highlight(event.target as any);

      const data = this.housingCosts.composition[bar.year];

      this.voronoiChart = this.voronoiChartBuilder.appendChart(this.svgRoot, data, this.zoomedRadius, (data) => data.percentage, (id) => compositionCategoryColors[id], this.voronoiChart === undefined);
      this.voronoiChart.on('click', (e: MouseEvent, _) => e.stopPropagation());

      this.chartManipulator.setVisible(this.svgRoot, [VORONOI_CHART.chartId], true);
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

        this.bars = this.circularBarChartBuilder.appendChart(
          this.svgRoot,
          this.housingCosts.totalShareOnIncome,
          this.maxY,
          this.defaultRadius,
          this.outerRadius,
          false);

        const { defaultLabelId, hoverLabelsId, xAxisLabelsId } = CIRCULAR_BAR_CHART;
        this.chartManipulator.unhighlight(this.bars, false);

        this.chartManipulator.setVisible(this.svgRoot, [xAxisLabelsId, hoverLabelsId, VORONOI_CHART.chartId], false);
        this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId], true);

      });
  }

  private setIsZoomed(zoomed: boolean) {
    this.isZoomed = zoomed;
    this.zoom.emit(this.isZoomed);
  }
}
