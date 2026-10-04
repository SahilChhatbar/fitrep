'use client'

import React, { useEffect } from 'react'
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useQueryClient } from '@tanstack/react-query'
import { Plus, Trash2 } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { Workout, WorkoutGoal, WorkoutLevel } from '@/features/workout/workout.types'
import { apiClient } from '@/lib/api-client'

interface WorkoutFormModalProps {
  opened: boolean
  onClose: () => void
  workoutToEdit?: Workout | null
  onSuccess?: () => void
}

export const WorkoutFormModal = ({
  opened,
  onClose,
  workoutToEdit,
  onSuccess,
}: WorkoutFormModalProps) => {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const [loading, setLoading] = React.useState(false)

  const form = useForm({
    initialValues: {
      name: '',
      level: 'beginner' as WorkoutLevel,
      goal: 'fat_loss' as WorkoutGoal,
      daysPerWeek: 4,
      split: 'Upper / Lower',
      schedule: [
        {
          day: 'Day 1',
          focus: 'Upper Body',
          exercises: [{ name: 'Bench Press', sets: 3, reps: '10' }],
        },
      ],
    },
    validate: {
      name: (val) => {
        if (!val || val.trim().length < 2) return 'Plan name must be at least 2 characters'
        if (val.trim().length > 120) return 'Plan name must be under 120 characters'
        return null
      },
      split: (val) => {
        if (!val || val.trim().length < 2) return 'Split description is required'
        if (val.trim().length > 100) return 'Split description is too long'
        return null
      },
      daysPerWeek: (val) => {
        if (val === undefined || val === null) return 'Days per week is required'
        if (val < 1) return 'Must train at least 1 day per week'
        if (val > 7) return 'Cannot exceed 7 days per week'
        return null
      },
      schedule: {
        day: (val: string) =>
          !val || val.trim().length < 1
            ? 'Day name is required'
            : val.trim().length > 50
            ? 'Day name is too long'
            : null,
        focus: (val: string) =>
          !val || val.trim().length < 1
            ? 'Focus is required'
            : val.trim().length > 100
            ? 'Focus description is too long'
            : null,
        exercises: {
          name: (val: string) =>
            !val || val.trim().length < 1
              ? 'Exercise name is required'
              : val.trim().length > 100
              ? 'Exercise name is too long'
              : null,
          sets: (val: number) =>
            val !== undefined && (val < 1 || val > 100)
              ? 'Sets must be between 1 and 100'
              : null,
        },
      },
    },
  })

  useEffect(() => {
    if (workoutToEdit) {
      form.setValues({
        name: workoutToEdit.name,
        level: workoutToEdit.level,
        goal: workoutToEdit.goal,
        daysPerWeek: workoutToEdit.daysPerWeek,
        split: workoutToEdit.split,
        schedule:
          workoutToEdit.schedule && workoutToEdit.schedule.length > 0
            ? workoutToEdit.schedule.map((s) => ({
                day: s.day,
                focus: s.focus,
                exercises: (s.exercises || []).map((e) => ({
                  name: e.name,
                  sets: e.sets || 3,
                  reps: e.reps || '10',
                })),
              }))
            : [
                {
                  day: 'Day 1',
                  focus: 'Full Body',
                  exercises: [{ name: 'Squats', sets: 3, reps: '10' }],
                },
              ],
      })
    } else {
      form.reset()
    }
  }, [workoutToEdit, opened])

  const handleSubmit = async (values: typeof form.values) => {
    try {
      setLoading(true)
      const headers = { Authorization: `Bearer ${token}` }

      if (workoutToEdit) {
        await apiClient.put(`/workouts/${workoutToEdit._id}`, values, { headers })
        notifications.show({
          title: 'Workout Updated',
          message: 'Workout plan has been updated successfully.',
          color: 'teal',
        })
      } else {
        await apiClient.post('/workouts', values, { headers })
        notifications.show({
          title: 'Workout Created',
          message: 'New workout plan has been uploaded.',
          color: 'teal',
        })
      }

      queryClient.invalidateQueries({ queryKey: ['workouts'] })
      if (workoutToEdit) {
        queryClient.invalidateQueries({ queryKey: ['workout', workoutToEdit._id] })
      }
      onSuccess?.()
      onClose()
    } catch (err: any) {
      notifications.show({
        title: 'Error',
        message: err.response?.data?.message || 'Failed to save workout plan',
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  const addDay = () => {
    form.insertListItem('schedule', {
      day: `Day ${form.values.schedule.length + 1}`,
      focus: 'General Training',
      exercises: [{ name: 'Pushups', sets: 3, reps: '12' }],
    })
  }

  const removeDay = (index: number) => {
    form.removeListItem('schedule', index)
  }

  const addExercise = (dayIndex: number) => {
    form.insertListItem(`schedule.${dayIndex}.exercises`, {
      name: 'New Exercise',
      sets: 3,
      reps: '10',
    })
  }

  const removeExercise = (dayIndex: number, exIndex: number) => {
    form.removeListItem(`schedule.${dayIndex}.exercises`, exIndex)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text fw={700} size="lg">
          {workoutToEdit ? 'Edit Workout Plan' : 'Upload New Workout Plan'}
        </Text>
      }
      size="lg"
      radius="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Plan Name"
            placeholder="5-Day Hypertrophy Split"
            required
            maxLength={120}
            {...form.getInputProps('name')}
          />

          <Group grow>
            <Select
              label="Level"
              data={[
                { label: 'Beginner', value: 'beginner' },
                { label: 'Intermediate', value: 'intermediate' },
                { label: 'Advanced', value: 'advanced' },
              ]}
              {...form.getInputProps('level')}
            />
            <Select
              label="Goal"
              data={[
                { label: 'Fat Loss', value: 'fat_loss' },
                { label: 'Muscle Gain', value: 'muscle_gain' },
                { label: 'Strength', value: 'strength' },
                { label: 'General Fitness', value: 'general_fitness' },
                { label: 'Hypertrophy', value: 'hypertrophy' },
              ]}
              {...form.getInputProps('goal')}
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Days Per Week"
              min={1}
              max={7}
              required
              {...form.getInputProps('daysPerWeek')}
            />
            <TextInput
              label="Split Description"
              placeholder="Push / Pull / Legs"
              required
              maxLength={100}
              {...form.getInputProps('split')}
            />
          </Group>

          <Box mt="sm">
            <Group justify="space-between" mb="xs">
              <Text fw={600} size="sm">
                Schedule & Exercises
              </Text>
              <Button
                size="xs"
                variant="light"
                color="blue"
                leftSection={<Plus size={14} />}
                onClick={addDay}
              >
                Add Workout Day
              </Button>
            </Group>

            <Stack gap="sm">
              {form.values.schedule.map((dayPlan, dayIdx) => (
                <Paper key={dayIdx} withBorder p="sm" radius="md" style={{ background: '#fcfcfc' }}>
                  <Group justify="space-between" mb="xs">
                    <Group gap="xs" style={{ flex: 1 }}>
                      <TextInput
                        placeholder="Day (e.g. Day 1)"
                        size="xs"
                        fw={600}
                        required
                        maxLength={50}
                        style={{ width: 120 }}
                        {...form.getInputProps(`schedule.${dayIdx}.day`)}
                      />
                      <TextInput
                        placeholder="Focus (e.g. Chest & Triceps)"
                        size="xs"
                        required
                        maxLength={100}
                        style={{ flex: 1 }}
                        {...form.getInputProps(`schedule.${dayIdx}.focus`)}
                      />
                    </Group>
                    {form.values.schedule.length > 1 && (
                      <ActionIcon
                        color="red"
                        variant="subtle"
                        size="sm"
                        onClick={() => removeDay(dayIdx)}
                      >
                        <Trash2 size={14} />
                      </ActionIcon>
                    )}
                  </Group>

                  <Stack gap={6}>
                    {dayPlan.exercises.map((_, exIdx) => (
                      <Group key={exIdx} gap="xs" align="flex-end">
                        <TextInput
                          placeholder="Exercise name"
                          size="xs"
                          required
                          maxLength={100}
                          style={{ flex: 2 }}
                          {...form.getInputProps(`schedule.${dayIdx}.exercises.${exIdx}.name`)}
                        />
                        <NumberInput
                          placeholder="Sets"
                          size="xs"
                          min={1}
                          max={100}
                          style={{ width: 70 }}
                          {...form.getInputProps(`schedule.${dayIdx}.exercises.${exIdx}.sets`)}
                        />
                        <TextInput
                          placeholder="Reps (e.g. 10-12)"
                          size="xs"
                          maxLength={20}
                          style={{ width: 100 }}
                          {...form.getInputProps(`schedule.${dayIdx}.exercises.${exIdx}.reps`)}
                        />
                        {dayPlan.exercises.length > 1 && (
                          <ActionIcon
                            color="red"
                            variant="subtle"
                            size="xs"
                            onClick={() => removeExercise(dayIdx, exIdx)}
                          >
                            <Trash2 size={12} />
                          </ActionIcon>
                        )}
                      </Group>
                    ))}
                    <Button
                      size="xs"
                      variant="subtle"
                      color="gray"
                      mt={4}
                      leftSection={<Plus size={12} />}
                      onClick={() => addExercise(dayIdx)}
                    >
                      Add Exercise
                    </Button>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Box>

          <Button type="submit" loading={loading} color="cobaltBlue" fullWidth mt="md">
            {workoutToEdit ? 'Save Changes' : 'Upload Plan'}
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}
