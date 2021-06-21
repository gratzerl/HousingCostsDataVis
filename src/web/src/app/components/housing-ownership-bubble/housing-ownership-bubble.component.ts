import { OnInit, AfterViewInit, Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Bubble } from 'src/app/models';
import { takeUntil } from 'rxjs/operators';

import { OwnershipHousingMock } from '../../mock';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BubbleSelection,
  ChartInteractionService
} from 'src/app/services';

@Component({
  selector: 'app-housing-ownership-bubble',
  templateUrl: './housing-ownership-bubble.component.html',
  styleUrls: ['./housing-ownership-bubble.component.scss']
})

export class HousingOwnershipBubbleComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  private readonly chartWidth = 1800;
  private readonly chartHeight = 1440;

  private readonly margin = 175;
  private readonly width = this.chartWidth - (this.margin * 2);
  private readonly height = this.chartHeight - (this.margin * 2);

  private svgRoot: SvgSelection;
  private bubbles?: BubbleSelection;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  constructor(
    private bubbleChartBuilder: BubbleChartBuilderService,
    private chartManipulator: ChartManipulatorService,
    private interactionService: ChartInteractionService) { }

  ngOnInit(): void {
    this.interactionService.hoveredBar$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(countryCode => this.highlightBubble(countryCode));
    this.interactionService.hoveredYear$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(year => {
        console.log('####');
        console.log(year);
        const data = OwnershipHousingMock[year];
        console.log(data)
        if (year && data) {
          this.drawBubbleChart(OwnershipHousingMock[year], true) }
        }
        );
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private highlightBubble(countryCode: string): void {
    console.log(countryCode);
    this.chartManipulator.unhighlight(this.bubbles, false);
    if (countryCode !== null) {
      this.chartManipulator.highlight(`#country-${countryCode}`, false);
    }
  }

  private createChart(): void {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, 0, 0, this.chartWidth, this.chartHeight);

    this.drawBubbleChart(OwnershipHousingMock["2020"]);
  }

  private drawBubbleChart(data, removeChart = false): void {
    this.bubbles = this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      this.width,
      this.height,
      this.margin,
      removeChart
    );

    this.bubbles
      .on('mouseenter', (event: MouseEvent, bubble: Bubble) => {
        this.interactionService.hoveredBubble = bubble.country;
        this.chartManipulator.highlight(event.target as any, true);
      })
      .on('mouseleave', () => {
        this.interactionService.hoveredBubble = null;
        this.chartManipulator.unhighlight(this.bubbles, false);
      });
  }
}
