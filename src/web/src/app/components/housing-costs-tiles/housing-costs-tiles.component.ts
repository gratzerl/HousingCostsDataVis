import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChartInteractionService } from 'src/app/services';
import { Interaction } from 'src/app/services/chart-interaction.service';
import HousingCostDataGrouped from 'src/assets/housing-costs-grouped.json';

import * as isoCountries from 'i18n-iso-countries';

import enLocale from 'i18n-iso-countries/langs/en.json';
isoCountries.registerLocale(enLocale);

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

  countryName: string = null;

  constructor(private chartInteraction: ChartInteractionService) { }

  ngOnInit(): void {
    this.chartInteraction.bubbleInfo$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(([countryCode, , interaction]) => this.updateCurrentCountry(countryCode, interaction));

    this.chartInteraction.barsInfo$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(([countryCode, , interaction]) => this.updateCurrentCountry(countryCode, interaction));

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

  private updateCurrentCountry(countryCode: string, interaction: Interaction): void {

    const nonIsoCountryNames = {
      "EL": "Greece",
      "UK": "United Kingdom", 
    };

    this.countryName = isoCountries.getName(countryCode, 'en', { select: 'official' }) ?? nonIsoCountryNames[countryCode];

    if (interaction === 'click') {
      this.selectedCountry = countryCode;
    }
  }
}
