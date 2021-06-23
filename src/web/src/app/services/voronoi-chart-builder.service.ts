import { Injectable } from '@angular/core';

import { voronoiChartStyling } from '../constants/bar-voronoi-chart.constants';
import { CostComposition } from '../models';
import { GSelection } from '.';

import { voronoiTreemap } from 'd3-voronoi-treemap';
import { randomUniform } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { SvgSelection } from './chart-manipulator.service';

import * as d3 from 'd3';

export type VoronoiSelection = d3.Selection<SVGGElement, unknown, SVGGElement, unknown>;

export const VORONOI_CHART = {
  chartId: 'voronoiChart',
  labelsId: 'voronoiChartLabels'
}

@Injectable()
export class VoronoiChartBuilderService {


  private readonly randomSeed = randomUniform();
  private hierarchyDataCache: { [id: string]: any } = {};

  private voronoiChartMapper: any;

  constructor() {
    this.voronoiChartMapper = voronoiTreemap();
    this.voronoiChartMapper.prng(this.randomSeed);
  }

  appendChart(root: SvgSelection, data: CostComposition, radius: number, weightFn: (data: CostComposition) => number, colorFn: (id: string) => string, createNewChart: boolean = false): VoronoiSelection {
    const { chartId, labelsId } = VORONOI_CHART;

    if (createNewChart) {
      root.selectAll(`#${chartId}`)
        .remove();
    }

    root.selectAll(`#${labelsId}`)
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

    return this.drawDiagram(hierarchy, root, radius, colorFn, createNewChart);
  }

  drawDiagram(hierarchy: any, root: SvgSelection, radius: number, colorFn: (id: string) => string, createNewChart: boolean): GSelection {
    const leaves = hierarchy.leaves();
    const { chartId, labelsId } = VORONOI_CHART;
    const { segmentStrokeColor, labelFontSizePx } = voronoiChartStyling;

    let chart: GSelection;
    if (createNewChart) {
      chart = root.append('g')
        .attr('id', chartId)
        .attr('transform', 'translate(' + [-radius, -radius] + ')');
    } else {
      chart = root.select(`#${chartId}`);
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
      .duration(800)
      .ease(d3.easeQuad)
      .attrTween('d', function (d: any) {
        const currentPath = d3.select(this).attr('d');
        const newPath = `M${d.polygon.join('L')}z`;
        return interpolatePath(currentPath, newPath);
      });

    const labels = chart.append('g')
      .attr('id', labelsId)
      .selectAll('.label')
      .data(leaves)
      .enter()
      .append('g')
      .classed('label', true)
      .style('text-anchor', 'middle')
      .attr('transform', function (d: any) {
        return 'translate(' + [d.polygon.site.x, d.polygon.site.y] + ')';
      })
      .append('text')
      .classed('no-select', true)
      .style('font-size', `${labelFontSizePx}px`);

    labels
      .data(leaves)
      .append('tspan')
      .text((d: any) => d.data.name)
      .attr('x', 0);

    labels
      .data(leaves)
      .append('tspan')
      .text((d: any) => `${d.data.percentage}%`)
      .attr('x', 0)
      .attr('dy', `${1}em`);

    return chart;
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
