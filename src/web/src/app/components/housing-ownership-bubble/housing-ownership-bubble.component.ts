import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BarSelection,
  VoronoiChartBuilderService,
  VoronoiSelection,
  CIRCULAR_BAR_CHART,
  VORONOI_CHART
} from 'src/app/services';

const data = [
  {
    contry: "Austria",
    continent: "Europe",
    lifeExp: 79,
    pop: 8000000,
    gdpPercap: 3612,
  },
  {
    contry: "Germany",
    continent: "Europe",
    lifeExp: 83,
    pop: 80000000,
    gdpPercap: 4000,
  },
  {
    contry: "Hungary",
    continent: "Europe",
    lifeExp: 73,
    pop: 9000000,
    gdpPercap: 1250,
  }
]

@Component({
  selector: 'app-housing-ownership-bubble',
  templateUrl: './housing-ownership-bubble.component.html',
  styleUrls: ['./housing-ownership-bubble.component.scss']
})

export class HousingOwnershipBubbleComponent implements AfterViewInit {
  private readonly height = 1440;
  private readonly width = 1440;

  private svgRoot: SvgSelection;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  constructor(
    private bubbleChartBuilder: BubbleChartBuilderService,
    private chartManipulator: ChartManipulatorService) { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, this.width, this.height);

    this.drawBubbleChart()
  }

  drawBubbleChart() {
    this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      true
    );
  }

}
