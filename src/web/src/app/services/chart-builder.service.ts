import { ElementRef, Injectable } from '@angular/core';
import { chartLabelFontSizePx } from '../constants/styling.constants';

import * as d3 from 'd3';

export type SvgSelection = d3.Selection<SVGSVGElement, unknown, null, undefined>;
export type TextSelection = d3.Selection<SVGTextElement, unknown, null, undefined>;
export type GSelection = d3.Selection<SVGGElement, unknown, null, undefined>;

@Injectable({
  providedIn: 'root'
})
export class ChartBuilderService {

  constructor() { }

  appendSvg(element: ElementRef, width: number, height: number): SvgSelection {
    return d3
      .select(element.nativeElement)
      .append('svg')
      // .attr('viewBox', `0 0 ${width} ${height} `)
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height} `)
      .style('width', '100%')
      .style('height', 'auto')
      .style('font', `${chartLabelFontSizePx}px sans-serif`);
  }

  appendTextElement(svg: SvgSelection, id: string, defaultDisplay: string = 'inline'): TextSelection {
    return svg.append('g')
      .style('font', `${chartLabelFontSizePx}px sans-serif`)
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
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

  toggleElementVisibility(element: ElementRef<any>, elementId: string, isVisible: boolean): void {
    d3.select(element.nativeElement)
      .select(`#${elementId}`)
      .style('display', isVisible ? 'inline' : 'none');
  }
}
