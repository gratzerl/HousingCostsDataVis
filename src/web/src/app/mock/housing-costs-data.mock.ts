import { HousingCosts } from '../models';

export const demoHousingCostData: HousingCosts = {
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
};

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
          { id: 'FR-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
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
          { id: 'FR-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
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
          { id: 'FR-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
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
          { id: 'FR-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
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
          { id: 'FR-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
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
          { id: 'FR-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
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
          { id: 'FR-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
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
          { id: 'FR-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
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
          { id: 'FR-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
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
          { id: 'FR-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'FR-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'IT',
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
        id: 'IT-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'IT-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'IT-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'IT-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'IT-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'IT-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'IT-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'IT-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'IT-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'IT-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'IT-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'IT-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'IT-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'IT-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'IT-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'IT-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'IT-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'IT-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'IT-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'IT-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'IT-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'IT-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'IT-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'IT-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'IT-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'IT-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'IT-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'IT-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'IT-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'IT-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'IT-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'IT-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'IT-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'IT-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'IT-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'IT-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'IT-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'IT-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'IT-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'IT-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'IT-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'IT-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'IT-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'IT-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'IT-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'IT-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'IT-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'IT-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'IT-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'IT-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'IT-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'CZ',
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
        id: 'CZ-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'CZ-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'CZ-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'CZ-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'CZ-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'CZ-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'CZ-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'CZ-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'CZ-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'CZ-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'CZ-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'CZ-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'CZ-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'CZ-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'CZ-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'CZ-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'CZ-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'CZ-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'CZ-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'CZ-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'CZ-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'CZ-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'CZ-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'CZ-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'CZ-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'CZ-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'CZ-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'CZ-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'CZ-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'CZ-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'CZ-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'CZ-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'CZ-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'CZ-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'CZ-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'CZ-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'CZ-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'CZ-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'CZ-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'CZ-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'CZ-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'CZ-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'CZ-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'CZ-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'CZ-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'CZ-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'CZ-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'CZ-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'CZ-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'CZ-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'CZ-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'ES',
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
        id: 'ES-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'ES-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'ES-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'ES-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'ES-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'ES-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'ES-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'ES-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'ES-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'ES-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'ES-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'ES-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'ES-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'ES-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'ES-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'ES-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'ES-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'ES-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'ES-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'ES-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'ES-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'ES-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'ES-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'ES-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'ES-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'ES-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'ES-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'ES-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'ES-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'ES-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'ES-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'ES-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'ES-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'ES-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'ES-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'ES-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'ES-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'ES-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'ES-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'ES-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'ES-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'ES-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'ES-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'ES-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'ES-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'ES-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'ES-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'ES-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'ES-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'ES-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'ES-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'HU',
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
        id: 'HU-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'HU-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'HU-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'HU-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'HU-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'HU-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'HU-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'HU-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'HU-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'HU-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'HU-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'HU-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'HU-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'HU-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'HU-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'HU-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'HU-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'HU-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'HU-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'HU-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'HU-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'HU-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'HU-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'HU-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'HU-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'HU-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'HU-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'HU-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'HU-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'HU-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'HU-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'HU-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'HU-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'HU-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'HU-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'HU-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'HU-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'HU-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'HU-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'HU-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'HU-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'HU-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'HU-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'HU-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'HU-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'HU-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HU-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'HU-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'HU-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'HU-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'HU-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'HR',
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
        id: 'HR-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'HR-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'HR-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'HR-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'HR-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'HR-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'HR-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'HR-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'HR-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'HR-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'HR-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'HR-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'HR-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'HR-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'HR-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'HR-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'HR-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'HR-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'HR-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'HR-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'HR-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'HR-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'HR-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'HR-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'HR-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'HR-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'HR-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'HR-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'HR-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'HR-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'HR-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'HR-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'HR-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'HR-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'HR-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'HR-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'HR-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'HR-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'HR-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'HR-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'HR-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'HR-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'HR-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'HR-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'HR-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'HR-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'HR-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'HR-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'HR-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'HR-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'HR-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
  {
    country: 'SK',
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
        id: 'SK-2011-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2011-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'SK-2011-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.121 },
          { id: 'SK-2011-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.01 },
          { id: 'SK-2011-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.019 },
          { id: 'SK-2011-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2012': {
        id: 'SK-2012-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2012-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.048 },
          { id: 'SK-2012-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'SK-2012-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.02 },
          { id: 'SK-2012-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.023 },
          { id: 'SK-2012-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.051 }
        ]
      },
      '2013': {
        id: 'SK-2013-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2013-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.046 },
          { id: 'SK-2013-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'SK-2013-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.021 },
          { id: 'SK-2013-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.025 },
          { id: 'SK-2013-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.052 }
        ]
      },
      '2014': {
        id: 'SK-2014-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2014-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0462 },
          { id: 'SK-2014-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.15 },
          { id: 'SK-2014-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.023 },
          { id: 'SK-2014-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'SK-2014-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.048 }
        ]
      },
      '2015': {
        id: 'SK-2015-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2015-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.045 },
          { id: 'SK-2015-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.10 },
          { id: 'SK-2015-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.020 },
          { id: 'SK-2015-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.032 },
          { id: 'SK-2015-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.044 }
        ]
      },
      '2016': {
        id: 'SK-2016-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2016-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.042 },
          { id: 'SK-2016-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.13 },
          { id: 'SK-2016-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'SK-2016-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.033 },
          { id: 'SK-2016-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.041 }
        ]
      },
      '2017': {
        id: 'SK-2017-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2017-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.0448 },
          { id: 'SK-2017-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.124 },
          { id: 'SK-2017-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.022 },
          { id: 'SK-2017-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'SK-2017-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.04 }
        ]
      },
      '2018': {
        id: 'SK-2018-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2018-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.05 },
          { id: 'SK-2018-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.14 },
          { id: 'SK-2018-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.018 },
          { id: 'SK-2018-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.026 },
          { id: 'SK-2018-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.042 }
        ]
      },
      '2019': {
        id: 'SK-2019-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2019-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.052 },
          { id: 'SK-2019-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.19 },
          { id: 'SK-2019-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.016 },
          { id: 'SK-2019-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.024 },
          { id: 'SK-2019-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.040 }
        ]
      },
      '2020': {
        id: 'SK-2020-CP04',
        coicop: 'CP04',
        name: 'Total housing costs',
        percentage: 0.2,
        children: [
          { id: 'SK-2020-CP041', coicop: 'CP041', name: 'Actual rentals', percentage: 0.054 },
          { id: 'SK-2020-CP042', coicop: 'CP042', name: 'Imputed rentals', percentage: 0.2 },
          { id: 'SK-2020-CP043', coicop: 'CP043', name: 'Maintenance', percentage: 0.013 },
          { id: 'SK-2020-CP044', coicop: 'CP044', name: 'Water supply', percentage: 0.028 },
          { id: 'SK-2020-CP045', coicop: 'CP045', name: 'Electricity', percentage: 0.045 }
        ]
      }
    }
  },
];
