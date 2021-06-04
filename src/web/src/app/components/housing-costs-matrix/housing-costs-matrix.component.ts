import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { hosingCostsMock } from 'src/app/mock';

@Component({
  selector: 'app-housing-costs-matrix',
  templateUrl: './housing-costs-matrix.component.html',
  styleUrls: ['./housing-costs-matrix.component.scss']
})
export class HousingCostsMatrixComponent implements OnInit {

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
