'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Container,
  Stack,
  Text,
  Title,
  Badge,
  Group,
  Divider,
  Paper,
  SimpleGrid,
  Button,
  Loader,
  Center,
  Alert,
  List,
  ThemeIcon,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { Diet, Meal, Food } from '@/features/diet/diet.types';
import { useAuth } from '@/features/auth/useAuth';
import { useUserTracking } from '@/features/user/useUserTracking';
import { notifications } from '@mantine/notifications';

const DietDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const dietId = params.dietId as string;
  const { token, user } = useAuth();
  const { assignDiet, isAssigningDiet } = useUserTracking();
  const activeId = typeof user?.activeDietId === 'string' ? user.activeDietId : user?.activeDietId?._id;
  const isActive = activeId === dietId;

  const { data: diet, isLoading, error } = useQuery({
    queryKey: ['diet', dietId],
    queryFn: async () => {
      const response = await apiClient.get<Diet>(`/diets/${dietId}`);
      return response.data;
    },
    enabled: !!dietId,
  });

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    );
  }

  if (error || !diet) {
    return (
      <Container size="sm" py="xl">
        <Alert title="Error" color="red">
          {error ? 'Failed to load diet details. Please try again later.' : 'Diet not found.'}
        </Alert>
        <Button variant="light" mt="md" onClick={() => router.back()}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Button
        variant="subtle"
        leftSection={<ArrowLeft size={16} />}
        onClick={() => router.back()}
        mb="xl"
      >
        Back to Diets
      </Button>

      <Stack gap="xl">
        <Paper p="xl" radius="md" withBorder>
          <Group justify="space-between" align="flex-start">
            <Stack gap="xs">
              <Title order={1}>{diet.name}</Title>
              <Group gap="xs">
                <Badge variant="filled" color="blue">
                  {diet.goal.replace('_', ' ')}
                </Badge>
                <Badge variant="outline" color="green">
                  {diet.type}
                </Badge>
              </Group>
            </Stack>
            <Stack gap="md" align="flex-end">
              <Paper p="md" radius="md" bg="orange.1" withBorder>
                <Stack gap={0} align="center">
                  <Text fw={900} size="xl" c="orange.9">
                    {diet.calories}
                  </Text>
                  <Text size="xs" fw={700} c="orange.9">
                    KCAL / DAY
                  </Text>
                </Stack>
              </Paper>
              {token && (
                <Button
                  leftSection={isActive ? <Check size={16} /> : <Plus size={16} />}
                  color={isActive ? 'green' : 'blue'}
                  variant={isActive ? 'light' : 'filled'}
                  loading={isAssigningDiet}
                  disabled={isActive}
                  onClick={() => {
                    assignDiet(
                      { dietId },
                      {
                        onSuccess: () => {
                          notifications.show({
                            title: 'Success',
                            message: 'Diet plan assigned successfully!',
                            color: 'green',
                          });
                        },
                      }
                    );
                  }}
                >
                  {isActive ? 'Active Plan' : 'Assign to Me'}
                </Button>
              )}
            </Stack>
          </Group>

          <Divider my="xl" label="Nutritional Breakdown" labelPosition="center" />

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p="md" radius="md" withBorder bg="blue.0">
              <Stack gap={4} align="center">
                <Text fw={700} c="blue.9">
                  Protein
                </Text>
                <Text fw={900} size="xl" c="blue.9">
                  {diet.macros.protein}g
                </Text>
              </Stack>
            </Paper>
            <Paper p="md" radius="md" withBorder bg="green.0">
              <Stack gap={4} align="center">
                <Text fw={700} c="green.9">
                  Carbs
                </Text>
                <Text fw={900} size="xl" c="green.9">
                  {diet.macros.carbs}g
                </Text>
              </Stack>
            </Paper>
            <Paper p="md" radius="md" withBorder bg="red.0">
              <Stack gap={4} align="center">
                <Text fw={700} c="red.9">
                  Fat
                </Text>
                <Text fw={900} size="xl" c="red.9">
                  {diet.macros.fat}g
                </Text>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Paper>

        <Title order={2}>Meal Plan</Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {diet.meals.map((meal: Meal, idx: number) => (
            <Paper key={idx} p="xl" radius="md" withBorder>
              <Title order={4} mb="md" tt="uppercase" c="dimmed">
                {meal.name}
              </Title>
              <List
                spacing="sm"
                size="sm"
                center
                icon={
                  <ThemeIcon color="blue" size={20} radius="xl">
                    <Check size={12} />
                  </ThemeIcon>
                }
              >
                {meal.foods.map((food: Food, foodIdx: number) => (
                  <List.Item key={foodIdx}>
                    <Text fw={500}>{food.name}</Text>
                    {food.nutrition && (
                        <Text size="xs" c="dimmed">
                            {food.nutrition.calories} kcal | P: {food.nutrition.protein}g | C: {food.nutrition.carbs}g | F: {food.nutrition.fat}g
                        </Text>
                    )}
                  </List.Item>
                ))}
              </List>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default DietDetailPage;
