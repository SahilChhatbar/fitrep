import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { ApiError } from '@/lib/api-types'
import { useAuthStore } from './authStore'
import { AuthResponse, LoginRequest, SignupRequest } from './auth.types'

export const useAuth = () => {
  const { setAuth, logout, user, token } = useAuthStore()
  const router = useRouter()

  const loginMutation = useMutation<AuthResponse, ApiError, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      const response = await apiClient.post<AuthResponse>('/user/login', data)
      return response.data
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token)
      router.push('/')
    },
  })

  const signupMutation = useMutation<AuthResponse, ApiError, SignupRequest>({
    mutationFn: async (data: SignupRequest) => {
      const response = await apiClient.post<AuthResponse>('/user/signup', data)
      return response.data
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token)
      router.push('/')
    },
  })

  const getMeQuery = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const response = await apiClient.get('/user/me')
      return response.data
    },
    enabled: !!token,
  })

  // Sync store with query data
  useEffect(() => {
    if (getMeQuery.data && token) {
      setAuth(getMeQuery.data, token)
    }
  }, [getMeQuery.data, token, setAuth])

  const currentUser = getMeQuery.data ?? user

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    signup: signupMutation.mutate,
    isSigningUp: signupMutation.isPending,
    signupError: signupMutation.error,
    user: currentUser,
    token,
    logout,
    getMeQuery,
  }
}
