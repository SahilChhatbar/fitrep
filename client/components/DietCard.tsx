'use client';

import React from 'react';
import { Card, Text, Badge, Group, Stack, Button, Divider } from '@mantine/core';
import Link from 'next/link';
import { Diet } from '@/features/diet/diet.types';

interface DietCardProps {
  diet: Diet;
}

const DietCard = ({ diet }: DietCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={700} size="xl">
          {diet.name}
        </Text>
        <Badge color="orange" variant="light" size="lg">
          {diet.calories} kcal
        </Badge>
      </Group>

      <Badge variant="dot" color="blue" mb="md">
        {diet.goal.replace('_', ' ')}
      </Badge>

      <Divider my="sm" />

      <Group grow mb="md">
        <Stack gap={0} align="center">
          <Text size="xs" c="dimmed" fw={700}>PROTEIN</Text>
          <Text fw={700} c="blue">{diet.macros.protein}g</Text>
        </Stack>
        <Stack gap={0} align="center">
          <Text size="xs" c="dimmed" fw={700}>CARBS</Text>
          <Text fw={700} c="green">{diet.macros.carbs}g</Text>
        </Stack>
        <Stack gap={0} align="center">
          <Text size="xs" c="dimmed" fw={700}>FAT</Text>
          <Text fw={700} c="red">{diet.macros.fat}g</Text>
        </Stack>
      </Group>

      <Button
        component={Link}
        href={`/diets/${diet._id}`}
        fullWidth
        variant="light"
        color="blue"
        radius="md"
        mt="auto"
      >
        View Details
      </Button>
    </Card>
  );
};

export default DietCard;
