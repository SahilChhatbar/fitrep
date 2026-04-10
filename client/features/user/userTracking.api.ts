import { apiClient } from '@/lib/api-client'

export interface AssignPlanInput {
  dietId?: string
  workoutId?: string
  note?: string
}

export const assignDiet = async (dietId: string, note?: string) => {
  const response = await apiClient.post('/user/me/diet', { dietId, note })
  return response.data
}

export const removeDiet = async () => {
  const response = await apiClient.delete('/user/me/diet')
  return response.data
}

export const getDietLog = async () => {
  const response = await apiClient.get('/user/me/diet/log')
  return response.data
}

export const assignWorkout = async (workoutId: string, note?: string) => {
  const response = await apiClient.post('/user/me/workout', { workoutId, note })
  return response.data
}

export const removeWorkout = async () => {
  const response = await apiClient.delete('/user/me/workout')
  return response.data
}

export const getWorkoutLog = async () => {
  const response = await apiClient.get('/user/me/workout/log')
  return response.data
}
