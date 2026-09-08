'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Loader,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import {
  Activity,
  AlertCircle,
  ChevronRight,
  Dumbbell,
  Flame,
  LineChart,
  Salad,
  Scale,
  UserCheck,
  Users,
} from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import {
  useCoach,
  useCoachClientDetails,
  useCoachClientProgress,
} from '@/features/coach/useCoach'

export default function CoachClientsPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { clients, isLoadingClients } = useCoach()

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

  const isCoach = user?.role === 'coach'

  if (!user) {
    return (
      <Container size="md" py="xl">
        <Alert icon={<AlertCircle size={16} />} title="Authentication Required" color="red">
          Please log in to view your clients.
        </Alert>
      </Container>
    )
  }

  if (!isCoach) {
    return (
      <Container size="md" py="xl">
        <Alert icon={<AlertCircle size={16} />} title="Access Denied" color="yellow">
          Only registered coaches can access the client oversight dashboard.
        </Alert>
      </Container>
    )
  }

  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        {/* Header Banner */}
        <Paper
          p="xl"
          radius="lg"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            color: '#fff',
            boxShadow: '0 10px 25px -5px rgba(49, 46, 129, 0.3)',
          }}
        >
          <Group justify="space-between" align="center" wrap="wrap">
            <Group gap="md">
              <ThemeIcon size={56} radius="xl" color="violet" variant="light">
                <Users size={30} />
              </ThemeIcon>
              <Box>
                <Title order={2} fw={700} c="white">
                  My Assigned Clients
                </Title>
                <Text size="sm" c="violet.2">
                  Monitor progress, diet plans, workout streaks, and body stats for all trainees assigned to you.
                </Text>
              </Box>
            </Group>
            <Badge color="violet" size="lg" variant="filled" radius="sm">
              {clients.length} Active {clients.length === 1 ? 'Client' : 'Clients'}
            </Badge>
          </Group>
        </Paper>

        {/* Clients List / Cards */}
        {isLoadingClients ? (
          <Group justify="center" py="xl">
            <Loader color="violet" size="lg" />
          </Group>
        ) : clients.length === 0 ? (
          <Paper p="xl" radius="md" withBorder ta="center" style={{ background: '#fafafa' }}>
            <Stack align="center" gap="sm">
              <ThemeIcon size={48} radius="xl" color="gray" variant="light">
                <Users size={24} />
              </ThemeIcon>
              <Title order={4} c="gray.7">
                No Clients Assigned Yet
              </Title>
              <Text size="sm" c="dimmed" maw={460}>
                When users choose you as their coach during sign-up or from their profile settings, they will appear here automatically.
              </Text>
            </Stack>
          </Paper>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {clients.map((client) => {
              const activeDietName =
                typeof client.activeDietId === 'object' && client.activeDietId
                  ? client.activeDietId.name
                  : null
              const activeWorkoutName =
                typeof client.activeWorkoutId === 'object' && client.activeWorkoutId
                  ? client.activeWorkoutId.name
                  : null

              return (
                <Card
                  key={client._id}
                  withBorder
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  style={{
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedClientId(client._id)}
                >
                  <Stack gap="md" justify="space-between" h="100%">
                    <Group justify="space-between" align="flex-start" wrap="nowrap">
                      <Group gap="sm" wrap="nowrap">
                        <Avatar color="cobaltBlue" radius="xl" size="md">
                          {client.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Box style={{ overflow: 'hidden' }}>
                          <Text fw={700} size="md" truncate>
                            {client.name}
                          </Text>
                          <Text size="xs" c="dimmed" truncate>
                            {client.email}
                          </Text>
                        </Box>
                      </Group>
                    </Group>

                    <Divider />

                    <Stack gap="xs">
                      <Group justify="space-between">
                        <Text size="xs" c="dimmed" fw={600}>
                          Active Diet:
                        </Text>
                        {activeDietName ? (
                          <Badge color="teal" variant="light" size="xs" radius="sm">
                            🥗 {activeDietName}
                          </Badge>
                        ) : (
                          <Text size="xs" c="gray.5" fs="italic">
                            None assigned
                          </Text>
                        )}
                      </Group>

                      <Group justify="space-between">
                        <Text size="xs" c="dimmed" fw={600}>
                          Active Workout:
                        </Text>
                        {activeWorkoutName ? (
                          <Badge color="cobaltBlue" variant="light" size="xs" radius="sm">
                            🏋️ {activeWorkoutName}
                          </Badge>
                        ) : (
                          <Text size="xs" c="gray.5" fs="italic">
                            None assigned
                          </Text>
                        )}
                      </Group>
                    </Stack>

                    <Button
                      variant="light"
                      color="violet"
                      fullWidth
                      rightSection={<ChevronRight size={16} />}
                      mt="xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedClientId(client._id)
                      }}
                    >
                      View Progress & Details
                    </Button>
                  </Stack>
                </Card>
              )
            })}
          </SimpleGrid>
        )}
      </Stack>

      {/* Client Detail Drawer/Modal */}
      {selectedClientId && (
        <ClientDetailModal
          clientId={selectedClientId}
          onClose={() => setSelectedClientId(null)}
        />
      )}
    </Container>
  )
}

function ClientDetailModal({
  clientId,
  onClose,
}: {
  clientId: string
  onClose: () => void
}) {
  const { data: client, isLoading: isLoadingDetails } = useCoachClientDetails(clientId)
  const { data: progress, isLoading: isLoadingProgress } = useCoachClientProgress(clientId)

  const isLoading = isLoadingDetails || isLoadingProgress

  return (
    <Modal
      opened={!!clientId}
      onClose={onClose}
      size="xl"
      radius="lg"
      padding="lg"
      centered
      title={
        <Group gap="sm">
          <ThemeIcon color="violet" variant="light" radius="xl" size="md">
            <UserCheck size={18} />
          </ThemeIcon>
          <Title order={4} fw={700}>
            Client Progress Overview
          </Title>
        </Group>
      }
    >
      {isLoading ? (
        <Group justify="center" py="xl">
          <Loader color="violet" />
        </Group>
      ) : !client || !progress ? (
        <Alert color="red" title="Error">
          Failed to load client data.
        </Alert>
      ) : (
        <Stack gap="lg">
          {/* Header info */}
          <Paper p="md" radius="md" withBorder style={{ background: '#f8fafc' }}>
            <Group justify="space-between" align="center" wrap="wrap">
              <Group gap="md">
                <Avatar color="cobaltBlue" radius="xl" size="lg">
                  {client.name.charAt(0).toUpperCase()}
                </Avatar>
                <Box>
                  <Title order={3} fw={700}>
                    {client.name}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {client.email}
                  </Text>
                </Box>
              </Group>
              <Group gap="xs">
                <Badge color="gray" variant="outline" size="sm">
                  Joined: {new Date(client.createdAt).toLocaleDateString()}
                </Badge>
              </Group>
            </Group>
          </Paper>

          <Tabs defaultValue="overview" color="violet">
            <Tabs.List>
              <Tabs.Tab value="overview" leftSection={<Activity size={16} />}>
                Progress Summary
              </Tabs.Tab>
              <Tabs.Tab value="workout-history" leftSection={<Dumbbell size={16} />}>
                Recent Workouts ({progress.workout.recentSessions?.length || 0})
              </Tabs.Tab>
              <Tabs.Tab value="checkin-history" leftSection={<Scale size={16} />}>
                Recent Check-Ins ({progress.diet.recentCheckIns?.length || 0})
              </Tabs.Tab>
            </Tabs.List>

            {/* Overview Tab */}
            <Tabs.Panel value="overview" pt="md">
              <Stack gap="lg">
                {/* Stats Grid */}
                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                    <Paper p="md" radius="md" withBorder style={{ background: '#f5f3ff' }}>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="violet" variant="light" radius="md" size="lg">
                          <Flame size={20} />
                        </ThemeIcon>
                        <Box>
                          <Text size="xs" c="dimmed" fw={600}>
                            Current Streak
                          </Text>
                          <Title order={3} fw={700} c="violet.9">
                            {progress.workout.currentStreak} Days
                          </Title>
                        </Box>
                      </Group>
                    </Paper>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                    <Paper p="md" radius="md" withBorder style={{ background: '#e0f2fe' }}>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="cyan" variant="light" radius="md" size="lg">
                          <Dumbbell size={20} />
                        </ThemeIcon>
                        <Box>
                          <Text size="xs" c="dimmed" fw={600}>
                            Total Sessions
                          </Text>
                          <Title order={3} fw={700} c="cyan.9">
                            {progress.workout.totalSessions}
                          </Title>
                        </Box>
                      </Group>
                    </Paper>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                    <Paper p="md" radius="md" withBorder style={{ background: '#f0fdf4' }}>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="teal" variant="light" radius="md" size="lg">
                          <LineChart size={20} />
                        </ThemeIcon>
                        <Box>
                          <Text size="xs" c="dimmed" fw={600}>
                            Check-in Consistency
                          </Text>
                          <Title order={3} fw={700} c="teal.9">
                            {progress.combined.checkInConsistency}%
                          </Title>
                        </Box>
                      </Group>
                    </Paper>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                    <Paper p="md" radius="md" withBorder style={{ background: '#fdf2f8' }}>
                      <Group gap="xs" align="center">
                        <ThemeIcon color="pink" variant="light" radius="md" size="lg">
                          <Scale size={20} />
                        </ThemeIcon>
                        <Box>
                          <Text size="xs" c="dimmed" fw={600}>
                            Current Weight
                          </Text>
                          <Title order={3} fw={700} c="pink.9">
                            {progress.diet.weightProgress.current != null
                              ? `${progress.diet.weightProgress.current} kg`
                              : 'N/A'}
                          </Title>
                        </Box>
                      </Group>
                    </Paper>
                  </Grid.Col>
                </Grid>

                {/* Weight Progress Detail Card */}
                {progress.diet.weightProgress.start != null && (
                  <Paper p="md" radius="md" withBorder style={{ background: '#fafafa' }}>
                    <Group justify="space-between" align="center">
                      <Group gap="xs">
                        <Scale size={18} color="var(--mantine-color-gray-7)" />
                        <Text fw={600} size="sm">
                          Weight Trend Summary
                        </Text>
                      </Group>
                      <Group gap="lg">
                        <Text size="xs" c="dimmed">
                          Start: <Text component="span" fw={700} c="dark">{progress.diet.weightProgress.start} kg</Text>
                        </Text>
                        <Text size="xs" c="dimmed">
                          Current: <Text component="span" fw={700} c="dark">{progress.diet.weightProgress.current} kg</Text>
                        </Text>
                        <Badge
                          color={(progress.diet.weightProgress.change || 0) <= 0 ? 'teal' : 'orange'}
                          variant="light"
                          size="md"
                        >
                          {(progress.diet.weightProgress.change || 0) > 0 ? '+' : ''}
                          {progress.diet.weightProgress.change} kg net
                        </Badge>
                      </Group>
                    </Group>
                  </Paper>
                )}

                {/* Active Plans Cards */}
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card withBorder radius="md" p="md">
                      <Group justify="space-between" mb="xs">
                        <Group gap="xs">
                          <Salad size={18} color="var(--mantine-color-teal-6)" />
                          <Text fw={700} size="sm">
                            Active Diet Plan
                          </Text>
                        </Group>
                      </Group>

                      {client.activeDietId && typeof client.activeDietId === 'object' ? (
                        <Stack gap="xs" mt="xs">
                          <Text fw={600} size="md" c="teal.8">
                            {client.activeDietId.name}
                          </Text>
                          <Group gap="xs">
                            <Badge color="teal" variant="light" size="xs">
                              {client.activeDietId.goal}
                            </Badge>
                            <Badge color="gray" variant="outline" size="xs">
                              {client.activeDietId.calories} kcal
                            </Badge>
                            <Badge color="blue" variant="light" size="xs">
                              {client.activeDietId.type}
                            </Badge>
                          </Group>
                        </Stack>
                      ) : (
                        <Text size="sm" c="dimmed" fs="italic" mt="xs">
                          No diet plan currently active for this client.
                        </Text>
                      )}
                    </Card>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card withBorder radius="md" p="md">
                      <Group justify="space-between" mb="xs">
                        <Group gap="xs">
                          <Dumbbell size={18} color="var(--mantine-color-cobaltBlue-6)" />
                          <Text fw={700} size="sm">
                            Active Workout Plan
                          </Text>
                        </Group>
                      </Group>

                      {client.activeWorkoutId && typeof client.activeWorkoutId === 'object' ? (
                        <Stack gap="xs" mt="xs">
                          <Text fw={600} size="md" c="cobaltBlue.8">
                            {client.activeWorkoutId.name}
                          </Text>
                          <Group gap="xs">
                            <Badge color="cobaltBlue" variant="light" size="xs">
                              {client.activeWorkoutId.level}
                            </Badge>
                            <Badge color="gray" variant="outline" size="xs">
                              {client.activeWorkoutId.daysPerWeek} days/week
                            </Badge>
                            <Badge color="indigo" variant="light" size="xs">
                              {client.activeWorkoutId.split}
                            </Badge>
                          </Group>
                        </Stack>
                      ) : (
                        <Text size="sm" c="dimmed" fs="italic" mt="xs">
                          No workout plan currently active for this client.
                        </Text>
                      )}
                    </Card>
                  </Grid.Col>
                </Grid>
              </Stack>
            </Tabs.Panel>

            {/* Workout History Tab */}
            <Tabs.Panel value="workout-history" pt="md">
              {progress.workout.recentSessions?.length === 0 ? (
                <Text size="sm" c="dimmed" ta="center" py="lg">
                  No workout sessions logged yet by this client.
                </Text>
              ) : (
                <Table highlightOnHover withTableBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Date & Time</Table.Th>
                      <Table.Th>Workout Plan</Table.Th>
                      <Table.Th>Duration</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {progress.workout.recentSessions.map((session: any) => (
                      <Table.Tr key={session._id}>
                        <Table.Td>
                          {new Date(session.completedAt || session.date).toLocaleString()}
                        </Table.Td>
                        <Table.Td fw={600}>
                          {session.workoutId?.name || 'Custom Session'}
                        </Table.Td>
                        <Table.Td>
                          {session.durationMinutes ? `${session.durationMinutes} mins` : '—'}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              )}
            </Tabs.Panel>

            {/* Check-In History Tab */}
            <Tabs.Panel value="checkin-history" pt="md">
              {progress.diet.recentCheckIns?.length === 0 ? (
                <Text size="sm" c="dimmed" ta="center" py="lg">
                  No check-ins recorded yet by this client.
                </Text>
              ) : (
                <Table highlightOnHover withTableBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Date</Table.Th>
                      <Table.Th>Weight (kg)</Table.Th>
                      <Table.Th>Body Fat %</Table.Th>
                      <Table.Th>Notes</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {progress.diet.recentCheckIns.map((checkIn: any) => (
                      <Table.Tr key={checkIn._id}>
                        <Table.Td>
                          {new Date(checkIn.date).toLocaleDateString()}
                        </Table.Td>
                        <Table.Td fw={600}>
                          {checkIn.weight != null ? `${checkIn.weight} kg` : '—'}
                        </Table.Td>
                        <Table.Td>
                          {checkIn.bodyFat != null ? `${checkIn.bodyFat}%` : '—'}
                        </Table.Td>
                        <Table.Td>
                          <Text size="xs" c="dimmed">
                            {checkIn.notes || '—'}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              )}
            </Tabs.Panel>
          </Tabs>

          <Group justify="flex-end">
            <Button variant="default" onClick={onClose}>
              Close
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  )
}
