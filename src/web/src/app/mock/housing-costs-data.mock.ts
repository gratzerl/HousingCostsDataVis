import { HousingCosts } from '../models';

export const hosingCostsMock: HousingCosts[] = [
  {
    country: 'AT',
    costs: [
      { percent: 0.2, year: '2011' },
      { percent: 0.23, year: '2012' },
      { percent: 0.24, year: '2013' },
      { percent: 0.26, year: '2014' },
      { percent: 0.25, year: '2015' },
      { percent: 0.27, year: '2016' },
      { percent: 0.28, year: '2017' },
      { percent: 0.3, year: '2018' },
      { percent: 0.35, year: '2019' },
      { percent: 0.42, year: '2020' }
    ]
  },
  {
    country: 'DE',
    costs: [
      { percent: 0.1, year: '2011' },
      { percent: 0.13, year: '2012' },
      { percent: 0.14, year: '2013' },
      { percent: 0.18, year: '2014' },
      { percent: 0.25, year: '2015' },
      { percent: 0.21, year: '2016' },
      { percent: 0.22, year: '2017' },
      { percent: 0.29, year: '2018' },
      { percent: 0.3, year: '2019' },
      { percent: 0.31, year: '2020' }
    ]
  },
  {
    country: 'FR',
    costs: [
      { percent: 0.12, year: '2011' },
      { percent: 0.12, year: '2012' },
      { percent: 0.14, year: '2013' },
      { percent: 0.15, year: '2014' },
      { percent: 0.16, year: '2015' },
      { percent: 0.2, year: '2016' },
      { percent: 0.21, year: '2017' },
      { percent: 0.22, year: '2018' },
      { percent: 0.24, year: '2019' },
      { percent: 0.26, year: '2020' }
    ]
  }
];
