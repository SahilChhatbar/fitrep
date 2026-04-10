import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from './progress.api'
import { CheckInInput, HistoryQuery, WorkoutSessionInput } from './progress.types'

export const useProgress = (historyParams: HistoryQuery = { limit: 10, skip: 0 }) => {
  const queryClient = useQueryClient()

  const summaryQuery = useQuery({
    queryKey: ['progress-summary'],
    queryFn: api.getProgressSummary,
  })

  const checkInHistoryQuery = useQuery({
    queryKey: ['check-in-history', historyParams],
    queryFn: () => api.getCheckInHistory(historyParams),
  })

  const workoutHistoryQuery = useQuery({
    queryKey: ['workout-history', historyParams],
    queryFn: () => api.getWorkoutSessionHistory(historyParams),
  })

  const logCheckInMutation = useMutation({
    mutationFn: (data: CheckInInput) => api.logCheckIn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress-summary'] })
      queryClient.invalidateQueries({ queryKey: ['check-in-history'] })
    },
  })

  const logWorkoutSessionMutation = useMutation({
    mutationFn: (data: WorkoutSessionInput) => api.logWorkoutSession(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress-summary'] })
      queryClient.invalidateQueries({ queryKey: ['workout-history'] })
    },
  })

  const deleteCheckInMutation = useMutation({
    mutationFn: (id: string) => api.deleteCheckIn(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress-summary'] })
      queryClient.invalidateQueries({ queryKey: ['check-in-history'] })
    },
  })

  const deleteWorkoutSessionMutation = useMutation({
    mutationFn: (id: string) => api.deleteWorkoutSession(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress-summary'] })
      queryClient.invalidateQueries({ queryKey: ['workout-history'] })
    },
  })

  return {
    summary: summaryQuery.data,
    isLoadingSummary: summaryQuery.isLoading,
    summaryError: summaryQuery.error,

    checkInHistory: checkInHistoryQuery.data,
    isLoadingCheckInHistory: checkInHistoryQuery.isLoading,

    workoutHistory: workoutHistoryQuery.data,
    isLoadingWorkoutHistory: workoutHistoryQuery.isLoading,

    logCheckIn: logCheckInMutation.mutate,
    isLoggingCheckIn: logCheckInMutation.isPending,

    logWorkoutSession: logWorkoutSessionMutation.mutate,
    isLoggingWorkoutSession: logWorkoutSessionMutation.isPending,

    deleteCheckIn: deleteCheckInMutation.mutate,
    deleteWorkoutSession: deleteWorkoutSessionMutation.mutate,
  }
}
