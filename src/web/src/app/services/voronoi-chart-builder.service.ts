import { Injectable } from '@angular/core';

import * as d3 from 'd3';
import { CostComposition } from '../models';
import { GSelection } from './chart-builder.service';
import { voronoiTreemap } from 'd3-voronoi-treemap';
import { segmentStrokeColor } from '../constants/styling.constants';

export type VoronoiSelection = d3.Selection<SVGGElement, unknown, SVGGElement, unknown>;

@Injectable()
export class VoronoiChartBuilderService {

  constructor() { }

  appendChart(root: GSelection, data: CostComposition, radius: number, weightFn: (data: CostComposition) => number, colorFn: (id: string) => string, replaceChart: boolean = true): VoronoiSelection {
    if (replaceChart) {
      root.selectAll('#voronoiChart')
        .remove();

      root.selectAll('#voronoiChartLabels')
        .remove();
    }

    const hierarchy = d3.hierarchy(data);
    hierarchy.sum(weightFn);

    const circlePolygonClippings = this.computeCirclingPolygon(radius);

    const map = voronoiTreemap();
    map.clip(circlePolygonClippings);
    map(hierarchy);

    this.drawDiagram(hierarchy, root, radius, colorFn);

    return root;
  }

  drawDiagram(hierarchy: any, root: GSelection, radius: number, colorFn: (id: string) => string): void {
    const leaves = hierarchy.leaves();

    root.append('g')
      .attr('id', 'voronoiChart')
      .attr('transform', 'translate(' + [-radius, -radius] + ')')
      .selectAll('.segment')
      .data(leaves)
      .enter()
      .append('path')
      .attr('id', 'vonroiSegment')
      .classed('segment', true)
      .attr('d', (d: any) => `M${d.polygon.join(',')}z`)
      .style('stroke', segmentStrokeColor)
      .style('fill', (d: any) => {
        const data = d.data as CostComposition;
        return colorFn(data.id);
      });

    root.append('g')
      .attr('id', 'voronoiChartLabels')
      .attr('transform', 'translate(' + [-radius, -radius] + ')')
      .selectAll('.label')
      .data(leaves)
      .enter()
      .append('g')
      .classed('label', true)
      .attr('text-anchor', 'middle')
      .attr('transform', function (d: any) {
        return 'translate(' + [d.polygon.site.x, d.polygon.site.y] + ')';
      })
      .append('text')
      .style('font', `18px sans-serif`)
      .text((d: any) => {
        console.log(d);
        return `${d.data.name} (${Math.ceil(d.data.percentage * 100)}%)`;
      });
  }

  computeCirclingPolygon(radius: number): [number, number][] {
    const points = 180,
      increment = (2 * Math.PI) / points,
      circlingPolygon = [];

    for (let a = 0, i = 0; i < points; i++, a += increment) {
      circlingPolygon.push(
        [radius + radius * Math.cos(a), radius + radius * Math.sin(a)]
      )
    }

    return circlingPolygon;
  };

}
