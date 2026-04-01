import { apiClient } from '@/lib/api-client'
import type { GetWorkoutsParams, GetWorkoutsResponse, Workout } from './workout.types'

export async function getWorkouts(params?: GetWorkoutsParams): Promise<GetWorkoutsResponse> {
  const res = await apiClient.get('/workouts', {
    params,
  })

  return res.data
}

export async function getWorkoutById(id: string): Promise<Workout> {
  const res = await apiClient.get(`/workouts/${id}`)
  return res.data
}
