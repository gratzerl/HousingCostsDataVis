import { Injectable } from '@angular/core';
import { Bar } from '../models';
import { GSelection } from './chart-builder.service';
import { barColor, chartAxisFontSizePx } from '../constants/styling.constants';

import { Arc, ScaleBand, ScaleRadial } from 'd3';
import * as d3 from 'd3';

export type BarSelection = d3.Selection<SVGPathElement, Bar, SVGGElement, unknown>;

@Injectable({
  providedIn: 'root'
})
export class CircularBarChartBuilderService {

  constructor() { }

  appendChart(selection: GSelection, data: Bar[], width: number, height: number, yMaxValue: number, innerRadiusPercentage: number = 0.25, paddingPercentage: number = 0.015): BarSelection {
    const [innerRadius, outerRadius] = this.getRadii(width, height, innerRadiusPercentage, paddingPercentage);
    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);
    const bars = this.drawBars(selection, data, arc);
    this.drawXLabels(selection, data, innerRadius, xScale);

    return bars;
  }

  private drawBars(selection: GSelection, data: Bar[], arc: Arc<any, Bar>): BarSelection {
    return selection.append('g')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('fill', barColor)
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

  private drawXLabels(selection: GSelection, data: Bar[], innerRadius: number, xScale: ScaleBand<string>): void {
    selection.append('g')
      .attr('id', 'barLabels')
      .attr('font-size', `${chartAxisFontSizePx}px`)
      .attr('line-height', `${chartAxisFontSizePx}px`)
      .attr('text-anchor', 'middle')
      .call(g => g.selectAll('g')
        .data(data)
        .join('g')
        .attr('transform', (d: Bar) => `
          rotate(${((xScale(d.year) + xScale.bandwidth() / 2) * 180 / Math.PI - 90)})
          translate(${innerRadius + ((xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? 30 : 40)} ,0)
        `)
        .call(g => g.append('text')
          .attr('transform', d => (xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI
            ? 'rotate(90)translate(0,16)'
            : 'rotate(-90)translate(0,-9)')
          .text(d => `${d.year}`))
      );
  }
}
