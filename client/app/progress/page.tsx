'use client'

// ─── Main Page ────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
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
  Modal,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Textarea,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useQuery } from '@tanstack/react-query'
import {
  Activity,
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  Plus,
  Scale,
  Trash2,
  TrendingUp,
} from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { useProgress } from '@/features/progress/useProgress'
import type { Workout } from '@/features/workout/workout.types'
import { apiClient } from '@/lib/api-client'

// ─── Check-In Form ────────────────────────────────────────────────────────────

function CheckInModal({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  const { logCheckIn, isLoggingCheckIn } = useProgress()

  const form = useForm({
    initialValues: {
      weight: undefined as number | undefined,
      bodyFat: undefined as number | undefined,
      notes: '',
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    const payload: any = {}
    if (values.weight !== undefined) payload.weight = values.weight
    if (values.bodyFat !== undefined) payload.bodyFat = values.bodyFat
    if (values.notes) payload.notes = values.notes

    if (!payload.weight && !payload.bodyFat && !payload.notes) {
      notifications.show({
        title: 'Required',
        message: 'Fill in at least one field.',
        color: 'red',
      })
      return
    }

    logCheckIn(payload, {
      onSuccess: () => {
        notifications.show({
          title: 'Check-in logged!',
          message: 'Your daily check-in was saved.',
          color: 'teal',
        })
        form.reset()
        onClose()
      },
      onError: (err: any) => {
        notifications.show({
          title: 'Error',
          message: err?.response?.data?.message || 'Failed to log check-in.',
          color: 'red',
        })
      },
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="sm">
          <ThemeIcon
            size={28}
            radius="md"
            color="teal"
            variant="light"
          >
            <Scale size={15} />
          </ThemeIcon>
          <Text
            fw={700}
            size="md"
          >
            Daily Check-In
          </Text>
        </Group>
      }
      radius="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Text
            size="sm"
            c="dimmed"
          >
            Log at least one of: weight, body fat %, or notes.
          </Text>
          <NumberInput
            label="Body Weight (kg)"
            placeholder="e.g. 75.5"
            step={0.1}
            min={20}
            max={500}
            decimalScale={1}
            {...form.getInputProps('weight')}
          />
          <NumberInput
            label="Body Fat %"
            placeholder="e.g. 18.5"
            step={0.1}
            min={1}
            max={70}
            decimalScale={1}
            {...form.getInputProps('bodyFat')}
          />
          <Textarea
            label="Notes"
            placeholder="How are you feeling today?"
            autosize
            minRows={2}
            {...form.getInputProps('notes')}
          />
          <Button
            type="submit"
            loading={isLoggingCheckIn}
            fullWidth
            color="teal"
            styles={{ root: { fontWeight: 700 } }}
          >
            Save Check-In
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}

// ─── Session Form ─────────────────────────────────────────────────────────────

function SessionModal({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  const { logWorkoutSession, isLoggingWorkoutSession } = useProgress()

  const { data: workouts } = useQuery<Workout[]>({
    queryKey: ['workouts'],
    queryFn: async () => (await apiClient.get('/workouts')).data,
  })

  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null)

  const form = useForm({
    initialValues: {
      workoutId: '',
      dayCompleted: '',
      durationMinutes: undefined as number | undefined,
      notes: '',
    },
    validate: {
      workoutId: (v) => (!v ? 'Select a workout' : null),
      dayCompleted: (v) => (!v ? 'Select a day' : null),
    },
  })

  const workout = workouts?.find((w) => w._id === form.values.workoutId)
  const dayOptions =
    workout?.schedule.map((d) => ({ label: `${d.day} — ${d.focus}`, value: d.day })) || []

  const handleSubmit = (values: typeof form.values) => {
    const payload: any = {
      workoutId: values.workoutId,
      dayCompleted: values.dayCompleted,
    }
    if (values.durationMinutes) payload.durationMinutes = values.durationMinutes
    if (values.notes) payload.notes = values.notes

    logWorkoutSession(payload, {
      onSuccess: () => {
        notifications.show({
          title: 'Session logged!',
          message: 'Great work! Keep the streak going.',
          color: 'cobaltBlue',
        })
        form.reset()
        onClose()
      },
      onError: (err: any) => {
        notifications.show({
          title: 'Error',
          message: err?.response?.data?.message || 'Failed to log session.',
          color: 'red',
        })
      },
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="sm">
          <ThemeIcon
            size={28}
            radius="md"
            color="cobaltBlue"
            variant="light"
          >
            <Dumbbell size={15} />
          </ThemeIcon>
          <Text
            fw={700}
            size="md"
          >
            Log Workout Session
          </Text>
        </Group>
      }
      radius="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Select
            label="Workout Plan"
            placeholder="Choose your plan..."
            data={workouts?.map((w) => ({ label: w.name, value: w._id })) || []}
            searchable
            {...form.getInputProps('workoutId')}
            onChange={(val) => {
              form.setFieldValue('workoutId', val || '')
              form.setFieldValue('dayCompleted', '')
              setSelectedWorkout(val)
            }}
          />
          <Select
            label="Day Completed"
            placeholder={form.values.workoutId ? 'Select day...' : 'Select a workout first'}
            data={dayOptions}
            disabled={!form.values.workoutId}
            {...form.getInputProps('dayCompleted')}
          />
          <NumberInput
            label="Duration (minutes)"
            placeholder="e.g. 60"
            min={1}
            max={600}
            {...form.getInputProps('durationMinutes')}
          />
          <Textarea
            label="Notes"
            placeholder="Personal records, how you felt, etc."
            autosize
            minRows={2}
            {...form.getInputProps('notes')}
          />
          <Button
            type="submit"
            loading={isLoggingWorkoutSession}
            fullWidth
            styles={{ root: { fontWeight: 700 } }}
          >
            Log Session
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}

export default function ProgressPage() {
  const { token } = useAuth()
  const {
    checkInHistory,
    workoutHistory,
    isLoadingCheckInHistory,
    isLoadingWorkoutHistory,
    deleteCheckIn,
    deleteWorkoutSession,
    summary,
    isLoadingSummary,
  } = useProgress({ limit: 20, skip: 0 })

  const [checkInOpened, { open: openCheckIn, close: closeCheckIn }] = useDisclosure(false)
  const [sessionOpened, { open: openSession, close: closeSession }] = useDisclosure(false)

  if (!token) {
    return (
      <Container
        size="sm"
        py={80}
      >
        <Center>
          <Stack
            align="center"
            gap="md"
          >
            <ThemeIcon
              size={64}
              radius="xl"
              color="cobaltBlue"
              variant="light"
            >
              <TrendingUp size={32} />
            </ThemeIcon>
            <Title
              ta="center"
              style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400 }}
            >
              Track your progress
            </Title>
            <Text
              c="dimmed"
              ta="center"
              maw={380}
            >
              Sign in to log check-ins, track your weight, and record workout sessions.
            </Text>
            <Group>
              <Button
                component={Link}
                href="/auth/login"
                variant="outline"
              >
                Login
              </Button>
              <Button
                component={Link}
                href="/auth/signup"
              >
                Create Account
              </Button>
            </Group>
          </Stack>
        </Center>
      </Container>
    )
  }

  return (
    <Container
      size="lg"
      py="xl"
    >
      <Stack
        gap="xl"
        className="page-enter"
      >
        {/* Header */}
        <Group
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="md"
        >
          <Box>
            <Title
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Progress
            </Title>
            <Text
              c="dimmed"
              size="sm"
              mt={4}
            >
              Log check-ins and workout sessions to track your journey
            </Text>
          </Box>
          <Group gap="sm">
            <Button
              leftSection={<Scale size={15} />}
              color="teal"
              variant="light"
              onClick={openCheckIn}
              styles={{ root: { fontWeight: 600 } }}
            >
              Log Check-In
            </Button>
            <Button
              leftSection={<Plus size={15} />}
              onClick={openSession}
              styles={{ root: { fontWeight: 600 } }}
            >
              Log Session
            </Button>
          </Group>
        </Group>

        {/* Summary strip */}
        {!isLoadingSummary && summary && (
          <SimpleGrid
            cols={{ base: 2, sm: 4 }}
            spacing="md"
            className="stagger-1"
          >
            {[
              {
                label: 'Total Sessions',
                value: summary.workout.totalSessions,
                icon: <Activity size={16} />,
                color: 'cobaltBlue',
              },
              {
                label: 'Current Streak',
                value: `${summary.workout.currentStreak}d`,
                icon: <TrendingUp size={16} />,
                color: 'orange',
              },
              {
                label: 'Check-Ins',
                value: summary.diet.totalCheckIns,
                icon: <CheckCircle2 size={16} />,
                color: 'teal',
              },
              {
                label: 'Weight',
                value: summary.diet.weightProgress.current
                  ? `${summary.diet.weightProgress.current}kg`
                  : '—',
                icon: <Scale size={16} />,
                color: 'blue',
              },
            ].map((stat) => (
              <Paper
                key={stat.label}
                withBorder
                p="md"
                radius="md"
                style={{ border: '1.5px solid var(--border)' }}
              >
                <Group gap="sm">
                  <ThemeIcon
                    size={32}
                    radius="md"
                    color={stat.color}
                    variant="light"
                  >
                    {stat.icon}
                  </ThemeIcon>
                  <Box>
                    <Text
                      size="xs"
                      c="dimmed"
                      fw={600}
                      tt="uppercase"
                      style={{ letterSpacing: '0.05em' }}
                    >
                      {stat.label}
                    </Text>
                    <Text
                      fw={700}
                      size="lg"
                      lh={1}
                    >
                      {stat.value}
                    </Text>
                  </Box>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        )}

        {/* History tabs */}
        <Tabs
          defaultValue="sessions"
          radius="md"
        >
          <Tabs.List style={{ borderBottom: '2px solid var(--border)' }}>
            <Tabs.Tab
              value="sessions"
              leftSection={<Dumbbell size={14} />}
              fw={600}
            >
              Workout Sessions
            </Tabs.Tab>
            <Tabs.Tab
              value="checkins"
              leftSection={<Scale size={14} />}
              fw={600}
            >
              Check-Ins
            </Tabs.Tab>
          </Tabs.List>

          {/* Sessions */}
          <Tabs.Panel
            value="sessions"
            pt="lg"
          >
            {isLoadingWorkoutHistory ? (
              <Center py="xl">
                <Loader />
              </Center>
            ) : workoutHistory?.sessions.length === 0 ? (
              <Box
                p="xl"
                style={{
                  textAlign: 'center',
                  background: 'var(--surface-2)',
                  borderRadius: 12,
                  border: '1px dashed var(--border)',
                }}
              >
                <Dumbbell
                  size={36}
                  color="var(--muted)"
                  style={{ margin: '0 auto 8px' }}
                />
                <Text
                  fw={500}
                  c="dimmed"
                >
                  No sessions logged yet
                </Text>
                <Text
                  size="sm"
                  c="dimmed"
                  mt={4}
                >
                  Click &ldquo;Log Session&rdquo; to record your first workout
                </Text>
              </Box>
            ) : (
              <Stack gap="sm">
                {workoutHistory?.sessions.map((session) => (
                  <Paper
                    key={session._id}
                    withBorder
                    p="md"
                    radius="md"
                    style={{ border: '1.5px solid var(--border)' }}
                  >
                    <Group
                      justify="space-between"
                      wrap="nowrap"
                    >
                      <Group
                        gap="sm"
                        style={{ flex: 1, minWidth: 0 }}
                      >
                        <ThemeIcon
                          size={36}
                          radius="md"
                          color="cobaltBlue"
                          variant="light"
                        >
                          <Dumbbell size={16} />
                        </ThemeIcon>
                        <Box style={{ minWidth: 0 }}>
                          <Text
                            fw={600}
                            size="sm"
                            truncate
                          >
                            {typeof session.workoutId === 'object'
                              ? session.workoutId.name
                              : 'Workout'}
                          </Text>
                          <Group
                            gap="xs"
                            mt={2}
                          >
                            <Badge
                              size="xs"
                              variant="light"
                              color="cobaltBlue"
                            >
                              {session.dayCompleted}
                            </Badge>
                            {session.durationMinutes && (
                              <Group gap={3}>
                                <Clock
                                  size={11}
                                  color="var(--muted)"
                                />
                                <Text
                                  size="xs"
                                  c="dimmed"
                                >
                                  {session.durationMinutes}min
                                </Text>
                              </Group>
                            )}
                          </Group>
                          {session.notes && (
                            <Text
                              size="xs"
                              c="dimmed"
                              mt={2}
                              truncate
                            >
                              {session.notes}
                            </Text>
                          )}
                        </Box>
                      </Group>
                      <Group
                        gap="sm"
                        style={{ flexShrink: 0 }}
                      >
                        <Group gap={4}>
                          <Calendar
                            size={12}
                            color="var(--muted)"
                          />
                          <Text
                            size="xs"
                            c="dimmed"
                          >
                            {new Date(session.completedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </Text>
                        </Group>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="red"
                          p={4}
                          onClick={() =>
                            deleteWorkoutSession(session._id, {
                              onSuccess: () =>
                                notifications.show({ message: 'Session deleted', color: 'orange' }),
                            })
                          }
                        >
                          <Trash2 size={14} />
                        </Button>
                      </Group>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            )}
          </Tabs.Panel>

          {/* Check-ins */}
          <Tabs.Panel
            value="checkins"
            pt="lg"
          >
            {isLoadingCheckInHistory ? (
              <Center py="xl">
                <Loader />
              </Center>
            ) : checkInHistory?.checkIns.length === 0 ? (
              <Box
                p="xl"
                style={{
                  textAlign: 'center',
                  background: 'var(--surface-2)',
                  borderRadius: 12,
                  border: '1px dashed var(--border)',
                }}
              >
                <Scale
                  size={36}
                  color="var(--muted)"
                  style={{ margin: '0 auto 8px' }}
                />
                <Text
                  fw={500}
                  c="dimmed"
                >
                  No check-ins logged yet
                </Text>
                <Text
                  size="sm"
                  c="dimmed"
                  mt={4}
                >
                  Click &ldquo;Log Check-In&rdquo; to record your first entry
                </Text>
              </Box>
            ) : (
              <Stack gap="sm">
                {checkInHistory?.checkIns.map((checkIn) => (
                  <Paper
                    key={checkIn._id}
                    withBorder
                    p="md"
                    radius="md"
                    style={{ border: '1.5px solid var(--border)' }}
                  >
                    <Group
                      justify="space-between"
                      wrap="nowrap"
                    >
                      <Group
                        gap="sm"
                        style={{ flex: 1, minWidth: 0 }}
                      >
                        <ThemeIcon
                          size={36}
                          radius="md"
                          color="teal"
                          variant="light"
                        >
                          <Scale size={16} />
                        </ThemeIcon>
                        <Box style={{ minWidth: 0 }}>
                          <Group gap="sm">
                            {checkIn.weight && (
                              <Badge
                                size="sm"
                                variant="light"
                                color="blue"
                              >
                                {checkIn.weight} kg
                              </Badge>
                            )}
                            {checkIn.bodyFat && (
                              <Badge
                                size="sm"
                                variant="light"
                                color="orange"
                              >
                                {checkIn.bodyFat}% BF
                              </Badge>
                            )}
                          </Group>
                          {checkIn.notes && (
                            <Text
                              size="xs"
                              c="dimmed"
                              mt={4}
                              truncate
                            >
                              {checkIn.notes}
                            </Text>
                          )}
                        </Box>
                      </Group>
                      <Group
                        gap="sm"
                        style={{ flexShrink: 0 }}
                      >
                        <Group gap={4}>
                          <Calendar
                            size={12}
                            color="var(--muted)"
                          />
                          <Text
                            size="xs"
                            c="dimmed"
                          >
                            {new Date(checkIn.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </Text>
                        </Group>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="red"
                          p={4}
                          onClick={() =>
                            deleteCheckIn(checkIn._id, {
                              onSuccess: () =>
                                notifications.show({
                                  message: 'Check-in deleted',
                                  color: 'orange',
                                }),
                            })
                          }
                        >
                          <Trash2 size={14} />
                        </Button>
                      </Group>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            )}
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <CheckInModal
        opened={checkInOpened}
        onClose={closeCheckIn}
      />
      <SessionModal
        opened={sessionOpened}
        onClose={closeSession}
      />
    </Container>
  )
}
