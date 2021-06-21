import { OnInit, AfterViewInit, Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Bubble } from 'src/app/models';
import { takeUntil } from 'rxjs/operators';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BubbleSelection,
  ChartInteractionService
} from 'src/app/services';

const data: Bubble[] = [
  { country: 'AT', ownership: 15, housing: 35, gdp: 3612 },
  { country: 'DE', ownership: 10, housing: 40, gdp: 4000 },
  { country: 'HU', ownership: 20, housing: 30, gdp: 1250 },
  { country: 'RO', ownership: 43, housing: 20, gdp: 1200 },
  { country: 'FR', ownership: 33, housing: 15, gdp: 1420 },
  { country: 'IT', ownership: 21, housing: 23, gdp: 2400 },
  { country: 'CZ', ownership: 12, housing: 20, gdp: 1290 },
  { country: 'ES', ownership: 20, housing: 28, gdp: 1980 },
  { country: 'HR', ownership: 12, housing: 23, gdp: 980 },
  { country: 'SK', ownership: 10, housing: 24, gdp: 800 },
];

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

    this.drawBubbleChart();
  }

  private drawBubbleChart(): void {
    this.bubbles = this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      this.width,
      this.height,
      this.margin
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
