import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
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
  private chartWidth = 1800;
  private chartHeight = 1440;
  
  private margin = 175;
  private width = this.chartWidth - (this.margin * 2);
  private height = this.chartHeight - (this.margin * 2);

  private fontSize = 50;

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

    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, 0, 0, this.chartWidth, this.chartHeight);
    this.drawPlot();

    // this.drawBubbleChart();
  }

  drawBubbleChart() {
    this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      true
    );
  }

private drawPlot(): void {
  var root = this.svgRoot.append("g").attr("transform", "translate(" + this.margin + " " + this.margin + ")")

  // Add X axis
  const x = d3.scaleLinear()
  .domain([0, 100])
  .range([ 0, this.width ]);
  root.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d => d + "%"))
  .style("font-size", `${this.fontSize}px`);

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 100])
  .range([ this.height, 0]);
  root.append("g")
  .call(d3.axisLeft(y).tickFormat(d => d + "%"))
  .style("font-size", `${this.fontSize}px`);;

  const z = d3.scaleLinear()
  .domain([0, 10000])
  .range([0, 100]);

  // Add dots
  const dots = root.append('g');
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
