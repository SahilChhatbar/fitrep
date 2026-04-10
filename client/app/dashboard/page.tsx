'use client'

import {
  Badge,
  Card,
  Container,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useProgress } from '@/features/progress/useProgress'
import { Activity, Flame, Scale, TrendingUp } from 'lucide-react'

const DashboardPage = () => {
  const { summary, isLoadingSummary } = useProgress()

  if (isLoadingSummary) {
    return (
      <Stack
        justify="center"
        align="center"
        h="80vh"
      >
        <Loader size="xl" />
      </Stack>
    )
  }

  if (!summary) return null

  return (
    <Container
      size="lg"
      py="xl"
    >
      <Stack gap="xl">
        <Title order={1}>Welcome back, {summary.user.name}!</Title>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing="lg"
        >
          <Card
            withBorder
            radius="md"
            p="md"
          >
            <Group justify="space-between">
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                tt="uppercase"
              >
                Workout Streak
              </Text>
              <Flame
                size={20}
                color="orange"
              />
            </Group>
            <Group
              align="flex-end"
              gap="xs"
              mt="sm"
            >
              <Text
                size="xl"
                fw={700}
              >
                {summary.workout.currentStreak} Days
              </Text>
              <Badge color="orange">Longest: {summary.workout.longestStreak}</Badge>
            </Group>
          </Card>

          <Card
            withBorder
            radius="md"
            p="md"
          >
            <Group justify="space-between">
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                tt="uppercase"
              >
                Current Weight
              </Text>
              <Scale
                size={20}
                color="blue"
              />
            </Group>
            <Group
              align="flex-end"
              gap="xs"
              mt="sm"
            >
              <Text
                size="xl"
                fw={700}
              >
                {summary.diet.weightProgress.current || '--'} kg
              </Text>
              {summary.diet.weightProgress.change !== null && (
                <Badge color={summary.diet.weightProgress.change <= 0 ? 'teal' : 'red'}>
                  {summary.diet.weightProgress.change > 0 ? '+' : ''}
                  {summary.diet.weightProgress.change} kg
                </Badge>
              )}
            </Group>
          </Card>

          <Card
            withBorder
            radius="md"
            p="md"
          >
            <Group justify="space-between">
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                tt="uppercase"
              >
                Total Sessions
              </Text>
              <Activity
                size={20}
                color="green"
              />
            </Group>
            <Group
              align="flex-end"
              gap="xs"
              mt="sm"
            >
              <Text
                size="xl"
                fw={700}
              >
                {summary.workout.totalSessions}
              </Text>
              <Text
                size="xs"
                c="dimmed"
              >
                {summary.workout.totalActiveDays} active days
              </Text>
            </Group>
          </Card>

          <Card
            withBorder
            radius="md"
            p="md"
          >
            <Group justify="space-between">
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                tt="uppercase"
              >
                Consistency
              </Text>
              <TrendingUp
                size={20}
                color="purple"
              />
            </Group>
            <Group
              align="flex-end"
              gap="xs"
              mt="sm"
            >
              <Text
                size="xl"
                fw={700}
              >
                {summary.combined.checkInConsistency}%
              </Text>
              <Text
                size="xs"
                c="dimmed"
              >
                Check-in rate
              </Text>
            </Group>
          </Card>
        </SimpleGrid>

        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing="xl"
        >
          <Paper
            withBorder
            p="md"
            radius="md"
          >
            <Title
              order={3}
              mb="md"
            >
              Active Plans
            </Title>
            <Stack>
              <Group justify="space-between">
                <Text fw={600}>Diet:</Text>
                <Text>{summary.user.activeDiet?.name || 'No active diet'}</Text>
              </Group>
              <Group justify="space-between">
                <Text fw={600}>Workout:</Text>
                <Text>{summary.user.activeWorkout?.name || 'No active workout'}</Text>
              </Group>
            </Stack>
          </Paper>

          <Paper
            withBorder
            p="md"
            radius="md"
          >
            <Title
              order={3}
              mb="md"
            >
              Recent Activity
            </Title>
            <Stack gap="sm">
              {summary.workout.recentSessions.length === 0 && (
                <Text c="dimmed">No recent sessions logged.</Text>
              )}
              {summary.workout.recentSessions.map((session, i) => (
                <Group
                  key={i}
                  justify="space-between"
                >
                  <Text size="sm">
                    {typeof session.workoutId === 'object' ? session.workoutId.name : 'Workout'}
                  </Text>
                  <Text
                    size="xs"
                    c="dimmed"
                  >
                    {new Date(session.completedAt).toLocaleDateString()}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default DashboardPage
