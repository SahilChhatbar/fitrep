import { Diet } from '../diet/diet.types'
import { Workout } from '../workout/workout.types'

export interface CheckIn {
  _id: string
  userId: string
  date: string
  dayKey: string
  weight?: number
  bodyFat?: number
  notes?: string
  activeDietId?: string | Diet | null
  activeWorkoutId?: string | Workout | null
  createdAt: string
  updatedAt: string
}

export interface WorkoutSession {
  _id: string
  userId: string
  workoutId: string | Workout
  dayCompleted: string
  completedAt: string
  dayKey: string
  durationMinutes?: number
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface ProgressSummary {
  user: {
    name: string
    memberSince: string
    activeDiet: Diet | null
    activeWorkout: Workout | null
  }
  workout: {
    totalSessions: number
    totalActiveDays: number
    currentStreak: number
    longestStreak: number
    avgSessionDurationMinutes: number | null
    recentSessions: WorkoutSession[]
    totalPlansAssigned: number
  }
  diet: {
    totalCheckIns: number
    totalCheckInDays: number
    totalPlansAssigned: number
    recentCheckIns: CheckIn[]
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

export interface CheckInInput {
  date?: string
  utcOffsetMinutes?: number
  weight?: number
  bodyFat?: number
  notes?: string
}

export interface WorkoutSessionInput {
  workoutId: string
  dayCompleted: string
  completedAt?: string
  utcOffsetMinutes?: number
  durationMinutes?: number
  notes?: string
}

export interface HistoryQuery {
  limit?: number
  skip?: number
}

export interface CheckInHistoryResponse {
  total: number
  limit: number
  skip: number
  checkIns: CheckIn[]
}

export interface WorkoutSessionHistoryResponse {
  total: number
  limit: number
  skip: number
  sessions: WorkoutSession[]
}
