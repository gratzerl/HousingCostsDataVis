import { Bar } from './bar.model';
import { CostComposition } from './cost-composition.model';

export interface HousingCosts {
  country: string;
  totalShareOnIncome: Bar[];
  composition: { [year: string]: CostComposition }
}
