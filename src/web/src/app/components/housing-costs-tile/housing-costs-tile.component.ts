import {
  OnInit,
  OnDestroy,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  CircularBarChartBuilderService,
  ChartManipulatorService,
  SvgSelection,
  BarSelection,
  VoronoiChartBuilderService,
  VoronoiSelection,
  CIRCULAR_BAR_CHART,
  VORONOI_CHART,
  ChartInteractionService
} from 'src/app/services';

import { Bar, HousingCosts } from 'src/app/models';
import { barChartStyling, voronoiChartStyling } from 'src/app/constants/bar-voronoi-chart.constants';

@Component({
  selector: 'app-housing-costs-tile',
  templateUrl: './housing-costs-tile.component.html',
  styleUrls: ['./housing-costs-tile.component.scss'],
  providers: [VoronoiChartBuilderService, CircularBarChartBuilderService]
})
export class HousingCostsTileComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  housingCosts!: HousingCosts;

  @Input()
  maxY!: number;

  @ViewChild('chart')
  chartContainerRef: ElementRef;

  private readonly onDestory = new Subject<void>();

  private readonly defaultRadiusPercentage = 0.3;
  private readonly zoomedRadiusPercentage = 0.55;
  private readonly chartPaddingPercentage = 0.015;

  private readonly height = 1440;
  private readonly width = 1440;

  private readonly maxRadius = (Math.min(this.width, this.height) / 2);
  private readonly outerRadius = this.maxRadius - (this.chartPaddingPercentage * this.maxRadius);
  private readonly defaultRadius = this.maxRadius * this.defaultRadiusPercentage;
  private readonly zoomedRadius = this.maxRadius * this.zoomedRadiusPercentage;

  isZoomed = false;

  private svgRoot: SvgSelection;
  private bars: BarSelection;
  private voronoiChart?: VoronoiSelection = undefined;

  private selectedBar?: Bar = undefined;

  constructor(
    private interactionService: ChartInteractionService,
    private circularBarChartBuilder: CircularBarChartBuilderService,
    private voronoiChartBuilder: VoronoiChartBuilderService,
    private chartManipulator: ChartManipulatorService) { }

  ngOnInit(): void {
    this.interactionService.bubbleInfo$
      .pipe(takeUntil(this.onDestory))
      .subscribe(([countryCode, year, interaction]) => {
        if (interaction === 'hover') {
          if (countryCode === this.housingCosts.country && !this.isZoomed) {
            this.chartManipulator.highlight(this.bars, barChartStyling.highlightColor, false);
          } else {
            this.chartManipulator.unhighlight(this.bars, barChartStyling.color, false);
          }
        } else if (interaction === 'click') {
          if (countryCode === this.housingCosts.country && !this.isZoomed) {
            this.zoomChart(year);
          } else if (this.isZoomed && countryCode !== this.housingCosts.country) {
            console.log(this.isZoomed);

            this.unzoomChart();
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestory.next();
    this.onDestory.complete();
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    this.svgRoot = this.chartManipulator.appendSvg(this.chartContainerRef, -this.width / 2, -this.height / 2, this.width, this.height);
    this.createSvgClickInteraction();

    this.createBarChart();
  }

  private createBarChart() {
    this.bars = this.circularBarChartBuilder.appendChart(
      this.svgRoot,
      this.housingCosts.totalShareOnIncome,
      this.maxY,
      this.defaultRadius,
      this.outerRadius,
      true);


    const { defaultLabelId } = CIRCULAR_BAR_CHART;
    this.chartManipulator.setText(this.svgRoot, defaultLabelId, this.housingCosts.country);
    this.createBarsInteraction();
  }

  private createBarsInteraction(): void {
    this.bars.on('mouseenter', (event: MouseEvent, bar: Bar) => {
      this.chartManipulator.highlight(event.target as any, barChartStyling.highlightColor, true);

      const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId, defaultLabelId], false);

      if (this.isZoomed) {
        return;
      }

      this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId], true);

      const { hoverTopLabelId, hoverBottomLabelId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setText(this.svgRoot, hoverTopLabelId, `${bar.percent}%`);
      this.chartManipulator.setText(this.svgRoot, hoverBottomLabelId, `${bar.year}`);

      this.interactionService.barsInfo = [this.housingCosts.country, bar.year, 'hover'];
    });

    this.bars.on('mouseleave', (event: MouseEvent, bar: Bar) => {
      if (bar !== this.selectedBar) {
        this.chartManipulator.unhighlight(event.target as any, barChartStyling.color, true);
      }

      if (this.isZoomed) {
        return;
      }

      const { defaultLabelId, hoverLabelsId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId], true);
      this.chartManipulator.setVisible(this.svgRoot, [hoverLabelsId], false);

      this.interactionService.barsInfo = [null, null, 'hover'];
    });

    this.bars.on('click', (event: MouseEvent, bar: Bar) => {
      event.stopPropagation();

      this.selectedBar = bar;
      this.zoomChart(bar.year);

      this.interactionService.barsInfo = [this.housingCosts.country, bar.year, 'click'];
    });
  }

  private createSvgClickInteraction(): void {
    this.svgRoot.on('click', (event: MouseEvent, _) => {
      event.stopPropagation();

      this.unzoomChart();

      this.interactionService.barsInfo = [null, null, 'click'];
    });
  }

  private setIsZoomed(zoomed: boolean) {
    this.isZoomed = zoomed;
  }

  private unzoomChart(): void {
    if (!this.isZoomed) {
      return;
    }

    this.setIsZoomed(false);

    this.bars = this.circularBarChartBuilder.appendChart(
      this.svgRoot,
      this.housingCosts.totalShareOnIncome,
      this.maxY,
      this.defaultRadius,
      this.outerRadius,
      false);

    const { defaultLabelId, hoverLabelsId, xAxisLabelsId } = CIRCULAR_BAR_CHART;
    this.chartManipulator.unhighlight(this.bars, barChartStyling.color, false);

    this.chartManipulator.setVisible(this.svgRoot, [xAxisLabelsId, hoverLabelsId, VORONOI_CHART.chartId], false);
    this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId], true);
  }

  private zoomChart(year: string): void {
    this.chartManipulator.unhighlight(this.bars, barChartStyling.color, false);

    if (!this.isZoomed) {
      this.setIsZoomed(true);

      this.bars = this.circularBarChartBuilder.appendChart(
        this.svgRoot,
        this.housingCosts.totalShareOnIncome,
        this.maxY,
        this.zoomedRadius,
        this.outerRadius,
        false);

      const { defaultLabelId, hoverLabelsId, xAxisLabelsId } = CIRCULAR_BAR_CHART;
      this.chartManipulator.setVisible(this.svgRoot, [defaultLabelId, hoverLabelsId], false);
      this.chartManipulator.setVisible(this.svgRoot, [xAxisLabelsId], true);
    }

    const { barPathId } = CIRCULAR_BAR_CHART;
    const bar = this.svgRoot.select(`#${barPathId}-${year}`);
    this.chartManipulator.highlight(bar, barChartStyling.highlightColor, false);

    const data = this.housingCosts.composition[year];
    const { compositionCategoryColors } = voronoiChartStyling;

    this.voronoiChart = this.voronoiChartBuilder.appendChart(this.svgRoot, data, this.zoomedRadius, (data) => data.percentage, (id) => compositionCategoryColors[id], this.voronoiChart === undefined);
    this.voronoiChart.on('click', (e: MouseEvent, _) => e.stopPropagation());

    this.chartManipulator.setVisible(this.svgRoot, [VORONOI_CHART.chartId], true);
  }
}
