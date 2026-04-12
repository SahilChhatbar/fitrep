'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Loader,
  Paper,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, BarChart, Calendar, Check, Dumbbell, Plus, Target } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { useUserTracking } from '@/features/user/useUserTracking'
import { DayPlan, Exercise, Workout } from '@/features/workout/workout.types'
import { apiClient } from '@/lib/api-client'

const levelConfig: Record<string, { color: string; bg: string; textColor: string }> = {
  beginner: { color: 'teal', bg: '#f0faf5', textColor: '#1a9e5a' },
  intermediate: { color: 'blue', bg: '#f0f6ff', textColor: '#1a6dd4' },
  advanced: { color: 'red', bg: '#fff5f5', textColor: '#e84545' },
}

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
      <Center h="60vh">
        <Stack
          align="center"
          gap="md"
        >
          <Loader
            size="lg"
            color="cobaltBlue"
          />
          <Text
            c="dimmed"
            size="sm"
          >
            Loading workout...
          </Text>
        </Stack>
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
          radius="md"
        >
          {error ? 'Failed to load workout details.' : 'Workout not found.'}
        </Alert>
        <Button
          variant="light"
          mt="md"
          onClick={() => router.back()}
          leftSection={<ArrowLeft size={14} />}
        >
          Go Back
        </Button>
      </Container>
    )
  }

  const level = workout.level.toLowerCase()
  const cfg = levelConfig[level] || { color: 'gray', bg: '#f8f7f4', textColor: '#7a7670' }

  return (
    <Container
      size="lg"
      py="xl"
    >
      <Button
        variant="subtle"
        leftSection={<ArrowLeft size={15} />}
        onClick={() => router.back()}
        mb="lg"
        color="dark"
        styles={{ root: { fontWeight: 600 } }}
      >
        Back to Workouts
      </Button>

      <Stack
        gap="xl"
        className="page-enter"
      >
        {/* Hero card */}
        <Paper
          withBorder
          radius="lg"
          style={{ border: '1.5px solid var(--border)', overflow: 'hidden' }}
        >
          <Box
            style={{
              height: 6,
              background: `linear-gradient(90deg, ${cfg.textColor}, ${cfg.textColor}88)`,
            }}
          />
          <Box p="xl">
            <Group
              justify="space-between"
              align="flex-start"
              wrap="wrap"
              gap="lg"
            >
              <Stack
                gap="sm"
                style={{ flex: 1 }}
              >
                <Group gap="sm">
                  <ThemeIcon
                    size={44}
                    radius="md"
                    color={cfg.color}
                    variant="light"
                  >
                    <Dumbbell size={22} />
                  </ThemeIcon>
                  <Box>
                    <Title
                      order={1}
                      style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontWeight: 400,
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {workout.name}
                    </Title>
                  </Box>
                </Group>
                <Group
                  gap="xs"
                  wrap="wrap"
                >
                  <Badge
                    variant="light"
                    color={cfg.color}
                    size="md"
                    style={{ fontWeight: 700 }}
                  >
                    {workout.level}
                  </Badge>
                  <Badge
                    variant="outline"
                    color="gray"
                    size="md"
                  >
                    {workout.goal.replace('_', ' ')}
                  </Badge>
                  <Badge
                    variant="outline"
                    color="blue"
                    size="md"
                    leftSection={<Calendar size={10} />}
                  >
                    {workout.daysPerWeek} days/week
                  </Badge>
                  <Badge
                    variant="outline"
                    color="violet"
                    size="md"
                  >
                    {workout.split.replace('_', ' ')}
                  </Badge>
                </Group>
              </Stack>

              {token && (
                <Button
                  leftSection={isActive ? <Check size={15} /> : <Plus size={15} />}
                  color={isActive ? 'teal' : 'cobaltBlue'}
                  variant={isActive ? 'light' : 'filled'}
                  loading={isAssigningWorkout}
                  disabled={isActive}
                  size="md"
                  styles={{ root: { fontWeight: 700 } }}
                  onClick={() => {
                    assignWorkout(
                      { workoutId },
                      {
                        onSuccess: () => {
                          notifications.show({
                            title: 'Plan assigned!',
                            message: `${workout.name} is now your active workout.`,
                            color: 'teal',
                          })
                        },
                      },
                    )
                  }}
                >
                  {isActive ? 'Active Plan ✓' : 'Assign to Me'}
                </Button>
              )}
            </Group>
          </Box>
        </Paper>

        {/* Schedule */}
        <Box>
          <Group
            gap="sm"
            mb="lg"
          >
            <BarChart
              size={20}
              color="var(--primary)"
            />
            <Title
              order={2}
              style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.4rem' }}
            >
              Workout Schedule
            </Title>
          </Group>

          <Stack gap="lg">
            {workout.schedule.map((dayPlan: DayPlan, index: number) => (
              <Paper
                key={index}
                withBorder
                radius="md"
                style={{ border: '1.5px solid var(--border)', overflow: 'hidden' }}
              >
                {/* Day header */}
                <Box
                  px="lg"
                  py="md"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-light), #f0f0ff)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <Group gap="sm">
                    <ThemeIcon
                      size={32}
                      radius="sm"
                      color="cobaltBlue"
                      variant="light"
                    >
                      <Calendar size={15} />
                    </ThemeIcon>
                    <Box>
                      <Text
                        fw={700}
                        size="sm"
                        c="cobaltBlue.9"
                      >
                        {dayPlan.day}
                      </Text>
                      <Text
                        size="xs"
                        c="dimmed"
                        fw={500}
                      >
                        {dayPlan.focus}
                      </Text>
                    </Box>
                    <Badge
                      ml="auto"
                      variant="light"
                      color="cobaltBlue"
                      size="sm"
                    >
                      {dayPlan.exercises.length} exercises
                    </Badge>
                  </Group>
                </Box>

                {/* Exercise table */}
                <Box style={{ overflowX: 'auto' }}>
                  <Table
                    striped
                    highlightOnHover
                  >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th
                          style={{
                            fontSize: 12,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--muted)',
                          }}
                        >
                          Exercise
                        </Table.Th>
                        <Table.Th
                          w={90}
                          ta="center"
                          style={{
                            fontSize: 12,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--muted)',
                          }}
                        >
                          Sets
                        </Table.Th>
                        <Table.Th
                          w={90}
                          ta="center"
                          style={{
                            fontSize: 12,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--muted)',
                          }}
                        >
                          Reps
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {dayPlan.exercises.map((exercise: Exercise, exIdx: number) => (
                        <Table.Tr key={exIdx}>
                          <Table.Td>
                            <Stack gap={2}>
                              <Text
                                fw={600}
                                size="sm"
                              >
                                {exercise.name}
                              </Text>
                              {exercise.details?.muscles && (
                                <Group
                                  gap={4}
                                  wrap="wrap"
                                >
                                  {exercise.details.muscles.slice(0, 3).map((m) => (
                                    <Badge
                                      key={m}
                                      size="xs"
                                      variant="dot"
                                      color="gray"
                                      style={{ fontSize: 10 }}
                                    >
                                      {m}
                                    </Badge>
                                  ))}
                                </Group>
                              )}
                            </Stack>
                          </Table.Td>
                          <Table.Td ta="center">
                            <Badge
                              variant="light"
                              color="cobaltBlue"
                              size="sm"
                            >
                              {exercise.sets || '—'}
                            </Badge>
                          </Table.Td>
                          <Table.Td ta="center">
                            <Badge
                              variant="light"
                              color="gray"
                              size="sm"
                            >
                              {exercise.reps || '—'}
                            </Badge>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default WorkoutDetailPage
