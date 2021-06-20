import { Injectable } from '@angular/core';
import { SvgSelection } from './chart-manipulator.service';
import * as d3 from 'd3';
import { Bubble } from '../models';

export const BUBBLE_CHART = {
  chartRootId: 'bubbleChart',
};

@Injectable({
  providedIn: 'root'
})
export class BubbleChartBuilderService {

  constructor() { }

  private fontSize = 50;

  appendChart(svgRoot: SvgSelection, data: Bubble[], width: number, height: number, margin: number) {
    var root = svgRoot.append("g").attr("transform", "translate(" + margin + " " + margin + ")")

    // Add X axis
    const x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width ]);
    root.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d => d + "%"))
    .style("font-size", `${this.fontSize}px`);

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
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
