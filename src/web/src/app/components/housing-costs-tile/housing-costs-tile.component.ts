import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Bar, HousingCosts } from 'src/app/models';

import {
  CircularBarChartBuilderService,
  ChartBuilderService,
  SvgSelection,
  BarSelection,
  VoronoiChartBuilderService,
  GSelection,
  VoronoiSelection
} from 'src/app/services';

import * as d3 from 'd3';
import { compositionCategoryColors } from 'src/app/constants/styling.constants';

@Component({
  selector: 'app-housing-costs-tile',
  templateUrl: './housing-costs-tile.component.html',
  styleUrls: ['./housing-costs-tile.component.scss'],
  providers: [VoronoiChartBuilderService]
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

  private isZoomed = false;

  private svgRoot: SvgSelection;

  private barsRoot: GSelection;
  private bars: BarSelection;

  private voronoiRoot: GSelection;
  private voronoi: VoronoiSelection;

  private innerRadiusRatio = 0.25;
  private width = 1440;
  private height = 1440;


  private defaultCenterLabelId = 'defaultCenterLabel';
  private hoverCenterLabelId = 'hoverCenterLabel';
  private hoverCenterTopLineId = 'hoverTopLabel';
  private hoverCenterBottomLineId = 'hoverBottomLabel';
  private barChartRootId = 'barChartRoot';
  private voronoiChartRootId = 'voronoiChartRoot';

  constructor(
    private circularBarChartBuilder: CircularBarChartBuilderService,
    private voronoiChartBuilder: VoronoiChartBuilderService,
    private chartBuilder: ChartBuilderService) { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.svgRoot = this.chartBuilder.appendSvg(this.chartContainerRef, this.width, this.height);
    this.createSvgClickInteraction();
    this.barsRoot = this.createBarChart();
    this.voronoiRoot = this.createVoronoiChart();
  }

  private createVoronoiChart(): GSelection {
    const root = this.svgRoot
      .append('g')
      .attr('id', this.voronoiChartRootId)
      .style('display', 'none')
      .attr('pointer-events', 'none');

    return root;
  }

  private createBarChart(): GSelection {
    const root = this.svgRoot
      .append('g')
      .attr('id', this.barChartRootId);

    this.bars = this.circularBarChartBuilder.appendChart(root, this.housingCosts.totalShareOnIncome, this.width, this.height, this.maxY, this.innerRadiusRatio);

    this.createBarDefaultCenterLabel(this.housingCosts.country);
    this.createBarInteraction();

    return root;
  }

  private createBarInteraction(): void {
    this.createBarHoverInteraction();
    this.createBarClickInteraction();
  }

  private createBarClickInteraction(): void {
    this.bars
      .on('click', (event: MouseEvent, bar: Bar) => {
        event.stopPropagation();
        this.setIsZoomed(true);

        // d3.select(event.target as any)
        //   .attr('opacity', '1');

        const data = this.housingCosts.composition[bar.year];
        const radius = this.width * this.innerRadiusRatio;

        this.voronoi = this.voronoiChartBuilder.appendChart(this.voronoiRoot, data, radius, (data) => data.percentage, (id) => compositionCategoryColors[id]);

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.voronoiChartRootId, this.isZoomed);
      });
  }

  private createBarHoverInteraction(): void {
    this.createBarHoverLabels();

    this.bars
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '0.85');

        if (this.isZoomed) {
          return;
        }

        d3.select(this.chartContainerRef.nativeElement)
          .select(`#${this.hoverCenterTopLineId}`)
          .text(() => `${Math.ceil(bar.percent * 100)}%`);

        d3.select(this.chartContainerRef.nativeElement)
          .select(`#${this.hoverCenterBottomLineId}`)
          .text(() => `${bar.year}`);

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, true);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, false);
      })
      .on('mouseleave', (event: MouseEvent) => {
        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '1');

        if (this.isZoomed) {
          return;
        }

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, true);
      });
  }

  private createBarDefaultCenterLabel(label: string): void {
    this.chartBuilder.appendTextElement(this.svgRoot, this.defaultCenterLabelId)
      .text(label);
  }

  private createBarHoverLabels(): void {
    const hoverLabel = this.chartBuilder.appendTextElement(this.svgRoot, this.hoverCenterLabelId);
    this.chartBuilder.appendTextLines(hoverLabel, [this.hoverCenterTopLineId, this.hoverCenterBottomLineId]);
  }

  private createSvgClickInteraction(): void {
    this.svgRoot
      .on('click', (event: MouseEvent, _) => {
        event.stopPropagation();

        if (!this.isZoomed) {
          return;
        }

        this.setIsZoomed(false);

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.voronoiChartRootId, this.isZoomed);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, true);
      });
  }

  private setIsZoomed(zoomed: boolean) {
    this.isZoomed = zoomed;
    this.zoom.emit(this.isZoomed);
  }
}
