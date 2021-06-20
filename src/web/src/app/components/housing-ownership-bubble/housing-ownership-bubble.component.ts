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
  { country: "Austria", ownership: 15, housing: 35, gdp: 3612 },
  { country: "Germany", ownership: 10, housing: 40, gdp: 4000 },
  { country: "Hungary", ownership: 20, housing: 30, gdp: 1250 },
  { country: "Romania", ownership: 40, housing: 20, gdp: 800 },
];

@Component({
  selector: 'app-housing-ownership-bubble',
  templateUrl: './housing-ownership-bubble.component.html',
  styleUrls: ['./housing-ownership-bubble.component.scss']
})

export class HousingOwnershipBubbleComponent implements AfterViewInit {
  // private readonly height = 1000;
  // private readonly width = 1000;

  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private svgRoot: SvgSelection;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  constructor(
    private bubbleChartBuilder: BubbleChartBuilderService,
    private chartManipulator: ChartManipulatorService) { }

  ngAfterViewInit(): void {
    // this.createChart();
    this.createSvg();
    this.drawPlot();
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

  private createSvg(): void {
    this.svg = d3
    .select(this.chartContainerRef.nativeElement)
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawPlot(): void {
  // Add X axis
  const x = d3.scaleLinear()
  .domain([0, 100])
  .range([ 0, this.width ]);
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 100])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  const z = d3.scaleLinear()
  .domain([0, 10000])
  .range([0,40 ]);

  // Add dots
  const dots = this.svg.append('g');
  dots.selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.ownership))
  .attr("cy", d => y(d.housing))
  .attr("r", d => z(d.gdp))
  .style("opacity", .5)
  .style("fill", "#69b3a2");
}
}
