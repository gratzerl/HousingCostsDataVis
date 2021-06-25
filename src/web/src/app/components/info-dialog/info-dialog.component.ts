import { Component, OnInit } from '@angular/core';
import { demoHousingCostData } from 'src/app/mock/housing-costs-data.mock';
import { ChartInteractionService } from 'src/app/services';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
  providers: [ChartInteractionService]
})
export class InfoDialogComponent implements OnInit {

  demoHousingCosts = demoHousingCostData;
  maxY: number;

  constructor() { }

  ngOnInit(): void {
    const percentages = this.demoHousingCosts.totalShareOnIncome.map(share => share.percent);
    this.maxY = Math.max(...percentages);
  }
}
