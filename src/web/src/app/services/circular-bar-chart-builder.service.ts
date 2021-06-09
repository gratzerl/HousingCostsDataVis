import { Injectable } from '@angular/core';
import { Bar } from '../models';
import { ChartManipulatorService, GSelection } from '.';
import { barColor, barChartAxisFontSizePx } from '../constants/styling.constants';

import { Arc, ScaleBand, ScaleRadial } from 'd3';
import * as d3 from 'd3';

export type BarSelection = d3.Selection<SVGPathElement, Bar, SVGGElement, unknown>;

export const CIRCULAR_BAR_CHART = {
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

  appendChart(root: GSelection, data: Bar[], yMaxValue: number, innerRadius: number, outerRadius: number, defaultLabelFn: () => string): BarSelection {
    const xScale = this.getXScale(data);
    const yScale = this.getYScale(yMaxValue, innerRadius, outerRadius);

    const arc = this.getArc(innerRadius, yScale, xScale);
    const bars = this.drawBars(root, data, arc);

    this.addDefaultLabel(root, defaultLabelFn);

    this.addHoverLabel(root);

    this.drawXLabels(root, data, innerRadius, xScale);
    this.chartManipulator.setVisible(root, [CIRCULAR_BAR_CHART.xAxisLabelsId], false);

    return bars;
  }

  private drawBars(selection: GSelection, data: Bar[], arc: Arc<any, Bar>): BarSelection {
    const { barPathId } = CIRCULAR_BAR_CHART;

    return selection.append('g')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('fill', barColor)
      .attr('id', barPathId)
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

  private addDefaultLabel(selection: GSelection, defaultLabelFn: () => string): void {
    const { defaultLabelId } = CIRCULAR_BAR_CHART;
    this.chartManipulator.appendText(selection, defaultLabelId)
      .text(() => defaultLabelFn());
  }

  private addHoverLabel(selection: GSelection): void {
    const { hoverLabelsId, hoverTopLabelId, hoverBottomLabelId } = CIRCULAR_BAR_CHART;
    const labels = this.chartManipulator.appendText(selection, hoverLabelsId, 'none');
    this.chartManipulator.appendTextLines(labels, [hoverTopLabelId, hoverBottomLabelId]);
  }

  private drawXLabels(selection: GSelection, data: Bar[], innerRadius: number, xScale: ScaleBand<string>): void {
    const { xAxisLabelsId } = CIRCULAR_BAR_CHART;
    selection.append('g')
      .attr('id', xAxisLabelsId)
      .style('font-size', `${barChartAxisFontSizePx}px`)
      .style('line-height', `${barChartAxisFontSizePx}px`)
      .style('text-anchor', 'middle')
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
