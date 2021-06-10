import { HousingCosts } from '../models';

export const hosingCostsMock: HousingCosts[] = [
  {
    country: 'AT',
    totalShareOnIncome: [
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
    ],
    composition: {
      '2011': {
        id: 'AT-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'AT-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'AT-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'AT-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'AT-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'AT-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'AT-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'AT-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'AT-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'AT-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'AT-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'AT-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'AT-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'AT-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'AT-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'AT-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'AT-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'AT-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'AT-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'AT-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'AT-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'AT-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'AT-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'AT-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'AT-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'AT-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'AT-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'AT-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'AT-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'AT-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'AT-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'AT-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'AT-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'AT-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'AT-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'AT-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'AT-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'AT-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'AT-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'AT-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'AT-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'AT-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'AT-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'AT-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'AT-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'AT-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'AT-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'AT-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'AT-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'AT-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'AT-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'DE',
    totalShareOnIncome: [
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
    ],
    composition: {
      '2011': {
        id: 'DE-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'DE-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'DE-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'DE-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'DE-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'DE-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'DE-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'DE-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'DE-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'DE-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'DE-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'DE-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'DE-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'DE-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'DE-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'DE-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'DE-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'DE-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'DE-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'DE-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'DE-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'DE-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'DE-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'DE-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'DE-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'DE-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'DE-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'DE-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'DE-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'DE-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'DE-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'DE-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'DE-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'DE-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'DE-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'DE-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'DE-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'DE-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'DE-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'DE-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'DE-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'DE-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'DE-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'DE-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'DE-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'DE-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'DE-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'DE-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'DE-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'DE-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'DE-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'FR',
    totalShareOnIncome: [
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
    ],
    composition: {
      '2011': {
        id: 'FR-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'FR-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'FR-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'FR-2011-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.019 },
          { id: 'FR-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'FR-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'FR-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'FR-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'FR-2012-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.023 },
          { id: 'FR-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'FR-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'FR-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'FR-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'FR-2013-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.025 },
          { id: 'FR-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'FR-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'FR-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'FR-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'FR-2014-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.026 },
          { id: 'FR-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'FR-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'FR-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'FR-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'FR-2015-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.032 },
          { id: 'FR-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'FR-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'FR-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'FR-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'FR-2016-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.033 },
          { id: 'FR-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'FR-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'FR-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'FR-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'FR-2017-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.028 },
          { id: 'FR-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'FR-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'FR-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'FR-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'FR-2018-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.026 },
          { id: 'FR-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'FR-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'FR-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'FR-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'FR-2019-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.024 },
          { id: 'FR-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'FR-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'FR-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'FR-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'FR-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'FR-2020-CP044', coicop: 'CP044', name: 'WFRer supply', percentage: 0.028 },
          { id: 'FR-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  }
];
