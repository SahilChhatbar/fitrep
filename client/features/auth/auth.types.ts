export interface User {
  _id: string
  name: string
  email: string
  role?: 'user' | 'coach'
  activeDietId?: string | { _id: string } | null
  activeWorkoutId?: string | { _id: string } | null
  tracking: {
    dietLog: Array<{ dietId: string; assignedAt: string; note?: string }>
    workoutLog: Array<{ workoutId: string; assignedAt: string; note?: string }>
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
}

export interface AuthResponse {
  user: User
  token: string
}
