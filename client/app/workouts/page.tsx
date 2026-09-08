'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Group,
  Loader,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { Dumbbell, Plus, Search, UserCheck } from 'lucide-react'
import WorkoutCard from '@/components/WorkoutCard'
import { WorkoutFormModal } from '@/components/WorkoutFormModal'
import { useAuth } from '@/features/auth/useAuth'
import type { Workout } from '@/features/workout/workout.types'
import { apiClient } from '@/lib/api-client'

const WorkoutsContent = () => {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const initialFilter = searchParams.get('filter') === 'my_plans' ? 'my_plans' : 'all'

  const [scope, setScope] = useState<string>(initialFilter)
  const [level, setLevel] = useState('all')
  const [search, setSearch] = useState('')
  const [modalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    if (searchParams.get('filter') === 'my_plans') {
      setScope('my_plans')
    }
  }, [searchParams])

  const {
    data: workouts,
    isLoading,
    error,
  } = useQuery<Workout[]>({
    queryKey: ['workouts'],
    queryFn: async () => {
      const response = await apiClient.get('/workouts')
      return response.data
    },
  })

  const filtered = workouts?.filter((w) => {
    const matchesScope =
      scope === 'all' ||
      (scope === 'my_plans' && w.uploadedByCoach === user?.name)
    const matchesLevel = level === 'all' || w.level === level
    const matchesSearch =
      !search ||
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.goal.toLowerCase().includes(search.toLowerCase()) ||
      w.split.toLowerCase().includes(search.toLowerCase())
    return matchesScope && matchesLevel && matchesSearch
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
            Loading workout plans...
          </Text>
        </Stack>
      </Center>
    )
  }

  if (error) {
    return (
      <Container
        size="sm"
        py="xl"
      >
        <Alert
          title="Error loading workouts"
          color="red"
          radius="md"
        >
          Failed to load workout plans. Please try again later.
        </Alert>
      </Container>
    )
  }

  return (
    <Container
      size="lg"
      py="xl"
    >
      <WorkoutFormModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />

      <Stack
        gap="xl"
        className="page-enter"
      >
        {/* Header */}
        <Box
          p="xl"
          style={{
            background: 'linear-gradient(135deg, #00167a 0%, #2f42ca 100%)',
            borderRadius: 16,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              pointerEvents: 'none',
            }}
          />
          <Group justify="space-between" align="flex-start" style={{ position: 'relative', zIndex: 1 }}>
            <Stack
              gap="xs"
            >
              <Group gap="sm">
                <Dumbbell
                  size={24}
                  color="rgba(255,255,255,0.8)"
                />
                <Title
                  order={1}
                  c="white"
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '1.8rem',
                  }}
                >
                  Workout Plans
                </Title>
              </Group>
              <Text
                c="rgba(255,255,255,0.75)"
                size="sm"
                maw={480}
              >
                Expert-designed programs for every fitness level. Pick a plan and get started today.
              </Text>
            </Stack>
            {user?.role === 'coach' && (
              <Button
                color="indigo"
                variant="white"
                leftSection={<Plus size={16} />}
                onClick={() => setModalOpened(true)}
              >
                Add Workout Plan
              </Button>
            )}
          </Group>
        </Box>

        {/* Filters */}
        <Group
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="sm"
        >
          <Group gap="sm" wrap="wrap">
            {user?.role === 'coach' && (
              <SegmentedControl
                value={scope}
                onChange={setScope}
                data={[
                  { label: 'All Plans', value: 'all' },
                  { label: 'My Created Plans', value: 'my_plans' },
                ]}
                color="violet"
                styles={{
                  root: { backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' },
                }}
              />
            )}
            <SegmentedControl
              value={level}
              onChange={setLevel}
              data={[
                { label: 'All Levels', value: 'all' },
                { label: 'Beginner', value: 'beginner' },
                { label: 'Intermediate', value: 'intermediate' },
                { label: 'Advanced', value: 'advanced' },
              ]}
              styles={{
                root: { backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' },
              }}
            />
          </Group>
          <TextInput
            placeholder="Search plans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftSection={<Search size={15} />}
            style={{ width: 220 }}
            styles={{ input: { backgroundColor: '#fff' } }}
          />
        </Group>

        {/* Grid */}
        {filtered && filtered.length > 0 ? (
          <>
            <Text
              size="sm"
              c="dimmed"
              fw={500}
            >
              Showing {filtered.length} plan{filtered.length !== 1 ? 's' : ''}
            </Text>
            <SimpleGrid
              cols={{ base: 1, md: 2, lg: 3 }}
              spacing="lg"
            >
              {filtered.map((plan: Workout) => (
                <WorkoutCard
                  key={plan._id}
                  workout={plan}
                />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <Center py={60}>
            <Stack
              align="center"
              gap="sm"
            >
              <Dumbbell
                size={40}
                color="var(--muted)"
              />
              <Text
                c="dimmed"
                fw={500}
              >
                No workout plans match your filters
              </Text>
              <Text
                size="sm"
                c="dimmed"
              >
                Try adjusting your search or level filter
              </Text>
            </Stack>
          </Center>
        )}
      </Stack>
    </Container>
  )
}

const Workouts = () => {
  return (
    <Suspense
      fallback={
        <Center h="60vh">
          <Loader size="lg" color="cobaltBlue" />
        </Center>
      }
    >
      <WorkoutsContent />
    </Suspense>
  )
}

export default Workouts
