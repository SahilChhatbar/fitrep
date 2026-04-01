import { useQuery } from '@tanstack/react-query'
import { getDietById, getDiets } from './diet.api'
import type { GetDietsParams } from './diet.types'

export function useDiets(params?: GetDietsParams) {
  return useQuery({
    queryKey: ['diets', params],
    queryFn: () => getDiets(params),
    staleTime: 1000 * 60 * 5,
  })
}
export function useDietById(id: string) {
  return useQuery({
    queryKey: ['diets', id],
    queryFn: () => getDietById(id),
    staleTime: 1000 * 60 * 5,
  })
}
