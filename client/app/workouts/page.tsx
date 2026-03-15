import React from 'react'
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'

const Workouts = () => {
  const workoutPlans = [
    {
      id: 'push-pull-legs',
      name: 'Push Pull Legs',
      level: 'Intermediate',
      days: [
        {
          title: 'Day 1 – Push',
          exercises: [
            { name: 'Bench Press', sets: '4', reps: '8-10' },
            { name: 'Overhead Press', sets: '3', reps: '10' },
            { name: 'Triceps Pushdown', sets: '3', reps: '12' },
          ],
        },
        {
          title: 'Day 2 – Pull',
          exercises: [
            { name: 'Pull Ups', sets: '4', reps: '8' },
            { name: 'Barbell Rows', sets: '4', reps: '10' },
            { name: 'Bicep Curls', sets: '3', reps: '12' },
          ],
        },
      ],
    },
    {
      id: 'beginner-full-body',
      name: 'Beginner Full Body',
      level: 'Beginner',
      days: [
        {
          title: 'Day 1 – Full Body',
          exercises: [
            { name: 'Squats', sets: '3', reps: '12' },
            { name: 'Pushups', sets: '3', reps: '10' },
            { name: 'Plank', sets: '3', reps: '30s' },
          ],
        },
      ],
    },
  ]

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
        cols={{ base: 1, md: 2 }}
        spacing="xl"
      >
        {workoutPlans.map((plan) => (
          <Card
            key={plan.id}
            shadow="lg"
            padding="xl"
            radius="md"
            withBorder
            style={{
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              cursor: 'pointer',
            }}
          >
            <Group
              justify="space-between"
              mb="md"
            >
              <Text
                fw={700}
                size="xl"
              >
                {plan.name}
              </Text>
              <Badge
                color={plan.level === 'Beginner' ? 'teal' : 'blue'}
                variant="light"
                size="lg"
              >
                {plan.level}
              </Badge>
            </Group>

            <Divider mb="xl" />

            <Stack
              gap="xl"
              style={{ flex: 1 }}
            >
              {plan.days.map((day, dayIdx) => (
                <div key={day.title}>
                  <Text
                    fw={800}
                    size="xs"
                    mb="xs"
                    tt="uppercase"
                    c="dimmed"
                    lts={1}
                  >
                    {day.title}
                  </Text>
                  <Stack gap="sm">
                    {day.exercises.map((exercise) => (
                      <Group
                        key={exercise.name}
                        justify="space-between"
                        wrap="nowrap"
                      >
                        <Stack gap={2}>
                          <Text
                            fw={600}
                            size="sm"
                          >
                            {exercise.name}
                          </Text>
                          <Text
                            size="xs"
                            c="dimmed"
                          >
                            {exercise.sets} sets
                          </Text>
                        </Stack>
                        <Badge
                          variant="outline"
                          color="gray"
                          radius="md"
                        >
                          {exercise.reps} reps
                        </Badge>
                      </Group>
                    ))}
                  </Stack>
                  {dayIdx < plan.days.length - 1 && (
                    <Divider
                      my="xl"
                      variant="dotted"
                    />
                  )}
                </div>
              ))}
            </Stack>

            <Button
              fullWidth
              mt="xl"
              size="md"
              radius="md"
              color="cobaltBlue.9"
              variant="filled"
            >
              Start Plan
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Workouts
