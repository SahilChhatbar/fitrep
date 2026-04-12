'use client'

import Link from 'next/link'
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Loader,
  Paper,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import {
  Activity,
  ArrowRight,
  Calendar,
  Dumbbell,
  Flame,
  Salad,
  Scale,
  TrendingUp,
} from 'lucide-react'
import { useProgress } from '@/features/progress/useProgress'

const StatCard = ({
  label,
  value,
  sub,
  icon,
  color,
  badge,
}: {
  label: string
  value: string | number
  sub?: string
  icon: React.ReactNode
  color: string
  badge?: React.ReactNode
}) => (
  <Card
    withBorder
    radius="md"
    p="lg"
    style={{ border: '1.5px solid var(--border)' }}
  >
    <Group
      justify="space-between"
      mb="sm"
    >
      <Text
        size="xs"
        fw={700}
        tt="uppercase"
        c="dimmed"
        style={{ letterSpacing: '0.06em' }}
      >
        {label}
      </Text>
      <ThemeIcon
        size={36}
        radius="md"
        color={color}
        variant="light"
      >
        {icon}
      </ThemeIcon>
    </Group>
    <Group
      align="flex-end"
      gap="xs"
    >
      <Text style={{ fontSize: '1.8rem', fontFamily: 'DM Serif Display, serif', lineHeight: 1 }}>
        {value}
      </Text>
      {badge}
    </Group>
    {sub && (
      <Text
        size="xs"
        c="dimmed"
        mt={4}
      >
        {sub}
      </Text>
    )}
  </Card>
)

const DashboardPage = () => {
  const { summary, isLoadingSummary } = useProgress()

  if (isLoadingSummary) {
    return (
      <Container
        size="lg"
        py="xl"
      >
        <Stack gap="xl">
          <Skeleton
            height={40}
            width={300}
            radius="md"
          />
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 4 }}
            spacing="lg"
          >
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                height={120}
                radius="md"
              />
            ))}
          </SimpleGrid>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing="xl"
          >
            <Skeleton
              height={200}
              radius="md"
            />
            <Skeleton
              height={200}
              radius="md"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    )
  }

  if (!summary) return null

  const consistency = summary.combined.checkInConsistency

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
        >
          <Box>
            <Text
              size="sm"
              c="dimmed"
              fw={500}
              mb={4}
            >
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <Title
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Welcome back, {summary.user.name.split(' ')[0]}!
            </Title>
          </Box>
          <Button
            component={Link}
            href="/progress"
            rightSection={<ArrowRight size={14} />}
            variant="light"
            color="cobaltBlue"
            size="sm"
          >
            Log today
          </Button>
        </Group>

        {/* Stats */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing="lg"
          className="stagger-1"
        >
          <StatCard
            label="Workout Streak"
            value={`${summary.workout.currentStreak}`}
            sub={`Longest: ${summary.workout.longestStreak} days`}
            icon={<Flame size={18} />}
            color="orange"
            badge={
              summary.workout.currentStreak > 0 ? (
                <Badge
                  color="orange"
                  size="sm"
                  variant="light"
                >
                  {summary.workout.currentStreak} days 🔥
                </Badge>
              ) : undefined
            }
          />
          <StatCard
            label="Current Weight"
            value={
              summary.diet.weightProgress.current
                ? `${summary.diet.weightProgress.current} kg`
                : '—'
            }
            sub={
              summary.diet.weightProgress.change !== null
                ? `${summary.diet.weightProgress.change > 0 ? '+' : ''}${summary.diet.weightProgress.change} kg from start`
                : 'No weight data yet'
            }
            icon={<Scale size={18} />}
            color="blue"
            badge={
              summary.diet.weightProgress.change !== null ? (
                <Badge
                  color={summary.diet.weightProgress.change <= 0 ? 'teal' : 'red'}
                  size="sm"
                  variant="light"
                >
                  {summary.diet.weightProgress.change > 0 ? '+' : ''}
                  {summary.diet.weightProgress.change} kg
                </Badge>
              ) : undefined
            }
          />
          <StatCard
            label="Total Sessions"
            value={summary.workout.totalSessions}
            sub={`${summary.workout.totalActiveDays} active days`}
            icon={<Activity size={18} />}
            color="teal"
          />
          <Card
            withBorder
            radius="md"
            p="lg"
            style={{ border: '1.5px solid var(--border)' }}
          >
            <Group
              justify="space-between"
              mb="sm"
            >
              <Text
                size="xs"
                fw={700}
                tt="uppercase"
                c="dimmed"
                style={{ letterSpacing: '0.06em' }}
              >
                Consistency
              </Text>
              <ThemeIcon
                size={36}
                radius="md"
                color="violet"
                variant="light"
              >
                <TrendingUp size={18} />
              </ThemeIcon>
            </Group>
            <Group
              align="center"
              gap="sm"
            >
              <RingProgress
                size={60}
                thickness={6}
                roundCaps
                sections={[{ value: consistency, color: 'violet' }]}
              />
              <Box>
                <Text
                  style={{
                    fontSize: '1.4rem',
                    fontFamily: 'DM Serif Display, serif',
                    lineHeight: 1,
                  }}
                >
                  {consistency}%
                </Text>
                <Text
                  size="xs"
                  c="dimmed"
                >
                  Check-in rate
                </Text>
              </Box>
            </Group>
          </Card>
        </SimpleGrid>

        {/* Active plans + Recent activity */}
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing="xl"
          className="stagger-2"
        >
          {/* Active Plans */}
          <Paper
            withBorder
            p="lg"
            radius="md"
            style={{ border: '1.5px solid var(--border)' }}
          >
            <Group
              justify="space-between"
              mb="lg"
            >
              <Title
                order={3}
                style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400 }}
              >
                Active Plans
              </Title>
            </Group>
            <Stack gap="md">
              <Box
                p="md"
                style={{
                  background: summary.user.activeDiet ? 'var(--primary-light)' : 'var(--surface-2)',
                  borderRadius: 10,
                  border: `1px solid ${summary.user.activeDiet ? '#a9b2e8' : 'var(--border)'}`,
                }}
              >
                <Group justify="space-between">
                  <Group gap="sm">
                    <ThemeIcon
                      size={32}
                      radius="md"
                      color={summary.user.activeDiet ? 'teal' : 'gray'}
                      variant="light"
                    >
                      <Salad size={16} />
                    </ThemeIcon>
                    <Box>
                      <Text
                        size="xs"
                        fw={600}
                        c="dimmed"
                        tt="uppercase"
                        style={{ letterSpacing: '0.05em' }}
                      >
                        Diet Plan
                      </Text>
                      <Text
                        size="sm"
                        fw={600}
                      >
                        {summary.user.activeDiet?.name || 'None assigned'}
                      </Text>
                    </Box>
                  </Group>
                  {!summary.user.activeDiet && (
                    <Button
                      size="xs"
                      variant="light"
                      component={Link}
                      href="/diets"
                      rightSection={<ArrowRight size={12} />}
                    >
                      Browse
                    </Button>
                  )}
                </Group>
              </Box>

              <Box
                p="md"
                style={{
                  background: summary.user.activeWorkout
                    ? 'var(--primary-light)'
                    : 'var(--surface-2)',
                  borderRadius: 10,
                  border: `1px solid ${summary.user.activeWorkout ? '#a9b2e8' : 'var(--border)'}`,
                }}
              >
                <Group justify="space-between">
                  <Group gap="sm">
                    <ThemeIcon
                      size={32}
                      radius="md"
                      color={summary.user.activeWorkout ? 'cobaltBlue' : 'gray'}
                      variant="light"
                    >
                      <Dumbbell size={16} />
                    </ThemeIcon>
                    <Box>
                      <Text
                        size="xs"
                        fw={600}
                        c="dimmed"
                        tt="uppercase"
                        style={{ letterSpacing: '0.05em' }}
                      >
                        Workout Plan
                      </Text>
                      <Text
                        size="sm"
                        fw={600}
                      >
                        {summary.user.activeWorkout?.name || 'None assigned'}
                      </Text>
                    </Box>
                  </Group>
                  {!summary.user.activeWorkout && (
                    <Button
                      size="xs"
                      variant="light"
                      component={Link}
                      href="/workouts"
                      rightSection={<ArrowRight size={12} />}
                    >
                      Browse
                    </Button>
                  )}
                </Group>
              </Box>
            </Stack>
          </Paper>

          {/* Recent Activity */}
          <Paper
            withBorder
            p="lg"
            radius="md"
            style={{ border: '1.5px solid var(--border)' }}
          >
            <Group
              justify="space-between"
              mb="lg"
            >
              <Title
                order={3}
                style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400 }}
              >
                Recent Sessions
              </Title>
              <Button
                component={Link}
                href="/progress"
                variant="subtle"
                size="xs"
                rightSection={<ArrowRight size={12} />}
              >
                View all
              </Button>
            </Group>
            <Stack gap="xs">
              {summary.workout.recentSessions.length === 0 ? (
                <Box
                  p="xl"
                  style={{
                    textAlign: 'center',
                    background: 'var(--surface-2)',
                    borderRadius: 10,
                    border: '1px dashed var(--border)',
                  }}
                >
                  <Calendar
                    size={28}
                    color="var(--muted)"
                    style={{ margin: '0 auto 8px' }}
                  />
                  <Text
                    size="sm"
                    c="dimmed"
                  >
                    No sessions logged yet
                  </Text>
                  <Button
                    component={Link}
                    href="/progress"
                    size="xs"
                    variant="light"
                    mt="sm"
                  >
                    Log your first session
                  </Button>
                </Box>
              ) : (
                summary.workout.recentSessions.map((session, i) => (
                  <Box key={i}>
                    <Group
                      justify="space-between"
                      py="xs"
                    >
                      <Group gap="sm">
                        <ThemeIcon
                          size={28}
                          radius="sm"
                          color="cobaltBlue"
                          variant="light"
                        >
                          <Dumbbell size={13} />
                        </ThemeIcon>
                        <Box>
                          <Text
                            size="sm"
                            fw={600}
                            lh={1.2}
                          >
                            {typeof session.workoutId === 'object'
                              ? session.workoutId.name
                              : 'Workout'}
                          </Text>
                          {session.dayCompleted && (
                            <Text
                              size="xs"
                              c="dimmed"
                            >
                              {session.dayCompleted}
                            </Text>
                          )}
                        </Box>
                      </Group>
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
                    {i < summary.workout.recentSessions.length - 1 && <Divider />}
                  </Box>
                ))
              )}
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default DashboardPage
