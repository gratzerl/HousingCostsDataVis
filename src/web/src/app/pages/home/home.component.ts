import { Component, OnInit } from '@angular/core';
import { demoHousingCostData } from 'src/app/mock/housing-costs-data.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  demoHousingCosts = demoHousingCostData;
  maxY: number;

  constructor() { }

  ngOnInit(): void {
    const percentages = this.demoHousingCosts.totalShareOnIncome.map(share => share.percent)
    this.maxY = Math.max(...percentages);
  }
}
