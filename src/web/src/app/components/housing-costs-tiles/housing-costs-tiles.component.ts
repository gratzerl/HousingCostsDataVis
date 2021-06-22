import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { hosingCostsMock } from 'src/app/mock';
import { ChartInteractionService } from 'src/app/services';

@Component({
  selector: 'app-housing-costs-tiles',
  templateUrl: './housing-costs-tiles.component.html',
  styleUrls: ['./housing-costs-tiles.component.scss']
})
export class HousingCostsTilesComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  housingCosts = hosingCostsMock;
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
        console.log('bubble click', countryCode);
        this.selectedCountry = countryCode;
      });

    this.chartInteraction.barsInfo$
      .pipe(
        filter(([, , interaction]) => interaction === 'click'),
        takeUntil(this.onDestroy))
      .subscribe(([countryCode, year, interaction]) => {
        console.log('bar click', countryCode);
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

  tileClicked(tileIndex: number, isZoomed: boolean): void {
    // isZoomed ?
    //   this.selectedTileIdx = tileIndex :
    //   this.selectedTileIdx = undefined;

    // // TODO: remove hacky way to force rendering of tiles
    // this.housingCosts = [...this.housingCosts];
  }

}
