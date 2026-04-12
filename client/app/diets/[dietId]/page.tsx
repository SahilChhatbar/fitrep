'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  List,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Check, Flame, Plus, Salad } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { Diet, Food, Meal } from '@/features/diet/diet.types'
import { useUserTracking } from '@/features/user/useUserTracking'
import { apiClient } from '@/lib/api-client'

const goalConfig: Record<string, { color: string; bg: string; textColor: string }> = {
  fat_loss: { color: 'red', bg: '#fff5f5', textColor: '#e84545' },
  muscle_gain: { color: 'blue', bg: '#f0f6ff', textColor: '#1a6dd4' },
  maintenance: { color: 'teal', bg: '#f0faf5', textColor: '#1a9e5a' },
}

const DietDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const dietId = params.dietId as string
  const { token, user } = useAuth()
  const { assignDiet, isAssigningDiet } = useUserTracking()
  const activeId =
    typeof user?.activeDietId === 'string' ? user.activeDietId : user?.activeDietId?._id
  const isActive = activeId === dietId

  const {
    data: diet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['diet', dietId],
    queryFn: async () => {
      const response = await apiClient.get<Diet>(`/diets/${dietId}`)
      return response.data
    },
    enabled: !!dietId,
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
            Loading diet plan...
          </Text>
        </Stack>
      </Center>
    )
  }

  if (error || !diet) {
    return (
      <Container
        size="sm"
        py="xl"
      >
        <Alert
          title="Error"
          color="red"
          radius="md"
        >
          {error ? 'Failed to load diet details.' : 'Diet not found.'}
        </Alert>
        <Button
          variant="light"
          mt="md"
          onClick={() => router.back()}
          leftSection={<ArrowLeft size={14} />}
        >
          Go Back
        </Button>
      </Container>
    )
  }

  const cfg = goalConfig[diet.goal] || { color: 'gray', bg: '#f8f7f4', textColor: '#7a7670' }

  return (
    <Container
      size="lg"
      py="xl"
    >
      <Button
        variant="subtle"
        leftSection={<ArrowLeft size={15} />}
        onClick={() => router.back()}
        mb="lg"
        color="dark"
        styles={{ root: { fontWeight: 600 } }}
      >
        Back to Diets
      </Button>

      <Stack
        gap="xl"
        className="page-enter"
      >
        {/* Hero card */}
        <Paper
          withBorder
          radius="lg"
          style={{ border: '1.5px solid var(--border)', overflow: 'hidden' }}
        >
          <Box
            style={{
              height: 6,
              background: `linear-gradient(90deg, ${cfg.textColor}, ${cfg.textColor}88)`,
            }}
          />
          <Box p="xl">
            <Group
              justify="space-between"
              align="flex-start"
              wrap="wrap"
              gap="lg"
            >
              <Stack
                gap="sm"
                style={{ flex: 1 }}
              >
                <Group gap="sm">
                  <ThemeIcon
                    size={44}
                    radius="md"
                    color={cfg.color}
                    variant="light"
                  >
                    <Salad size={22} />
                  </ThemeIcon>
                  <Box>
                    <Title
                      order={1}
                      style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontWeight: 400,
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {diet.name}
                    </Title>
                  </Box>
                </Group>
                <Group gap="xs">
                  <Badge
                    variant="light"
                    color={cfg.color}
                    size="md"
                    style={{ fontWeight: 700 }}
                  >
                    {diet.goal.replace('_', ' ')}
                  </Badge>
                  <Badge
                    variant="outline"
                    color="gray"
                    size="md"
                  >
                    {diet.type}
                  </Badge>
                  <Badge
                    variant="light"
                    color="orange"
                    size="md"
                    leftSection={<Flame size={10} />}
                    style={{ fontWeight: 700 }}
                  >
                    {diet.calories} kcal/day
                  </Badge>
                </Group>
              </Stack>

              {token && (
                <Button
                  leftSection={isActive ? <Check size={15} /> : <Plus size={15} />}
                  color={isActive ? 'teal' : 'cobaltBlue'}
                  variant={isActive ? 'light' : 'filled'}
                  loading={isAssigningDiet}
                  disabled={isActive}
                  size="md"
                  styles={{ root: { fontWeight: 700 } }}
                  onClick={() => {
                    assignDiet(
                      { dietId },
                      {
                        onSuccess: () => {
                          notifications.show({
                            title: 'Diet assigned!',
                            message: `${diet.name} is now your active plan.`,
                            color: 'teal',
                          })
                        },
                      },
                    )
                  }}
                >
                  {isActive ? 'Active Plan ✓' : 'Assign to Me'}
                </Button>
              )}
            </Group>

            {/* Macros breakdown */}
            <Divider
              my="lg"
              label="Macro Breakdown"
              labelPosition="center"
            />

            <SimpleGrid
              cols={{ base: 1, sm: 3 }}
              spacing="md"
            >
              {[
                {
                  label: 'Protein',
                  value: diet.macros.protein,
                  unit: 'g',
                  color: 'blue',
                  bg: '#f0f6ff',
                },
                {
                  label: 'Carbohydrates',
                  value: diet.macros.carbs,
                  unit: 'g',
                  color: 'teal',
                  bg: '#f0faf5',
                },
                { label: 'Fat', value: diet.macros.fat, unit: 'g', color: 'red', bg: '#fff5f5' },
              ].map((macro) => (
                <Box
                  key={macro.label}
                  p="md"
                  style={{
                    background: macro.bg,
                    borderRadius: 10,
                    border: `1px solid ${macro.bg === '#f0f6ff' ? '#bfcfee' : macro.bg === '#f0faf5' ? '#b0e4cb' : '#f0bebe'}`,
                    textAlign: 'center',
                  }}
                >
                  <Text
                    size="xs"
                    fw={700}
                    tt="uppercase"
                    c="dimmed"
                    style={{ letterSpacing: '0.06em' }}
                  >
                    {macro.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '1.8rem',
                      color: `var(--mantine-color-${macro.color}-7)`,
                      lineHeight: 1.2,
                    }}
                  >
                    {macro.value}
                    <Text
                      component="span"
                      size="sm"
                      fw={500}
                      c="dimmed"
                    >
                      {' '}
                      g
                    </Text>
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Paper>

        {/* Meal plan */}
        <Box>
          <Title
            order={2}
            mb="lg"
            style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.4rem' }}
          >
            Daily Meal Plan
          </Title>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing="lg"
          >
            {diet.meals.map((meal: Meal, idx: number) => (
              <Paper
                key={idx}
                withBorder
                radius="md"
                style={{ border: '1.5px solid var(--border)', overflow: 'hidden' }}
              >
                <Box
                  px="lg"
                  py="md"
                  style={{
                    background: 'var(--surface-2)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <Text
                    fw={700}
                    size="sm"
                    tt="uppercase"
                    c="dimmed"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {meal.name}
                  </Text>
                </Box>
                <Stack
                  gap={0}
                  p="md"
                >
                  {meal.foods.map((food: Food, foodIdx: number) => (
                    <Box key={foodIdx}>
                      <Group
                        justify="space-between"
                        py="xs"
                      >
                        <Group
                          gap="sm"
                          style={{ flex: 1, minWidth: 0 }}
                        >
                          <Box
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: cfg.textColor,
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />
                          <Box style={{ minWidth: 0, flex: 1 }}>
                            <Text
                              size="sm"
                              fw={600}
                              lh={1.3}
                            >
                              {food.name}
                            </Text>
                            {food.nutrition && (
                              <Group
                                gap="xs"
                                mt={2}
                              >
                                {food.nutrition.calories && (
                                  <Text
                                    size="xs"
                                    c="dimmed"
                                  >
                                    {food.nutrition.calories} kcal
                                  </Text>
                                )}
                                {food.nutrition.protein && (
                                  <Text
                                    size="xs"
                                    c="blue.6"
                                  >
                                    P:{food.nutrition.protein}g
                                  </Text>
                                )}
                                {food.nutrition.carbs && (
                                  <Text
                                    size="xs"
                                    c="teal.6"
                                  >
                                    C:{food.nutrition.carbs}g
                                  </Text>
                                )}
                                {food.nutrition.fat && (
                                  <Text
                                    size="xs"
                                    c="red.5"
                                  >
                                    F:{food.nutrition.fat}g
                                  </Text>
                                )}
                              </Group>
                            )}
                          </Box>
                        </Group>
                      </Group>
                      {foodIdx < meal.foods.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default DietDetailPage
