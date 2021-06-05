import { Injectable } from '@angular/core';
import { Bar } from '../models';
import { SvgSelection } from '.';

import { Arc, ScaleBand, ScaleRadial } from 'd3';
import * as d3 from 'd3';


export type BarSelection = d3.Selection<SVGPathElement, Bar, SVGGElement, unknown>;

@Injectable()
export class CircularBarChartBuilderService {

  constructor() { }

  appendBarChart(svg: SvgSelection, data: Bar[], width: number, height: number, yMaxValue: number, innerRadiusPercentage: number = 0.25, paddingPercentage: number = 0.015): BarSelection {
    const [innerRadius, outerRadius] = this.getRadii(width, height, innerRadiusPercentage, paddingPercentage);
    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);

    return this.drawBars(svg, data, arc);
  }

  private drawBars(svg: SvgSelection, data: Bar[], arc: Arc<any, Bar>): BarSelection {
    return svg.append('g')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('fill', '#89338f')
      .attr('id', 'barPath')
      .attr('d', d => arc(d));
  }

  private getArc(innerRadius: number, yScale: ScaleRadial<number, number, never>, xScale: ScaleBand<string>): Arc<any, Bar> {
    return d3
      .arc<Bar>()
      .innerRadius(innerRadius)
      .outerRadius((d: Bar) => yScale(d.percent))
      .startAngle((d: Bar) => xScale(d.year))
      .endAngle((d: Bar) => xScale(d.year) + xScale.bandwidth())
      .padAngle(0.01)
      .padRadius(innerRadius);
  }

  private getYScale(maxY: number, rangeBegin: number, rangeEnd: number): ScaleRadial<number, number, never> {
    return d3
      .scaleRadial()
      .domain([0, maxY + 0.1 * maxY])
      .range([rangeBegin, rangeEnd]);
  }

  private getXScale(data: Bar[]): ScaleBand<string> {
    return d3
      .scaleBand()
      .domain(data.map(d => d.year))
      .range([0, 2 * Math.PI])
      .align(0);
  }

  private getRadii(width: number, height: number, innerRadiusPercentage: number, paddingPercentage: number): [innerRadius: number, outerRadius: number] {
    const chartRadius = (Math.min(width, height) / 2);

    const innerRadius = chartRadius * innerRadiusPercentage;
    const outerRadius = chartRadius - (paddingPercentage * chartRadius);

    return [innerRadius, outerRadius];
  }

}
