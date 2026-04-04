'use client'

import Link from 'next/link'
import { Badge, Button, Card, Divider, Group, Stack, Text } from '@mantine/core'
import { Workout } from '@/features/workout/workout.types'

interface WorkoutCardProps {
  workout: Workout
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const levelColors: Record<string, string> = {
    beginner: 'teal',
    intermediate: 'blue',
    advanced: 'red',
  }
  const levelColor = levelColors[workout.level.toLowerCase()] || 'gray'

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group
        justify="space-between"
        mb="xs"
      >
        <Text
          fw={700}
          size="xl"
        >
          {workout.name}
        </Text>
        <Badge
          color={levelColor}
          variant="light"
          size="lg"
        >
          {workout.level}
        </Badge>
      </Group>

      <Group
        gap="xs"
        mb="md"
      >
        <Badge
          variant="outline"
          color="gray"
        >
          {workout.goal.replace('_', ' ')}
        </Badge>
        <Badge
          variant="outline"
          color="gray"
        >
          {workout.daysPerWeek} Days/Week
        </Badge>
      </Group>

      <Text
        size="sm"
        c="dimmed"
        mb="md"
      >
        Focus: {workout.split}
      </Text>

      <Divider my="sm" />

      <Button
        component={Link}
        href={`/workouts/${workout._id}`}
        fullWidth
        variant="light"
        color="blue"
        radius="md"
        mt="auto"
      >
        View Plan
      </Button>
    </Card>
  )
}

export default WorkoutCard
