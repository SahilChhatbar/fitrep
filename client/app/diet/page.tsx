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

const Diet = () => {
  const dietPlans = [
    {
      id: 'weight-loss-balanced',
      name: 'Balanced Weight Loss Diet',
      goal: 'Weight Loss',
      calories: 1800,
      macros: {
        protein: '30%',
        carbs: '40%',
        fats: '30%',
      },
      meals: [
        {
          title: 'Breakfast',
          foods: ['Oatmeal with berries', '2 boiled eggs', 'Green tea'],
        },
        {
          title: 'Lunch',
          foods: ['Grilled chicken breast', 'Brown rice', 'Mixed vegetables'],
        },
        {
          title: 'Snack',
          foods: ['Greek yogurt', 'Almonds'],
        },
        {
          title: 'Dinner',
          foods: ['Salmon', 'Quinoa', 'Steamed broccoli'],
        },
      ],
    },

    {
      id: 'muscle-gain-high-protein',
      name: 'High Protein Muscle Gain Diet',
      goal: 'Muscle Gain',
      calories: 2800,
      macros: {
        protein: '40%',
        carbs: '40%',
        fats: '20%',
      },
      meals: [
        {
          title: 'Breakfast',
          foods: ['Scrambled eggs', 'Whole grain toast', 'Protein shake'],
        },
        {
          title: 'Lunch',
          foods: ['Grilled steak', 'Sweet potatoes', 'Spinach salad'],
        },
        {
          title: 'Snack',
          foods: ['Cottage cheese', 'Banana', 'Peanut butter'],
        },
        {
          title: 'Dinner',
          foods: ['Chicken breast', 'Brown rice', 'Avocado'],
        },
      ],
    },

    {
      id: 'maintenance-balanced',
      name: 'Balanced Maintenance Diet',
      goal: 'Maintenance',
      calories: 2200,
      macros: {
        protein: '30%',
        carbs: '45%',
        fats: '25%',
      },
      meals: [
        {
          title: 'Breakfast',
          foods: ['Greek yogurt', 'Granola', 'Mixed fruit'],
        },
        {
          title: 'Lunch',
          foods: ['Turkey sandwich', 'Whole grain bread', 'Side salad'],
        },
        {
          title: 'Snack',
          foods: ['Apple', 'Peanut butter'],
        },
        {
          title: 'Dinner',
          foods: ['Grilled fish', 'Rice', 'Roasted vegetables'],
        },
      ],
    },

    {
      id: 'keto-diet',
      name: 'Keto Diet Plan',
      goal: 'Low Carb / Keto',
      calories: 2000,
      macros: {
        protein: '25%',
        carbs: '5%',
        fats: '70%',
      },
      meals: [
        {
          title: 'Breakfast',
          foods: ['Avocado', 'Eggs', 'Cheese'],
        },
        {
          title: 'Lunch',
          foods: ['Grilled salmon', 'Olive oil salad'],
        },
        {
          title: 'Snack',
          foods: ['Macadamia nuts'],
        },
        {
          title: 'Dinner',
          foods: ['Steak', 'Butter sauteed broccoli'],
        },
      ],
    },

    {
      id: 'vegetarian-diet',
      name: 'Vegetarian Balanced Diet',
      goal: 'Vegetarian',
      calories: 2100,
      macros: {
        protein: '25%',
        carbs: '50%',
        fats: '25%',
      },
      meals: [
        {
          title: 'Breakfast',
          foods: ['Oatmeal', 'Almond milk', 'Banana'],
        },
        {
          title: 'Lunch',
          foods: ['Lentil curry', 'Brown rice', 'Cucumber salad'],
        },
        {
          title: 'Snack',
          foods: ['Protein smoothie', 'Mixed nuts'],
        },
        {
          title: 'Dinner',
          foods: ['Tofu stir fry', 'Quinoa', 'Vegetables'],
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
          Diet Plans
        </Title>
        <Text
          c="dimmed"
          size="lg"
          maw={600}
          ta="center"
        >
          Fuel your body with science-backed nutrition. Choose a plan that aligns with your fitness
          goals and lifestyle.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing="xl"
      >
        {dietPlans.map((plan) => (
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
            }}
          >
            <Group
              justify="space-between"
              mb="md"
            >
              <Stack gap={4}>
                <Text
                  fw={700}
                  size="xl"
                >
                  {plan.name}
                </Text>
                <Badge
                  variant="light"
                  color="cobaltBlue.9"
                >
                  {plan.goal}
                </Badge>
              </Stack>
              <Badge
                size="xl"
                radius="sm"
                variant="filled"
                color="orange"
                py="md"
              >
                {plan.calories} kcal
              </Badge>
            </Group>

            <Divider mb="xl" />

            <Group
              mb="xl"
              justify="center"
              gap="xl"
            >
              <Stack
                align="center"
                gap={0}
              >
                <Text
                  size="xs"
                  fw={700}
                  c="dimmed"
                >
                  PROTEIN
                </Text>
                <Text
                  fw={900}
                  c="blue"
                >
                  {plan.macros.protein}
                </Text>
              </Stack>
              <Stack
                align="center"
                gap={0}
              >
                <Text
                  size="xs"
                  fw={700}
                  c="dimmed"
                >
                  CARBS
                </Text>
                <Text
                  fw={900}
                  c="green"
                >
                  {plan.macros.carbs}
                </Text>
              </Stack>
              <Stack
                align="center"
                gap={0}
              >
                <Text
                  size="xs"
                  fw={700}
                  c="dimmed"
                >
                  FATS
                </Text>
                <Text
                  fw={900}
                  c="red"
                >
                  {plan.macros.fats}
                </Text>
              </Stack>
            </Group>

            <Stack
              gap="lg"
              style={{ flex: 1 }}
            >
              {plan.meals.map((meal, mealIdx) => (
                <div key={meal.title}>
                  <Text
                    fw={800}
                    size="xs"
                    mb="xs"
                    tt="uppercase"
                    c="dimmed"
                    lts={1}
                  >
                    {meal.title}
                  </Text>
                  <Stack gap={4}>
                    {meal.foods.map((food) => (
                      <Group
                        key={food}
                        gap="xs"
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'cobaltBlue.9',
                          }}
                        />
                        <Text size="sm">{food}</Text>
                      </Group>
                    ))}
                  </Stack>
                  {mealIdx < plan.meals.length - 1 && (
                    <Divider
                      my="lg"
                      variant="dashed"
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
              Choose Plan
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Diet
