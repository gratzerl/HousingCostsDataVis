import { ElementRef, Injectable } from '@angular/core';
import { Bar } from "../models";
import { Arc, ScaleBand, ScaleRadial } from "d3";
import * as d3 from 'd3';

import { chartLabelFontSize } from '../constants/styling.constants';

@Injectable({
  providedIn: 'root'
})
export class CircularBarChartRendererService {

  constructor() { }

  appendChart(chartElement: ElementRef<any>, data: Bar[], width: number, height: number, yMaxValue: number, innerRadiusPercentage: number = 0.2, outerRadiusPadding: number = 24): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    const [innerRadius, outerRadius] = this.getRadii(width, height, innerRadiusPercentage, outerRadiusPadding);
    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);

    const svg = this.getSvg(data, chartElement, arc, width, height);

    // const xAxisFn = this.getXAxisFn(data, xScale, yScale);
    // svg.append('g').call(xAxisFn);

    // const yAxisFn = this.getYAxisFn(yScale);
    // svg.append('g').call(yAxisFn);

    return svg;
  }

  private getSvg(data: Bar[], chartElement: ElementRef<any>, arc: Arc<any, Bar>, width: number, height: number): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    const svg = d3
      .select(chartElement.nativeElement)
      .append('svg')
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height} `)
      .style('width', '100%')
      .style('height', 'auto')
      .style('font', `${chartLabelFontSize}px sans-serif`);

    svg
      .append('g')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('fill', '#89338f')
      .attr('d', d => arc(d))
      .on('mousemove', (event, d) => {
        console.log('mouseover', event);
        console.log('data', d);
      });

    return svg;
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

  // private getYAxisFn(yScale: ScaleRadial<number, number, never>) {
  //   const yAxis = g => g
  //     .attr('text-anchor', 'middle')
  //     .call(g => g
  //       .selectAll('g')
  //       .data(yScale.ticks(6).slice(1))
  //       .join('g')
  //       .attr('fill', 'none')
  //       .call(g => g // lines
  //         .append('circle')
  //         .attr('stroke', '#000')
  //         .attr('stroke-opacity', 0.2)
  //         .attr('r', yScale))
  //       .call(g => g // labels
  //         .append('text')
  //         .style('font', `${chartAxisFontSize}px sans-serif`)
  //         .attr('y', d => -yScale(d))
  //         .attr('dy', '0.35em')
  //         .attr('stroke', '#fff')
  //         .attr('stroke-width', 4)
  //         .text(d => `${d * 100}%`)
  //         .clone(true)
  //         .attr('fill', '#000')
  //         .attr('stroke', 'none')));

  //   return yAxis;
  // }

  private getXAxisFn(data: Bar[], xScale: ScaleBand<string>, yScale: ScaleRadial<number, number, never>) {
    const xAxis = g => g
      .attr('text-anchor', 'middle')
      .call(g => g
        .selectAll('g')
        .data(data)
        .join('g')
        .attr('transform', d => `rotate(${((xScale(d.year) + xScale.bandwidth() / 2) * 180) / Math.PI - 90}) translate(${yScale(d.percent) + chartLabelFontSize}, 0)`)
        .call(g => g
          .append('text')
          .attr('transform', d =>
            (xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) %
              (2 * Math.PI) < Math.PI ? 'rotate(90)translate(0,16)' : 'rotate(-90)translate(0,-9)')
          .text((d: Bar) => d.year)));

    return xAxis;
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

  private getRadii(width: number, height: number, innerRadiusPercentage: number, outerRadiusPadding: number): [innerRadius: number, outerRadius: number] {
    const innerRadius = width * innerRadiusPercentage;
    const outerRadius = (Math.min(width, height) / 2) - outerRadiusPadding;
    return [innerRadius, outerRadius];
  }

}
