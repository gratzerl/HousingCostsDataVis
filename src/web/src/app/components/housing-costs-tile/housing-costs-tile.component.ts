import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Bar, HousingCosts } from 'src/app/models';

import { CircularBarChartBuilderService, ChartBuilderService, SvgSelection, TextSelection, BarSelection } from 'src/app/services';

import * as d3 from 'd3';

@Component({
  selector: 'app-housing-costs-tile',
  templateUrl: './housing-costs-tile.component.html',
  styleUrls: ['./housing-costs-tile.component.scss'],
  providers: [CircularBarChartBuilderService]
})
export class HousingCostsTileComponent implements AfterViewInit {

  @Input()
  housingCosts!: HousingCosts;

  @Input()
  maxY!: number;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  private innerRadiusRatio = 0.25;
  private svgElement: SvgSelection;
  private width = 1440;
  private height = 1440;

  private bars: BarSelection;

  private defaultCenterLabelId = 'defaultCenterLabel';
  private hoverCenterLabelId = 'hoverCenterLabel';
  private hoverCenterTopLineId = 'hoverTopLabel';
  private hoverCenterBottomLineId = 'hoverBottomLabel';

  constructor(
    private circularBarChartBuilder: CircularBarChartBuilderService,
    private chartBuilder: ChartBuilderService) { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.svgElement = this.chartBuilder.appendSvg(this.chartContainerRef, this.width, this.height);
    this.bars = this.circularBarChartBuilder.appendBarChart(this.svgElement, this.housingCosts.costs, this.width, this.height, this.maxY, this.innerRadiusRatio);
    this.createDefaultCenterLabel(this.housingCosts.country);

    this.createHoverInteraction();
  }

  private createHoverInteraction(): void {
    this.createHoverLabels();

    this.bars
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
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
        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '1');

        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.hoverCenterLabelId, false);
        this.chartBuilder.toggleElementVisibility(this.chartContainerRef, this.defaultCenterLabelId, true);
      });
  }

  private createDefaultCenterLabel(label: string): void {
    this.chartBuilder.appendTextElement(this.svgElement, this.defaultCenterLabelId)
      .text(label);
  }

  private createHoverLabels(): void {
    const hoverLabel = this.chartBuilder.appendTextElement(this.svgElement, this.hoverCenterLabelId);
    this.chartBuilder.appendTextLines(hoverLabel, [this.hoverCenterTopLineId, this.hoverCenterBottomLineId]);
  }
}
