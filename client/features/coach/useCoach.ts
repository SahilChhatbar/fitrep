import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@/features/auth/authStore'
import * as api from './coach.api'

export const useCoaches = () => {
  return useQuery({
    queryKey: ['coaches'],
    queryFn: api.getCoaches,
    staleTime: 5 * 60 * 1000,
  })
}

export const useCoach = () => {
  const queryClient = useQueryClient()
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const setAuth = useAuthStore((s) => s.setAuth)
  const isCoach = user?.role === 'coach'

  const assignCoachMutation = useMutation({
    mutationFn: (coachId: string | null) => api.assignCoach(coachId),
    onSuccess: (data) => {
      if (token && data.user) {
        setAuth(data.user, token)
      }
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })

  const clientsQuery = useQuery({
    queryKey: ['coach-clients'],
    queryFn: api.getCoachClients,
    enabled: !!token && isCoach,
  })

  return {
    assignCoach: assignCoachMutation.mutate,
    isAssigningCoach: assignCoachMutation.isPending,
    assignCoachError: assignCoachMutation.error,

    clients: clientsQuery.data || [],
    isLoadingClients: clientsQuery.isLoading,
    refetchClients: clientsQuery.refetch,
  }
}

export const useCoachClientDetails = (clientId: string | null) => {
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const isCoach = user?.role === 'coach'

  return useQuery({
    queryKey: ['coach-client-details', clientId],
    queryFn: () => api.getCoachClientDetails(clientId!),
    enabled: !!token && isCoach && !!clientId,
  })
}

export const useCoachClientProgress = (clientId: string | null) => {
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const isCoach = user?.role === 'coach'

  return useQuery({
    queryKey: ['coach-client-progress', clientId],
    queryFn: () => api.getCoachClientProgress(clientId!),
    enabled: !!token && isCoach && !!clientId,
  })
}
