import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ChartInteractionService } from 'src/app/services';
import HousingCostData from 'src/assets/housing-costs.json';
import HousingCostDataGrouped from 'src/assets/housing-costs-grouped.json';

export const IncomeGroups = [
  {
    text: 'Total',
    key: 'TOTAL'
  },
  {
    text: 'Above 60% median inc.',
    key: 'A_MD60'
  },
  {
    text: 'Below 60% median inc.',
    key: 'B_MD60'
  },
]

@Component({
  selector: 'app-housing-costs-tiles',
  templateUrl: './housing-costs-tiles.component.html',
  styleUrls: ['./housing-costs-tiles.component.scss']
})
export class HousingCostsTilesComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  housingCosts = HousingCostDataGrouped;
  maxCostsPercentage: number;

  incomeGroups = IncomeGroups;
  selectedIncomeGroup = IncomeGroups[2];

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

    const costs = this.housingCosts[this.selectedIncomeGroup.key]
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
