import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from './userTracking.api'

export const useUserTracking = () => {
  const queryClient = useQueryClient()

  const dietLogQuery = useQuery({
    queryKey: ['diet-log'],
    queryFn: api.getDietLog,
  })

  const workoutLogQuery = useQuery({
    queryKey: ['workout-log'],
    queryFn: api.getWorkoutLog,
  })

  const assignDietMutation = useMutation({
    mutationFn: ({ dietId, note }: { dietId: string; note?: string }) =>
      api.assignDiet(dietId, note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['diet-log'] })
    },
  })

  const removeDietMutation = useMutation({
    mutationFn: api.removeDiet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['diet-log'] })
    },
  })

  const assignWorkoutMutation = useMutation({
    mutationFn: ({ workoutId, note }: { workoutId: string; note?: string }) =>
      api.assignWorkout(workoutId, note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['workout-log'] })
    },
  })

  const removeWorkoutMutation = useMutation({
    mutationFn: api.removeWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['workout-log'] })
    },
  })

  return {
    dietLog: dietLogQuery.data,
    isLoadingDietLog: dietLogQuery.isLoading,

    workoutLog: workoutLogQuery.data,
    isLoadingWorkoutLog: workoutLogQuery.isLoading,

    assignDiet: assignDietMutation.mutate,
    isAssigningDiet: assignDietMutation.isPending,

    removeDiet: removeDietMutation.mutate,
    isRemovingDiet: removeDietMutation.isPending,

    assignWorkout: assignWorkoutMutation.mutate,
    isAssigningWorkout: assignWorkoutMutation.isPending,

    removeWorkout: removeWorkoutMutation.mutate,
    isRemovingWorkout: removeWorkoutMutation.isPending,
  }
}
