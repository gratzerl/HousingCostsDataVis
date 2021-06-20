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

    var maxX = this.getMax(data, d => d.ownership);
    var maxY = this.getMax(data, d => d.housing);

    // Add X axis
    const x = d3.scaleLinear()
    .domain([0, maxX + 10])
    .range([ 0, width ]);
    root.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d => d + "%"))
    .style("font-size", `${this.fontSize}px`);

    // add x label
    root.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin) 
    .text("Ownsership");


    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, maxY + 10])
    .range([ height, 0]);
    root.append("g")
    .call(d3.axisLeft(y).tickFormat(d => d + "%"))
    .style("font-size", `${this.fontSize}px`);;

    // add y label
    root.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -margin /2)
    .attr("x", margin)
    .attr("dy", `${this.fontSize}px`)
    .text("Housing");

    const z = d3.scaleLinear()
    .domain([0, 10000])
    .range([0, 100]);

    // Add dots
    const dots = root.append('g')
    .selectAll("dot")
    .data(data)
    .enter();
    dots.append("circle")
    .attr("cx", d => x(d.ownership))
    .attr("cy", d => y(d.housing))
    .attr("r", d => z(d.gdp))
    .style("opacity", .5)
    .style("fill", "#69b3a2");
    dots.append("text")
    .text(d => d.country)
    .attr("x", d => x(d.ownership)+20)
    .attr("y", d => y(d.housing)-20);
  }

  private getMax(data: Bubble[], fn:  (d: Bubble) => number) : number {
    return data.map(fn).reduce((a,b) => Math.max(a,b));
  }
}
