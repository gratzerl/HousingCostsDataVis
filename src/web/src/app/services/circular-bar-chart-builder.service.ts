import { Injectable } from '@angular/core';
import { Bar } from '../models';
import { ChartManipulatorService, GSelection } from '.';
import { barChartStyling } from '../constants/bar-voronoi-chart.constants';

import { Arc, ScaleBand, ScaleRadial } from 'd3';
import { SvgSelection } from './chart-manipulator.service';
import * as d3 from 'd3';
import { style } from '@angular/animations';

export type BarSelection = d3.Selection<d3.BaseType, Bar, SVGGElement, unknown>;

export const CIRCULAR_BAR_CHART = {
  chartRootId: 'circularBarChart',
  barPathId: 'barPath',
  defaultLabelId: 'defaultLabel',
  hoverLabelsId: 'hoverLabel',
  hoverTopLabelId: 'hoverTopLabel',
  hoverBottomLabelId: 'hoverBottomLabel',
  xAxisLabelsId: 'xAxisLabel'
};


@Injectable()
export class CircularBarChartBuilderService {

  constructor(private chartManipulator: ChartManipulatorService) { }

  appendChart(root: SvgSelection, data: Bar[], yMaxValue: number, innerRadius: number, outerRadius: number, createNewChart: boolean = false): BarSelection {
    if (createNewChart) {
      root.select(`#${CIRCULAR_BAR_CHART.chartRootId}`)
        .remove();

      root.append('g')
        .attr('id', CIRCULAR_BAR_CHART.chartRootId);
    }

    const chart = root.select(`#${CIRCULAR_BAR_CHART.chartRootId}`) as GSelection;

    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);

    const bars = this.drawBars(chart, data, arc, createNewChart);

    if (createNewChart) {
      this.addDefaultLabel(chart);
      this.addHoverLabel(chart);
    }

    this.addXAxisLabels(chart, data, innerRadius, xScale, createNewChart);

    this.chartManipulator.setVisible(chart, [CIRCULAR_BAR_CHART.xAxisLabelsId], false);

    return bars;
  }

  private drawBars(chart: GSelection, data: Bar[], arc: Arc<any, Bar>, createNewChart: boolean): BarSelection {
    const { barPathId } = CIRCULAR_BAR_CHART;
    const { color } = barChartStyling;

    if (createNewChart) {
      chart.append('g')
        .attr('id', 'bars');
    }

    chart
      .select('#bars')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .classed('bar-path', true)
      .attr('id', (d: Bar) => `${barPathId}-${d.year}`);

    chart
      .selectAll(`.bar-path`)
      .data(data)
      .style('fill', color)
      .style('cursor', 'pointer')
      .attr('d', d => arc(d));

    return chart.selectAll(`.bar-path`);
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

  private addDefaultLabel(selection: GSelection): void {
    const { defaultLabelId } = CIRCULAR_BAR_CHART;
    this.chartManipulator.appendText(selection, defaultLabelId);
  }

  private addHoverLabel(selection: GSelection): void {
    const { hoverLabelsId, hoverTopLabelId, hoverBottomLabelId } = CIRCULAR_BAR_CHART;
    const labels = this.chartManipulator.appendText(selection, hoverLabelsId, 'none');
    this.chartManipulator.appendTextLines(labels, [hoverTopLabelId, hoverBottomLabelId]);
  }

  private addXAxisLabels(selection: GSelection, data: Bar[], innerRadius: number, xScale: ScaleBand<string>, createNewChart: boolean): void {
    const { xAxisLabelsId } = CIRCULAR_BAR_CHART;
    const { x } = barChartStyling.axis;

    if (createNewChart) {
      selection.append('g')
        .attr('id', xAxisLabelsId);
    }

    selection.select(`#${xAxisLabelsId}`)
      .classed('no-select', true)
      .style('font-size', `${x.fontSizePx}px`)
      .style('line-height', `${x.lineHeightPx}px`)
      .style('text-anchor', 'middle')
      .call(g => g.selectAll('g')
        .data(data)
        .join('g')
        .attr('transform', (d: Bar) => `
          rotate(${((xScale(d.year) + xScale.bandwidth() / 2) * 180 / Math.PI - 90)})
          translate(${innerRadius + ((xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? 30 : 45)} ,0)
        `)
        .call(g => g.append('text')
          .attr('transform', d => (xScale(d.year) + xScale.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI
            ? 'rotate(90)translate(0,16)'
            : 'rotate(-90)translate(0,-9)')
          .text(d => `${d.year}`))
      );
  }
}
