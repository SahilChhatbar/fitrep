'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  Alert,
  Badge,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Paper,
  Stack,
  Table,
  Text,
  Timeline,
  Title,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Calendar, Check, Plus } from 'lucide-react'
import { apiClient } from '@/lib/api-client'
import { DayPlan, Exercise, Workout } from '@/features/workout/workout.types'
import { useAuth } from '@/features/auth/useAuth'
import { useUserTracking } from '@/features/user/useUserTracking'
import { notifications } from '@mantine/notifications'

const WorkoutDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const workoutId = params.workoutId as string
  const { token, user } = useAuth()
  const { assignWorkout, isAssigningWorkout } = useUserTracking()
  const activeId =
    typeof user?.activeWorkoutId === 'string' ? user.activeWorkoutId : user?.activeWorkoutId?._id
  const isActive = activeId === workoutId

  const {
    data: workout,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['workout', workoutId],
    queryFn: async () => {
      const response = await apiClient.get<Workout>(`/workouts/${workoutId}`)
      return response.data
    },
    enabled: !!workoutId,
  })

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    )
  }

  if (error || !workout) {
    return (
      <Container
        size="sm"
        py="xl"
      >
        <Alert
          title="Error"
          color="red"
        >
          {error ? 'Failed to load workout details. Please try again later.' : 'Workout not found.'}
        </Alert>
        <Button
          variant="light"
          mt="md"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Container>
    )
  }

  const levelColors: Record<string, string> = {
    beginner: 'teal',
    intermediate: 'blue',
    advanced: 'red',
  }

  const levelColor = levelColors[workout.level.toLowerCase()] || 'gray'

  return (
    <Container
      size="lg"
      py="xl"
    >
      <Button
        variant="subtle"
        leftSection={<ArrowLeft size={16} />}
        onClick={() => router.back()}
        mb="xl"
      >
        Back to Workouts
      </Button>

      <Stack gap="xl">
        <Paper
          p="xl"
          radius="md"
          withBorder
        >
          <Group
            justify="space-between"
            align="flex-start"
          >
            <Stack gap="xs">
              <Title order={1}>{workout.name}</Title>
              <Group gap="xs">
                <Badge
                  variant="filled"
                  color={levelColor}
                  size="lg"
                >
                  {workout.level}
                </Badge>
                <Badge
                  variant="outline"
                  color="blue"
                  size="lg"
                >
                  {workout.goal.replace('_', ' ')}
                </Badge>
              </Group>
            </Stack>
            <Stack
              gap="md"
              align="flex-end"
            >
              <Stack
                gap={4}
                align="flex-end"
              >
                <Badge
                  variant="light"
                  color="gray"
                  size="xl"
                >
                  {workout.daysPerWeek} Days / Week
                </Badge>
                <Text
                  size="sm"
                  fw={600}
                  c="dimmed"
                >
                  Split: {workout.split}
                </Text>
              </Stack>
              {token && (
                <Button
                  leftSection={isActive ? <Check size={16} /> : <Plus size={16} />}
                  color={isActive ? 'green' : 'blue'}
                  variant={isActive ? 'light' : 'filled'}
                  loading={isAssigningWorkout}
                  disabled={isActive}
                  onClick={() => {
                    assignWorkout(
                      { workoutId },
                      {
                        onSuccess: () => {
                          notifications.show({
                            title: 'Success',
                            message: 'Workout plan assigned successfully!',
                            color: 'green',
                          })
                        },
                      },
                    )
                  }}
                >
                  {isActive ? 'Active Plan' : 'Assign to Me'}
                </Button>
              )}
            </Stack>
          </Group>
        </Paper>

        <Title
          order={2}
          mb="md"
        >
          Workout Schedule
        </Title>

        <Timeline
          active={0}
          bulletSize={32}
          lineWidth={2}
        >
          {workout.schedule.map((dayPlan: DayPlan, index: number) => (
            <Timeline.Item
              key={index}
              bullet={<Calendar size={18} />}
              title={
                <Group
                  justify="space-between"
                  mb="xs"
                >
                  <Title order={4}>
                    {dayPlan.day} — {dayPlan.focus}
                  </Title>
                </Group>
              }
            >
              <Paper
                p="md"
                withBorder
                radius="md"
                mt="sm"
              >
                <Table
                  striped
                  highlightOnHover
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Exercise</Table.Th>
                      <Table.Th
                        w={100}
                        ta="center"
                      >
                        Sets
                      </Table.Th>
                      <Table.Th
                        w={100}
                        ta="center"
                      >
                        Reps
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dayPlan.exercises.map((exercise: Exercise, exIdx: number) => (
                      <Table.Tr key={exIdx}>
                        <Table.Td>
                          <Stack gap={0}>
                            <Text fw={600}>{exercise.name}</Text>
                            {exercise.details?.muscles && (
                              <Text
                                size="xs"
                                c="dimmed"
                              >
                                Target: {exercise.details.muscles.join(', ')}
                              </Text>
                            )}
                          </Stack>
                        </Table.Td>
                        <Table.Td ta="center">
                          <Badge variant="light">{exercise.sets || '-'}</Badge>
                        </Table.Td>
                        <Table.Td ta="center">
                          <Badge
                            variant="light"
                            color="gray"
                          >
                            {exercise.reps || '-'}
                          </Badge>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  )
}

export default WorkoutDetailPage
