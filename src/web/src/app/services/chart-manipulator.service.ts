import { ElementRef, Injectable } from '@angular/core';
import { barChartStyling } from '../constants/bar-voronoi-chart.constants';

import * as d3 from 'd3';
import { Transition } from 'd3';

export type SvgSelection = d3.Selection<SVGSVGElement, unknown, null, undefined>;
export type TextSelection = d3.Selection<SVGTextElement, unknown, null, undefined>;
export type GSelection = d3.Selection<SVGGElement, unknown, null, undefined>;

@Injectable({
  providedIn: 'root'
})
export class ChartManipulatorService {

  constructor() { }

  appendSvg(element: ElementRef, x: number, y: number, width: number, height: number): SvgSelection {
    return d3
      .select(element.nativeElement)
      .append('svg')
      .attr('viewBox', `${x} ${y} ${width} ${height} `)
      .style('transform', `translate(0, 0) scale(1)`)
      .style('font', `${barChartStyling.labelFontSizePx}px sans-serif`);
  }

  appendText<T extends d3.BaseType>(svg: d3.Selection<T, unknown, null, undefined>, id: string, defaultDisplay: string = 'inline'): TextSelection {
    return svg.append('g')
      .style('font', `${barChartStyling.labelFontSizePx}px sans-serif`)
      .style('pointer-events', 'none')
      .style('text-anchor', 'middle')
      .append('text')
      .style('display', defaultDisplay)
      .attr('id', id);
  }

  appendTextLines(text: TextSelection, lineIds: string[]): void {
    lineIds.forEach((lineId, idx) => {
      const tspan = text.append('tspan')
        .attr('x', 0)
        .attr('id', lineId);

      if (idx > 0) {
        tspan.attr('dy', `${idx}em`);
      }
    });
  }

  setText<T extends d3.BaseType>(selection: d3.Selection<T, unknown, null, undefined>, textId: string, content: string) {
    selection
      .select(`#${textId}`)
      .text(content);
  }

  highlight(selector: any): void {
    d3.select(selector)
      .transition()
      .duration(50)
      .attr('opacity', '0.85');
  }

  unhighlight(selector: any, withAnimation: boolean): void {
    if (withAnimation) {
      this.getAnimated(selector)
        .attr('opacity', '1');
    } else {
      d3.selectAll(selector)
        .attr('opacity', '1');
    }
  }

  setVisible(selection: d3.Selection<d3.BaseType, unknown, null, unknown>, ids: string[], isVisible: boolean): void {
    ids.forEach(id => {
      const x = selection.select(`#${id}`)
        .style('display', isVisible ? 'inline' : 'none');
    });
  }

  private getAnimated(selection: any, duration: number = 50): Transition<any, unknown, null, undefined> {
    return d3.select(selection)
      .transition()
      .duration(duration);
  }
}
