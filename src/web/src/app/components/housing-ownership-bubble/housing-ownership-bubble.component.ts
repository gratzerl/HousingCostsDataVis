import { OnInit, AfterViewInit, Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Bubble } from 'src/app/models';
import { filter, takeUntil } from 'rxjs/operators';
import * as d3 from 'd3';

import { OwnershipHousingMock } from '../../mock';

import {
  BubbleChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BubbleSelection,
  ChartInteractionService
} from 'src/app/services';
import { bubbleStyling } from 'src/app/constants/bubble-chart.constants';

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

  selectedYear = '2020';

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  constructor(
    private bubbleChartBuilder: BubbleChartBuilderService,
    private chartManipulator: ChartManipulatorService,
    private interactionService: ChartInteractionService) { }

  ngOnInit(): void {
    this.interactionService.barsInfo$
      .pipe(
        takeUntil(this.onDestroy))
      .subscribe(([countryCode, year, _]) => {
        this.selectedYear = year;

        if (countryCode !== null) {

          const data = OwnershipHousingMock[year];
          this.drawBubbleChart(data, true);

          this.highlightBubble(countryCode);
        } else {
          this.chartManipulator.unhighlight(this.bubbles.select('.bubble'), bubbleStyling.color, false, bubbleStyling.opacity);
        }
      });
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private highlightBubble(countryCode: string): void {
    this.chartManipulator.unhighlight(this.bubbles.select('.bubble'), bubbleStyling.color, false, bubbleStyling.opacity);

    if (countryCode !== null) {
      this.chartManipulator.highlight(`#country-${countryCode} .bubble`, bubbleStyling.highlightcolor, false);
    }
  }

  private createChart(): void {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, 0, 0, this.chartWidth, this.chartHeight);

    this.svgRoot.on('click', (event: MouseEvent) => {
      event.stopPropagation();
      this.interactionService.bubbleInfo = [null, null, 'click'];
    })

    this.drawBubbleChart(OwnershipHousingMock[this.selectedYear]);
  }

  private drawBubbleChart(data: Bubble[], removeChart: boolean = false): void {
    this.bubbles = this.bubbleChartBuilder.appendChart(
      this.svgRoot,
      data,
      this.width,
      this.height,
      this.margin,
      removeChart
    );

    this.bubbles.on('mouseenter', (event: MouseEvent, bubble: Bubble) => {
      this.interactionService.bubbleInfo = [bubble.country, this.selectedYear, 'hover'];
      this.chartManipulator.setText(this.bubbles, `country-${bubble.country} .label`, `${bubble.gdp}€`);

      const bubbleElem = d3.select(event.target as any).select('.bubble');
      this.chartManipulator.highlight(bubbleElem, bubbleStyling.highlightcolor, false);
    });

    this.bubbles.on('mouseleave', (_, bubble: Bubble) => {
      this.interactionService.bubbleInfo = [null, null, 'hover'];
      this.chartManipulator.setText(this.bubbles, `country-${bubble.country} .label`, `${bubble.country}€`);

      this.chartManipulator.unhighlight(this.bubbles.select('.bubble'), bubbleStyling.color, false, bubbleStyling.opacity);
    });

    this.bubbles.on('click', (event: MouseEvent, bubble: Bubble) => {
      event.stopPropagation();
      this.interactionService.bubbleInfo = [bubble.country, this.selectedYear, 'click'];
    });
  }
}
