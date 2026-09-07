'use client'

import React, { useEffect } from 'react'
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useQueryClient } from '@tanstack/react-query'
import { Plus, Trash2 } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { Diet, DietGoal, DietType } from '@/features/diet/diet.types'
import { apiClient } from '@/lib/api-client'

interface DietFormModalProps {
  opened: boolean
  onClose: () => void
  dietToEdit?: Diet | null
  onSuccess?: () => void
}

export const DietFormModal = ({
  opened,
  onClose,
  dietToEdit,
  onSuccess,
}: DietFormModalProps) => {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const [loading, setLoading] = React.useState(false)

  const form = useForm({
    initialValues: {
      name: '',
      goal: 'fat_loss' as DietGoal,
      type: 'Non-Vegetarian' as DietType,
      calories: 2000,
      macros: {
        protein: 150,
        carbs: 200,
        fat: 65,
      },
      meals: [
        {
          name: 'Breakfast',
          foods: [{ name: 'Oatmeal & Eggs', nutrition: { calories: 450, protein: 30, carbs: 50, fat: 12 } }],
        },
      ],
    },
    validate: {
      name: (val) => (val.trim().length < 2 ? 'Name is required' : null),
      calories: (val) => (val <= 0 ? 'Calories must be greater than 0' : null),
    },
  })

  useEffect(() => {
    if (dietToEdit) {
      form.setValues({
        name: dietToEdit.name,
        goal: dietToEdit.goal,
        type: dietToEdit.type,
        calories: dietToEdit.calories,
        macros: {
          protein: dietToEdit.macros?.protein || 0,
          carbs: dietToEdit.macros?.carbs || 0,
          fat: dietToEdit.macros?.fat || 0,
        },
        meals:
          dietToEdit.meals && dietToEdit.meals.length > 0
            ? dietToEdit.meals.map((m) => ({
                name: m.name,
                foods: (m.foods || []).map((f) => ({
                  name: f.name,
                  nutrition: {
                    calories: f.nutrition?.calories || 0,
                    protein: f.nutrition?.protein || 0,
                    carbs: f.nutrition?.carbs || 0,
                    fat: f.nutrition?.fat || 0,
                  },
                })),
              }))
            : [
                {
                  name: 'Breakfast',
                  foods: [{ name: 'Oatmeal', nutrition: { calories: 300, protein: 10, carbs: 50, fat: 5 } }],
                },
              ],
      })
    } else {
      form.reset()
    }
  }, [dietToEdit, opened])

  const handleSubmit = async (values: typeof form.values) => {
    try {
      setLoading(true)
      const headers = { Authorization: `Bearer ${token}` }

      if (dietToEdit) {
        await apiClient.put(`/diets/${dietToEdit._id}`, values, { headers })
        notifications.show({
          title: 'Diet Updated',
          message: 'Diet plan has been updated successfully.',
          color: 'teal',
        })
      } else {
        await apiClient.post('/diets', values, { headers })
        notifications.show({
          title: 'Diet Created',
          message: 'New diet plan has been uploaded.',
          color: 'teal',
        })
      }

      queryClient.invalidateQueries({ queryKey: ['diets'] })
      if (dietToEdit) {
        queryClient.invalidateQueries({ queryKey: ['diet', dietToEdit._id] })
      }
      onSuccess?.()
      onClose()
    } catch (err: any) {
      notifications.show({
        title: 'Error',
        message: err.response?.data?.message || 'Failed to save diet plan',
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  const addMeal = () => {
    form.insertListItem('meals', {
      name: `Meal ${form.values.meals.length + 1}`,
      foods: [{ name: 'Sample Food', nutrition: { calories: 200, protein: 15, carbs: 20, fat: 5 } }],
    })
  }

  const removeMeal = (index: number) => {
    form.removeListItem('meals', index)
  }

  const addFood = (mealIndex: number) => {
    form.insertListItem(`meals.${mealIndex}.foods`, {
      name: 'New Food Item',
      nutrition: { calories: 150, protein: 10, carbs: 15, fat: 4 },
    })
  }

  const removeFood = (mealIndex: number, foodIndex: number) => {
    form.removeListItem(`meals.${mealIndex}.foods`, foodIndex)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text fw={700} size="lg">
          {dietToEdit ? 'Edit Diet Plan' : 'Upload New Diet Plan'}
        </Text>
      }
      size="lg"
      radius="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Plan Name"
            placeholder="High Protein Fat Loss"
            required
            {...form.getInputProps('name')}
          />

          <Group grow>
            <Select
              label="Goal"
              data={[
                { label: 'Fat Loss', value: 'fat_loss' },
                { label: 'Muscle Gain', value: 'muscle_gain' },
                { label: 'Maintenance', value: 'maintenance' },
              ]}
              {...form.getInputProps('goal')}
            />
            <Select
              label="Diet Type"
              data={[
                { label: 'Non-Vegetarian', value: 'Non-Vegetarian' },
                { label: 'Vegetarian', value: 'Vegetarian' },
                { label: 'Vegan', value: 'Vegan' },
              ]}
              {...form.getInputProps('type')}
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Daily Calories (kcal)"
              min={500}
              max={10000}
              {...form.getInputProps('calories')}
            />
            <NumberInput
              label="Protein (g)"
              min={0}
              {...form.getInputProps('macros.protein')}
            />
            <NumberInput
              label="Carbs (g)"
              min={0}
              {...form.getInputProps('macros.carbs')}
            />
            <NumberInput
              label="Fat (g)"
              min={0}
              {...form.getInputProps('macros.fat')}
            />
          </Group>

          <Box mt="sm">
            <Group justify="space-between" mb="xs">
              <Text fw={600} size="sm">
                Meals & Foods
              </Text>
              <Button
                size="xs"
                variant="light"
                color="blue"
                leftSection={<Plus size={14} />}
                onClick={addMeal}
              >
                Add Meal
              </Button>
            </Group>

            <Stack gap="sm">
              {form.values.meals.map((meal, mealIdx) => (
                <Paper key={mealIdx} withBorder p="sm" radius="md" style={{ background: '#fcfcfc' }}>
                  <Group justify="space-between" mb="xs">
                    <TextInput
                      placeholder="Meal Name (e.g. Breakfast)"
                      size="xs"
                      fw={600}
                      style={{ flex: 1 }}
                      {...form.getInputProps(`meals.${mealIdx}.name`)}
                    />
                    {form.values.meals.length > 1 && (
                      <ActionIcon
                        color="red"
                        variant="subtle"
                        size="sm"
                        onClick={() => removeMeal(mealIdx)}
                      >
                        <Trash2 size={14} />
                      </ActionIcon>
                    )}
                  </Group>

                  <Stack gap={6}>
                    {meal.foods.map((_, foodIdx) => (
                      <Group key={foodIdx} gap="xs" align="flex-end">
                        <TextInput
                          placeholder="Food name"
                          size="xs"
                          style={{ flex: 2 }}
                          {...form.getInputProps(`meals.${mealIdx}.foods.${foodIdx}.name`)}
                        />
                        <NumberInput
                          placeholder="Calories"
                          size="xs"
                          style={{ width: 80 }}
                          {...form.getInputProps(`meals.${mealIdx}.foods.${foodIdx}.nutrition.calories`)}
                        />
                        <NumberInput
                          placeholder="Protein"
                          size="xs"
                          style={{ width: 70 }}
                          {...form.getInputProps(`meals.${mealIdx}.foods.${foodIdx}.nutrition.protein`)}
                        />
                        {meal.foods.length > 1 && (
                          <ActionIcon
                            color="red"
                            variant="subtle"
                            size="xs"
                            onClick={() => removeFood(mealIdx, foodIdx)}
                          >
                            <Trash2 size={12} />
                          </ActionIcon>
                        )}
                      </Group>
                    ))}
                    <Button
                      size="xs"
                      variant="subtle"
                      color="gray"
                      mt={4}
                      leftSection={<Plus size={12} />}
                      onClick={() => addFood(mealIdx)}
                    >
                      Add Food Item
                    </Button>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Box>

          <Button type="submit" loading={loading} color="cobaltBlue" fullWidth mt="md">
            {dietToEdit ? 'Save Changes' : 'Upload Plan'}
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}
