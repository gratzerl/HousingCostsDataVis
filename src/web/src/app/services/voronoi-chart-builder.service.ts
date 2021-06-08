import { Injectable } from '@angular/core';

import { CostComposition } from '../models';
import { GSelection } from './chart-builder.service';
import { segmentStrokeColor } from '../constants/styling.constants';

import { voronoiTreemap } from 'd3-voronoi-treemap';
import { randomUniform } from 'd3';
import * as d3 from 'd3';

export type VoronoiSelection = d3.Selection<SVGGElement, unknown, SVGGElement, unknown>;

@Injectable()
export class VoronoiChartBuilderService {

  private readonly chartId = 'voronoiChart';
  private readonly labelsId = 'voronoiChartLabels';
  private readonly randomSeed = randomUniform();
  private hierarchyDataCache: { [id: string]: any } = {};

  private voronoiChartMapper: any;

  constructor() {
    this.voronoiChartMapper = voronoiTreemap();
    this.voronoiChartMapper.prng(this.randomSeed);
  }

  appendChart(root: GSelection, data: CostComposition, radius: number, weightFn: (data: CostComposition) => number, colorFn: (id: string) => string, createNewChart: boolean = false): VoronoiSelection {
    if (createNewChart) {
      root.selectAll(`#${this.chartId}`)
        .remove();
    }

    root.selectAll(`#${this.labelsId}`)
      .remove();

    const circlePolygonClippings = this.computeCircleClipping(radius);
    this.voronoiChartMapper.clip(circlePolygonClippings);

    let hierarchy: any;
    if (this.hierarchyDataCache[data.id] !== undefined) {
      hierarchy = this.hierarchyDataCache[data.id];
    } else {
      hierarchy = d3.hierarchy(data);
      hierarchy.sum(weightFn);
      this.voronoiChartMapper(hierarchy);
      this.hierarchyDataCache[data.id] = hierarchy;
    }

    this.drawDiagram(hierarchy, root, radius, colorFn, createNewChart);

    return root;
  }

  drawDiagram(hierarchy: any, root: GSelection, radius: number, colorFn: (id: string) => string, createNewChart: boolean): void {
    const leaves = hierarchy.leaves();

    let chart: GSelection;
    if (createNewChart) {
      chart = root.append('g')
        .attr('id', this.chartId)
        .style('fill', '#FFFFFF')
        .attr('transform', 'translate(' + [-radius, -radius] + ')');
    } else {
      chart = root.select(`#${this.chartId}`);
    }

    let segments = chart
      .selectAll(`.segment`)
      .data(leaves);

    segments = segments
      .enter()
      .append('path')
      .classed('segment', true);

    chart.selectAll('.segment')
      .data(leaves)
      .style('stroke', segmentStrokeColor)
      .style('fill', (d: any) => {
        const data = d.data as CostComposition;
        return colorFn(data.coicop);
      })
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr('d', (d: any) => `M${d.polygon.join(',')}z`);

    root.append('g')
      .attr('id', this.labelsId)
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
        return `${d.data.name} (${Math.ceil(d.data.percentage * 100)}%)`;
      });
  }

  private computeCircleClipping(radius: number): [number, number][] {
    const numberOfPoints = 180,
      increment = (2 * Math.PI) / numberOfPoints,
      clippingPoints = [];

    for (let a = 0, i = 0; i < numberOfPoints; i++, a += increment) {
      clippingPoints.push(
        [radius + radius * Math.cos(a), radius + radius * Math.sin(a)]
      )
    }

    return clippingPoints;
  };

}
