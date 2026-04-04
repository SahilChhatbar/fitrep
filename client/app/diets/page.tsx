'use client';

import React from 'react';
import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Loader,
  Center,
  Alert,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import DietCard from '@/components/DietCard';
import type { Diet } from '@/features/diet/diet.types';

const Diet = () => {
  const { data: diets, isLoading, error } = useQuery<Diet[]>({
    queryKey: ['diets'],
    queryFn: async () => {
      const response = await apiClient.get('/diets');
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Container size="sm" py="xl">
        <Alert title="Error" color="red">
          Failed to load diet plans. Please try again later.
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Stack align="center" mb="xl">
        <Title order={1} fw={900}>
          Diet Plans
        </Title>
        <Text c="dimmed" size="lg" maw={600} ta="center">
          Fuel your body with science-backed nutrition. Choose a plan that aligns with your fitness
          goals and lifestyle.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
        {diets?.map((plan: Diet) => (
          <DietCard key={plan._id} diet={plan} />
        ))}
      </SimpleGrid>
      
      {diets?.length === 0 && (
        <Center py="xl">
          <Text c="dimmed">No diet plans found.</Text>
        </Center>
      )}
    </Container>
  );
};

export default Diet;

