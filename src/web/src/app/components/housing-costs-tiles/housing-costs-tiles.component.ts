import { Component, OnInit } from '@angular/core';
import { hosingCostsMock } from 'src/app/mock';

@Component({
  selector: 'app-housing-costs-tiles',
  templateUrl: './housing-costs-tiles.component.html',
  styleUrls: ['./housing-costs-tiles.component.scss']
})
export class HousingCostsTilesComponent implements OnInit {

  housingCosts = hosingCostsMock;
  maxCostsPercentage: number;

  constructor() { }

  ngOnInit(): void {
    const costs = this.housingCosts
      .map(c => c.costs)
      .reduce((acc, bars) => acc.concat(bars), [])
      .map(bars => bars.percent);

    this.maxCostsPercentage = Math.max(...costs);
  }

}
