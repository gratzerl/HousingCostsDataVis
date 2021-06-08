export interface CostComposition {
  id: string,
  coicop: string,
  name: string,
  percentage: number,
  children?: CostComposition[]
}
