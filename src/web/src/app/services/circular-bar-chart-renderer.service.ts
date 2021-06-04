import { ElementRef, Injectable } from '@angular/core';
import { Bar } from '../models';
import { Arc, ScaleBand, ScaleRadial } from 'd3';
import * as d3 from 'd3';

import { chartLabelFontSize } from '../constants/styling.constants';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CircularBarChartRendererService {

  constructor() { }

  private hoveredBar = new Subject<[MouseEvent, Bar]>();

  get hoveredBar$(): Observable<[MouseEvent, Bar]> {
    return this.hoveredBar.asObservable();
  }

  appendChart(chartElement: ElementRef<any>, data: Bar[], centerLabel: string, width: number, height: number, yMaxValue: number, innerRadiusPercentage: number = 0.25, paddingPercentage: number = 0.015): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    const [innerRadius, outerRadius] = this.getRadii(width, height, innerRadiusPercentage, paddingPercentage);
    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);

    const svg = this.getSvg(data, chartElement, arc, width, height);

    this.appendTextElement(svg, 'centerLabel')
      .text(centerLabel);

    // const xAxisFn = this.getXAxisFn(data, xScale, yScale);
    // svg.append('g').call(xAxisFn);

    // const yAxisFn = this.getYAxisFn(yScale);
    // svg.append('g').call(yAxisFn);
    return svg;
  }

  private appendTextElement(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, id: string, defaultDisplay: string = 'inline'): d3.Selection<SVGTextElement, unknown, null, undefined> {
    return svg.append('g')
      .style('font', `${chartLabelFontSize}px sans-serif`)
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .append('text')
      .style('display', defaultDisplay)
      .attr('id', id);
  }

  private getSvg(data: Bar[], chartElement: ElementRef<any>, arc: Arc<any, Bar>, width: number, height: number): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    const svg = d3
      .select(chartElement.nativeElement)
      .append('svg')
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height} `)
      .style('width', '100%')
      .style('height', 'auto')
      .style('font', `${chartLabelFontSize}px sans-serif`);

    const hoverLabel = this.appendTextElement(svg, 'hoverLabel', 'none');

    hoverLabel
      .append('tspan')
      .attr('x', 0)
      .attr('id', 'topLabel');

    hoverLabel
      .append('tspan')
      .attr('dy', '1em')
      .attr('x', 0)
      .attr('id', 'bottomLabel');

    svg
      .append('g')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('fill', '#89338f')
      .attr('id', 'barPath')
      .attr('d', d => arc(d))
      .on('mouseenter', (event: MouseEvent, bar: Bar) => {
        this.hoveredBar.next([event, bar]);
        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '0.85');

        d3.select(chartElement.nativeElement)
          .select('#topLabel')
          .text(() => `${Math.ceil(bar.percent * 100)}%`);

        d3.select(chartElement.nativeElement)
          .select('#bottomLabel')
          .text(() => `${bar.year}`);

        this.toggleElementVisibility(chartElement, 'hoverLabel', true);
        this.toggleElementVisibility(chartElement, 'centerLabel', false);
      })
      .on('mouseleave', (event: MouseEvent) => {
        this.hoveredBar.next([event, null]);
        d3.select(event.target as any)
          .transition()
          .duration(50)
          .attr('opacity', '1');

        this.toggleElementVisibility(chartElement, 'hoverLabel', false);
        this.toggleElementVisibility(chartElement, 'centerLabel', true);
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

  private toggleElementVisibility(rootElement: ElementRef<any>, elementId: string, isVisible: boolean): void {
    d3.select(rootElement.nativeElement)
      .select(`#${elementId}`)
      .style('display', isVisible ? 'inline' : 'none');
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

  // private getXAxisFn(data: Bar[], xScale: ScaleBand<string>, yScale: ScaleRadial<number, number, never>) {
  //   const xAxis = g => g
  //     .attr('text-anchor', 'middle')
  //     .call(g => g
  //       .selectAll('g')
  //       .data(data)
  //       .join('g')
  //       .attr('transform', d => `rotate(${((xScale(d.year) + xScale.bandwidth() / 2) * 180) / Math.PI - 90}) translate(${yScale(d.percent) + chartLabelFontSize}, 0)`)
  //       .call(g => g
  //         .append('text')
  //         .attr('transform', d =>
  //           (xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) %
  //             (2 * Math.PI) < Math.PI ? 'rotate(90)translate(0,16)' : 'rotate(-90)translate(0,-9)')
  //         .text((d: Bar) => d.year)));

  //   return xAxis;
  // }

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
