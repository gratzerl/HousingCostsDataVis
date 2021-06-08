export interface CostComposition {
  id: string,
  name: string,
  percentage: number,
  children?: CostComposition[]
}
