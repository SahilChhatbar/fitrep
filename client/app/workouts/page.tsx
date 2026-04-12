'use client'

import { useState } from 'react'
import {
  Alert,
  Box,
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
import { Dumbbell, Search } from 'lucide-react'
import WorkoutCard from '@/components/WorkoutCard'
import type { Workout } from '@/features/workout/workout.types'
import { apiClient } from '@/lib/api-client'

const Workouts = () => {
  const [level, setLevel] = useState('all')
  const [search, setSearch] = useState('')

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
    const matchesLevel = level === 'all' || w.level === level
    const matchesSearch =
      !search ||
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.goal.toLowerCase().includes(search.toLowerCase()) ||
      w.split.toLowerCase().includes(search.toLowerCase())
    return matchesLevel && matchesSearch
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
          <Stack
            gap="xs"
            style={{ position: 'relative', zIndex: 1 }}
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
        </Box>

        {/* Filters */}
        <Group
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="sm"
        >
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

export default Workouts
