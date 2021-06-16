import { Injectable } from '@angular/core';
import { SvgSelection } from './chart-manipulator.service';
import * as d3 from 'd3';

export const BUBBLE_CHART = {
  chartRootId: 'bubbleChart',
};

@Injectable({
  providedIn: 'root'
})
export class BubbleChartBuilderService {

  constructor() { }

  appendChart(root: SvgSelection, data: any, createNewChart: boolean) {
    // if (createNewChart) {
    //   root.select(`#${BUBBLE_CHART.chartRootId}`)
    //     .remove();

    //   root.append('g')
    //     .attr('id', BUBBLE_CHART.chartRootId);
    // }

    var margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

    var x = this.drawXAxis(width, root, height);

    var y = this.drawYAxis(height, root);

    var z = this.scaleLinear();

    this.addDots(root, data, x, y, z);
  }

  private addDots(root: SvgSelection, data: any, x: d3.ScaleLinear<number, number, never>, y: d3.ScaleLinear<number, number, never>, z: d3.ScaleLinear<number, number, never>) {
    root.append('g')
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d: any) { return x(d.gdpPercap); })
      .attr("cy", function (d: any) { return y(d.lifeExp); })
      .attr("r", function (d: any) { return z(d.pop); })
      .style("fill", "#69b3a2")
      .style("opacity", "0.7")
      .attr("stroke", "black");
  }

  private scaleLinear() {
    return d3.scaleLinear()
      .domain([200000, 1310000000])
      .range([1, 40]);
  }

  private drawYAxis(height: number, root: SvgSelection) {
    var y = d3.scaleLinear()
      .domain([35, 90])
      .range([height, 0]);
    root.append("g")
      .call(d3.axisLeft(y));
    return y;
  }

  private drawXAxis(width: number, root: SvgSelection, height: number) {
    var x = d3.scaleLinear()
      .domain([0, 10000])
      .range([0, width]);
    root.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    return x;
  }
}
