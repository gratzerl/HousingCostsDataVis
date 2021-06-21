import { Injectable } from '@angular/core';
import { GSelection, SvgSelection } from './chart-manipulator.service';
import * as d3 from 'd3';
import { Bubble } from '../models';
import { axisStyling, bubbleStyling } from '../constants/bubble-chart.constants';
import { create } from 'd3';

export const BUBBLE_CHART = {
  chartRootId: 'bubbleChart',
};

export type BubbleSelection = d3.Selection<SVGGElement, Bubble, SVGGElement, unknown>;

@Injectable({
  providedIn: 'root'
})
export class BubbleChartBuilderService {

  constructor() { }

  appendChart(svgRoot: SvgSelection, data: Bubble[], width: number, height: number, margin: number, createNewChart: boolean = false): BubbleSelection {
    if (createNewChart) {
      svgRoot.selectAll(`#bubbleChart`)
      .remove();
    }

    const root = svgRoot.append('g')
      .attr('id', 'bubbleChart')
      .attr('transform', 'translate(' + margin + ' ' + margin + ')');

    const maxX = this.getMax(data, d => d.ownership);
    const x = this.drawXAxis(root, maxX, width, height, margin);

    const maxY = this.getMax(data, d => d.housing);
    const y = this.drawYAxis(root, maxY, height);

    return this.drawBubbles(root, data, x, y);
  }

  private getMax(data: Bubble[], fn: (d: Bubble) => number): number {
    return data.map(fn).reduce((a, b) => Math.max(a, b));
  }

  private drawXAxis(chartRoot: GSelection, maxX: number, width: number, height: number, margin: number): d3.ScaleLinear<number, number, never> {
    const { tickFontSizePx, tickPaddingPx, labelFontSizePx, x } = axisStyling;

    const xScale = d3.scaleLinear()
      .domain([0, maxX + 5])
      .range([0, width]);

    chartRoot.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale)
        .tickFormat(d => d + '%')
        .tickPadding(tickPaddingPx))
      .style('font-size', `${tickFontSizePx}px`);

    chartRoot.append('text')
      .attr('class', 'x label')
      .style('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height)
      .attr('dy', `${x.labelYOffsetEm}em`)
      .style('font-size', `${labelFontSizePx}px`)
      .text('Ownership');

    return xScale;
  }

  private drawYAxis(chartRoot: GSelection, maxY: number, height: number): d3.ScaleLinear<number, number, never> {
    const { tickFontSizePx, tickPaddingPx, y, labelFontSizePx } = axisStyling;

    const yScale = d3.scaleLinear()
      .domain([0, maxY + 5])
      .range([height, 0]);

    chartRoot.append('g')
      .call(d3.axisLeft(yScale)
        .tickFormat(d => d + '%')
        .tickPadding(tickPaddingPx))
      .attr('id', 'yAxis')
      .style('font-size', `${tickFontSizePx}px`);

    chartRoot
      .append('text')
      .attr('id', 'yAxisLabel')
      .attr('dy', `${y.labelXOffsetEm}em`)
      .attr('dx', `${y.labelYOffsetEm}em`)
      .style('text-anchor', 'start')
      .style('font-size', `${labelFontSizePx}px`)
      .text('Housing');

    return yScale;
  }

  private drawBubbles(chartRoot: GSelection, data: Bubble[], xScale: d3.ScaleLinear<number, number, never>, yScale: d3.ScaleLinear<number, number, never>): BubbleSelection {
    const { color, opacity, labelSizePx } = bubbleStyling;

    const z = d3.scaleLinear()
      .domain([0, 10000])
      .range([40, 120]);

    const dots = chartRoot
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('g')
      .attr('id', (d: Bubble) => `country-${d.country}`)
      .style('cursor', 'pointer')
      .classed('no-select', true)
      .classed('dot', true);

    dots.append('circle')
      .classed('bubble', true)
      .attr('cx', (d: Bubble) => xScale(d.ownership))
      .attr('cy', (d: Bubble) => yScale(d.housing))
      .attr('r', (d: Bubble) => z(d.gdp))
      .style('opacity', opacity)
      .style('fill', color);

    dots.append('text')
      .classed('label', true)
      .style('text-anchor', 'middle')
      .style('alignment-baseline', 'central')
      .style('font-size', `${labelSizePx}px`)
      .attr('x', (d: Bubble) => xScale(d.ownership))
      .attr('y', (d: Bubble) => yScale(d.housing))
      .text((d: Bubble) => d.country);

    return dots;
  }
}
