export interface CoachInfo {
  _id: string
  name: string
  email: string
}

export interface User {
  _id: string
  name: string
  email: string
  role?: 'user' | 'coach'
  coachId?: CoachInfo | string | null
  activeDietId?: string | { _id: string; name?: string; goal?: string; type?: string; calories?: number } | null
  activeWorkoutId?: string | { _id: string; name?: string; level?: string; goal?: string; daysPerWeek?: number; split?: string } | null
  tracking: {
    dietLog: Array<{ dietId: string | any; assignedAt: string; note?: string }>
    workoutLog: Array<{ workoutId: string | any; assignedAt: string; note?: string }>
  }
  createdAt: string
  updatedAt: string
}

export interface LoginRequest {
  identifier: string
  password?: string // password is only used in request, not included in response
  role?: 'user' | 'coach'
}

export interface SignupRequest {
  name: string
  email: string
  password?: string
  role?: 'user' | 'coach'
  coachId?: string | null
}

export interface AuthResponse {
  user: User
  token: string
}
