import { apiClient } from '@/lib/api-client'
import { CoachInfo, User } from '@/features/auth/auth.types'

export interface ClientProgressSummary {
  user: {
    name: string
    email: string
    memberSince: string
    activeDiet: any
    activeWorkout: any
  }
  workout: {
    totalSessions: number
    totalActiveDays: number
    currentStreak: number
    longestStreak: number
    avgSessionDurationMinutes: number | null
    recentSessions: any[]
    totalPlansAssigned: number
  }
  diet: {
    totalCheckIns: number
    totalCheckInDays: number
    totalPlansAssigned: number
    recentCheckIns: any[]
    weightProgress: {
      start: number | null
      current: number | null
      change: number | null
    }
    latestBodyFat: number | null
    latestCheckInDate: string | null
  }
  combined: {
    overlapDays: number
    checkInConsistency: number
  }
}

export const getCoaches = async (): Promise<CoachInfo[]> => {
  const response = await apiClient.get<CoachInfo[]>('/user/coaches')
  return response.data
}

export const assignCoach = async (coachId: string | null): Promise<{ message: string; user: User }> => {
  const response = await apiClient.put<{ message: string; user: User }>('/user/me/coach', { coachId })
  return response.data
}

export const getCoachClients = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/user/coach/clients')
  return response.data
}

export const getCoachClientDetails = async (clientId: string): Promise<User> => {
  const response = await apiClient.get<User>(`/user/coach/clients/${clientId}`)
  return response.data
}

export const getCoachClientProgress = async (clientId: string): Promise<ClientProgressSummary> => {
  const response = await apiClient.get<ClientProgressSummary>(`/user/coach/clients/${clientId}/progress`)
  return response.data
}
