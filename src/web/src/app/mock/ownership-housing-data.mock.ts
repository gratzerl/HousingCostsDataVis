import { OwnershipHousing } from '../models';

const getDataForYear = (offset: number) => (
[
    { country: 'AT', ownership: 15, housing: 35 + offset, gdp: 3612 },
    { country: 'DE', ownership: 10, housing: 40 + offset, gdp: 4000 },
    { country: 'HU', ownership: 20, housing: 30 + offset /2, gdp: 1250 },
    { country: 'RO', ownership: 43, housing: 20 + offset * 2, gdp: 1200 },
    { country: 'FR', ownership: 33, housing: 15 - offset, gdp: 1420 },
    { country: 'IT', ownership: 21, housing: 23 + offset / 2, gdp: 2400 },
    { country: 'CZ', ownership: 12, housing: 20 + offset, gdp: 1290 },
    { country: 'ES', ownership: 20, housing: 28, gdp: 1980 },
    { country: 'HR', ownership: 12, housing: 23, gdp: 980 },
    { country: 'SK', ownership: 10, housing: 24, gdp: 800 },
]    
)

export const OwnershipHousingMock = {
    "2011": getDataForYear(1),
    "2012": getDataForYear(2),
    "2013": getDataForYear(3),
    "2014": getDataForYear(4),
    "2015": getDataForYear(5),
    "2016": getDataForYear(6),
    "2017": getDataForYear(7),
    "2018": getDataForYear(8),
    "2019": getDataForYear(9),
    "2020": getDataForYear(10),
};
