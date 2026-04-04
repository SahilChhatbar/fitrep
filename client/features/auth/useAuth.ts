import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from './authStore'

export const useAuth = () => {
  const { setAuth, logout, user, token } = useAuthStore()
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiClient.post('/user/login', data)
      return response.data
    },
    onSuccess: (data) => {
      setAuth(data.user, data.token)
      router.push('/')
    },
  })

  const signupMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiClient.post('/user/signup', data)
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

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    signup: signupMutation.mutate,
    isSigningUp: signupMutation.isPending,
    signupError: signupMutation.error,
    user,
    token,
    logout,
    getMeQuery,
  }
}
