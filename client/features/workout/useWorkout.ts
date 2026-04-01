import { useQuery } from '@tanstack/react-query'
import { getWorkoutById, getWorkouts } from './workout.api'
import type { GetWorkoutsParams } from './workout.types'

export function useWorkouts(params?: GetWorkoutsParams) {
  return useQuery({
    queryKey: ['workouts', params],
    queryFn: () => getWorkouts(params),
    staleTime: 1000 * 60 * 5,
  })
}
export function useWorkoutById(id: string) {
  return useQuery({
    queryKey: ['workouts', id],
    queryFn: () => getWorkoutById(id),
    staleTime: 1000 * 60 * 5,
  })
}
