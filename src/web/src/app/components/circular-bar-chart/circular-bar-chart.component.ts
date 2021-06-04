import { ContentChild, OnDestroy } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { Bar } from 'src/app/models';
import { CircularBarChartRendererService } from 'src/app/services/circular-bar-chart-renderer.service';

@Component({
  selector: 'app-circular-bar-chart',
  templateUrl: './circular-bar-chart.component.html',
  styleUrls: ['./circular-bar-chart.component.scss'],
  providers: [CircularBarChartRendererService]
})
export class CircularBarChartComponent implements AfterViewInit, OnDestroy {
  @Input()
  data!: Bar[];

  @Input()
  centerLabel!: string;

  @Input()
  maxY!: number;

  @ViewChild('chart')
  chart: ElementRef;

  private onDestroy = new Subject<void>();
  private innerRadiusRatio = 0.25;

  width = 1440;
  height = 1440;

  constructor(private circularBarChartRenderer: CircularBarChartRendererService) { }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  render(): void {
    const svg = this.circularBarChartRenderer.appendChart(this.chart, this.data, this.centerLabel, this.width, this.height, this.maxY, this.innerRadiusRatio);
  }
}
