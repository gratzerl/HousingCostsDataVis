import { Injectable } from '@angular/core';

import * as d3 from 'd3';
import { GSelection } from './chart-builder.service';

export type VoronoiSelection = d3.Selection<SVGCircleElement, unknown, SVGGElement, unknown>;

@Injectable({
  providedIn: 'root'
})
export class VoronoiChartBuilderService {

  constructor() { }

  appendChart(root: GSelection, radius: number): VoronoiSelection {
    return root.append('g')
      .attr('id', 'voronoiChart')
      .append('circle')
      .attr('r', radius)
      .attr('fill', '#398F33');
  }

}
