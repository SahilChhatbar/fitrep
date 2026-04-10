import { apiClient } from '@/lib/api-client'
import {
  CheckInHistoryResponse,
  CheckInInput,
  ProgressSummary,
  WorkoutSessionHistoryResponse,
  WorkoutSessionInput,
  HistoryQuery,
} from './progress.types'

export const getProgressSummary = async (): Promise<ProgressSummary> => {
  const response = await apiClient.get<ProgressSummary>('/progress/summary')
  return response.data
}

export const logCheckIn = async (data: CheckInInput): Promise<any> => {
  const response = await apiClient.post('/progress/checkin', {
    ...data,
    utcOffsetMinutes: new Date().getTimezoneOffset() * -1,
  })
  return response.data
}

export const getCheckInHistory = async (params: HistoryQuery): Promise<CheckInHistoryResponse> => {
  const response = await apiClient.get<CheckInHistoryResponse>('/progress/checkin', { params })
  return response.data
}

export const deleteCheckIn = async (id: string): Promise<any> => {
  const response = await apiClient.delete(`/progress/checkin/${id}`)
  return response.data
}

export const logWorkoutSession = async (data: WorkoutSessionInput): Promise<any> => {
  const response = await apiClient.post('/progress/session', {
    ...data,
    utcOffsetMinutes: new Date().getTimezoneOffset() * -1,
  })
  return response.data
}

export const getWorkoutSessionHistory = async (
  params: HistoryQuery,
): Promise<WorkoutSessionHistoryResponse> => {
  const response = await apiClient.get<WorkoutSessionHistoryResponse>('/progress/session', { params })
  return response.data
}

export const deleteWorkoutSession = async (id: string): Promise<any> => {
  const response = await apiClient.delete(`/progress/session/${id}`)
  return response.data
}
