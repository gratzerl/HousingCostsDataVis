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
  private _zoom;

  private barsRoot: GSelection;
  private bars: BarSelection;

  private voronoiRoot: GSelection;
  private voronoi?: VoronoiSelection = undefined;

  private innerRadiusRatio = 0.25;
  private voronoiRadiusRatio = 0.20;
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
    this._zoom = d3.zoom()
      .on("zoom", this.zoomed);
  }

  private createChart(): void {
    this.svgRoot = this.chartBuilder.appendSvg(this.chartContainerRef, this.width, this.height);
    this.svgRoot.attr('transform', `translate(0, 0) scale(1)`);

    this.createSvgClickInteraction();
    this.barsRoot = this.createBarChart();
    // this.barsRoot.attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);

    this.chartBuilder.toggleElementVisibility(this.chartContainerRef, 'barLabels', false);
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

  private zoomed({ transform }) {
    this.svgRoot.attr("transform", transform);
  }

  private createBarClickInteraction(): void {
    this.bars
      .on('click', (event: MouseEvent, bar: Bar) => {
        event.stopPropagation();
        this.setIsZoomed(true);

        d3.selectAll(this.bars)
          .attr('opacity', '1');

        d3.select(event.target as any)
          .attr('opacity', '0.85');

        const tSvg = d3.zoomTransform(this.svgRoot.node());
        console.log('t svg', tSvg);

        const tVoro = d3.zoomTransform(this.voronoiRoot.node());
        console.log('t voro', tVoro);

        const tBar = d3.zoomTransform(this.barsRoot.node());
        console.log('t bars', tBar);

        const data = this.housingCosts.composition[bar.year];
        const radius = this.width * this.voronoiRadiusRatio;

        this.voronoi = this.voronoiChartBuilder.appendChart(this.voronoiRoot, data, radius, (data) => data.percentage, (id) => compositionCategoryColors[id], this.voronoi === undefined);

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.voronoiChartRootId, true);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, 'barLabels', true);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, false);
      });
  }

  private createBarHoverInteraction(): void {
    this.createBarHoverLabels();

    this.bars
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
        if (this.isZoomed) {
          return;
        }

        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '0.85');


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
        if (this.isZoomed) {
          return;
        }

        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '1');

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

        this._zoom.scaleBy(this.svgRoot, 1.3);

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.voronoiChartRootId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, 'barLabels', false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, true);
      });
  }

  private setIsZoomed(zoomed: boolean) {
    this.isZoomed = zoomed;
    this.zoom.emit(this.isZoomed);
  }
}
