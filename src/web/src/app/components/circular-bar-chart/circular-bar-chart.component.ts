import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Bar } from 'src/app/models';
import { CircularBarChartRendererService } from 'src/app/services/circular-bar-chart-renderer.service';

@Component({
  selector: 'app-circular-bar-chart',
  templateUrl: './circular-bar-chart.component.html',
  styleUrls: ['./circular-bar-chart.component.scss']
})
export class CircularBarChartComponent implements AfterViewInit {
  @Input()
  data!: Bar[];

  @Input()
  maxY!: number;

  @ViewChild('chart')
  chart: ElementRef;

  private innerRadiusRatio = 0.15;

  width = 975;
  height = 975;

  constructor(private circularBarChartRenderer: CircularBarChartRendererService) { }

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this.circularBarChartRenderer.appendChart(this.chart, this.data, this.width, this.height, this.maxY, this.innerRadiusRatio);
  }
}
