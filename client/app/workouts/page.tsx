'use client'

import { Alert, Center, Container, Loader, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import WorkoutCard from '@/components/WorkoutCard'
import { apiClient } from '@/lib/api-client'
import type { Workout } from '@/features/workout/workout.types'

const Workouts = () => {
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

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader size="xl" />
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
          title="Error"
          color="red"
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
        align="center"
        mb="xl"
      >
        <Title
          order={1}
          fw={900}
        >
          Workout Plans
        </Title>
        <Text
          c="dimmed"
          size="lg"
          maw={600}
          ta="center"
        >
          Explore our expert-designed workout plans. Whether you're just starting out or looking to
          break through a plateau, we have the perfect program for you.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3 }}
        spacing="xl"
      >
        {workouts?.map((plan: Workout) => (
          <WorkoutCard
            key={plan._id}
            workout={plan}
          />
        ))}
      </SimpleGrid>

      {workouts?.length === 0 && (
        <Center py="xl">
          <Text c="dimmed">No workout plans found.</Text>
        </Center>
      )}
    </Container>
  )
}

export default Workouts
