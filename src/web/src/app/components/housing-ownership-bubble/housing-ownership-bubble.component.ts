import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Bubble } from 'src/app/models';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
} from 'src/app/services';

const data: Bubble[] = [
  { country: "AUT", ownership: 15, housing: 35, gdp: 3612 },
  { country: "GER", ownership: 10, housing: 40, gdp: 4000 },
  { country: "HU", ownership: 20, housing: 30, gdp: 1250 },
  { country: "RO", ownership: 43.7, housing: 20, gdp: 800 },
];

@Component({
  selector: 'app-housing-ownership-bubble',
  templateUrl: './housing-ownership-bubble.component.html',
  styleUrls: ['./housing-ownership-bubble.component.scss']
})

export class HousingOwnershipBubbleComponent implements AfterViewInit {
  private chartWidth = 1800;
  private chartHeight = 1440;

  private margin = 175;
  private width = this.chartWidth - (this.margin * 2);
  private height = this.chartHeight - (this.margin * 2);

  private svgRoot: SvgSelection;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  constructor(private bubbleChartBuilder: BubbleChartBuilderService, private chartManipulator: ChartManipulatorService) { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, 0, 0, this.chartWidth, this.chartHeight);

    this.drawBubbleChart();
  }

  private drawBubbleChart(): void {
    this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      this.width,
      this.height,
      this.margin
    );
  }
}
