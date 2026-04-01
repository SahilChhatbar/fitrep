export type WorkoutLevel = 'beginner' | 'intermediate' | 'advanced'
export type WorkoutGoal =
  | 'fat_loss'
  | 'muscle_gain'
  | 'strength'
  | 'general_fitness'
  | 'hypertrophy'

export interface ExerciseDetails {
  description?: string
  muscles?: string[]
}

export interface Exercise {
  name: string
  sets?: number
  reps?: string
  details?: ExerciseDetails
}

export interface DayPlan {
  day: string
  focus: string
  exercises: Exercise[]
}

export interface Workout {
  id: string
  name: string
  level: WorkoutLevel
  goal: WorkoutGoal
  daysPerWeek: number
  split: string
  schedule: DayPlan[]
  createdAt: string // ISO string from backend
  updatedAt: string
}

export interface GetWorkoutsParams {
  page?: number
  limit?: number
  level?: WorkoutLevel
  goal?: WorkoutGoal
}

export interface GetWorkoutsResponse {
  data: Workout[]
  meta?: {
    page: number
    limit: number
    total?: number
    totalPages?: number
  }
}
