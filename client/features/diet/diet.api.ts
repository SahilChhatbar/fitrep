import { apiClient } from '@/lib/api-client'
import type { Diet, GetDietsParams, GetDietsResponse } from './diet.types'

export async function getDiets(params?: GetDietsParams): Promise<GetDietsResponse> {
  const res = await apiClient.get('/diets', {
    //subject to change
    params,
  })

  return res.data
}

export async function getDietById(id: string): Promise<Diet> {
  const res = await apiClient.get(`/diets/${id}`) //subject to change
  return res.data
}
