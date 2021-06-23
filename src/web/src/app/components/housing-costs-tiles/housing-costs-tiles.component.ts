import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ChartInteractionService } from 'src/app/services';
import HousingCostData from 'src/assets/housing-costs.json';

@Component({
  selector: 'app-housing-costs-tiles',
  templateUrl: './housing-costs-tiles.component.html',
  styleUrls: ['./housing-costs-tiles.component.scss']
})
export class HousingCostsTilesComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  housingCosts = HousingCostData;
  maxCostsPercentage: number;

  selectedTileIdx?: number = undefined;
  selectedCountry: string = null;

  constructor(private chartInteraction: ChartInteractionService) { }

  ngOnInit(): void {
    this.chartInteraction.bubbleInfo$
      .pipe(
        filter(([, , interaction]) => interaction === 'click'),
        takeUntil(this.onDestroy))
      .subscribe(([countryCode, ,]) => {
        this.selectedCountry = countryCode;
      });

    this.chartInteraction.barsInfo$
      .pipe(
        filter(([, , interaction]) => interaction === 'click'),
        takeUntil(this.onDestroy))
      .subscribe(([countryCode, ,]) => {
        this.selectedCountry = countryCode;
      });

    const costs = this.housingCosts
      .map(c => c.totalShareOnIncome)
      .reduce((acc, bars) => acc.concat(bars), [])
      .map(bars => bars.percent);

    this.maxCostsPercentage = Math.max(...costs);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
