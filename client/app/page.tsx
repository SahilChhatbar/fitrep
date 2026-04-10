'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, Group, Stack, Text, Title } from '@mantine/core'
import { useDiets } from '@/features/diet/useDiet'
import { useWorkouts } from '@/features/workout/useWorkout'
import { useAuth } from '@/features/auth/useAuth'
import logo from '@/public/logo.svg'

export default function Home() {
  const {
    data: dietData,
    isLoading,
    error,
  } = useDiets({
    page: 1,
    limit: 10,
  })
  console.log('diets', dietData)
  const {
    data: workoutData,
    isLoading: workoutIsLoading,
    error: workoutError,
  } = useWorkouts({
    page: 1,
    limit: 10,
  })
  console.log('workouts', workoutData)
  const { token } = useAuth()

  const isGuest = !token
  return (
    <Stack
      align="center"
      h="100%"
    >
      <Stack>
        <Title
          order={1}
          fw={900}
        >
          Fitness, tracked.
        </Title>
        <Text size="sm">
          Log your workouts, diet, track your progress, and achieve your fitness goals.
        </Text>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </Stack>
      <Stack
        align="center"
        justify="center"
      >
        <Image
          src={logo}
          alt="Home Page Banner Image"
          height={200}
          width={200}
        />
        <Title>Your fitness, logged.</Title>
        <Group>
          <Card>
            <Stack>
              <Text size="lg">Get a workout plan, suitable for your goals.</Text>
              <Link href="/workouts">
                <Button>Get Started</Button>
              </Link>
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Text size="lg">Get a diet plan, suitable for your goals.</Text>
              <Link href="/diet">
                <Button>Get Started</Button>
              </Link>
            </Stack>
          </Card>
        </Group>

        {isGuest && (
          <Card
            withBorder
            shadow="xl"
            p="xl"
            radius="md"
            mt="xl"
            style={{ maxWidth: 600 }}
          >
            <Stack align="center">
              <Text
                size="xl"
                fw={700}
                ta="center"
              >
                Want fitrep to track your diets and workout progress?
              </Text>
              <Text
                size="md"
                c="dimmed"
                ta="center"
              >
                Sign up and/or login to use the feature!
              </Text>
              <Group mt="md">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="filled">Sign Up</Button>
                </Link>
              </Group>
            </Stack>
          </Card>
        )}
      </Stack>
    </Stack>
  )
}
