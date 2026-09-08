'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  Group,
  Loader,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { Plus, Salad, Search } from 'lucide-react'
import DietCard from '@/components/DietCard'
import { DietFormModal } from '@/components/DietFormModal'
import { useAuth } from '@/features/auth/useAuth'
import type { Diet } from '@/features/diet/diet.types'
import { apiClient } from '@/lib/api-client'

const DietsPage = () => {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const initialFilter = searchParams.get('filter') === 'my_plans' ? 'my_plans' : 'all'

  const [scope, setScope] = useState<string>(initialFilter)
  const [goal, setGoal] = useState('all')
  const [search, setSearch] = useState('')
  const [modalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    if (searchParams.get('filter') === 'my_plans') {
      setScope('my_plans')
    }
  }, [searchParams])

  const {
    data: diets,
    isLoading,
    error,
  } = useQuery<Diet[]>({
    queryKey: ['diets'],
    queryFn: async () => {
      const response = await apiClient.get('/diets')
      return response.data
    },
  })

  const filtered = diets?.filter((d) => {
    const matchesScope =
      scope === 'all' ||
      (scope === 'my_plans' && d.uploadedByCoach === user?.name)
    const matchesGoal = goal === 'all' || d.goal === goal
    const matchesSearch =
      !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.type.toLowerCase().includes(search.toLowerCase())
    return matchesScope && matchesGoal && matchesSearch
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
            Loading diet plans...
          </Text>
        </Stack>
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
          title="Error loading diets"
          color="red"
          radius="md"
        >
          Failed to load diet plans. Please try again later.
        </Alert>
      </Container>
    )
  }

  return (
    <Container
      size="lg"
      py="xl"
    >
      <DietFormModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />

      <Stack
        gap="xl"
        className="page-enter"
      >
        {/* Header */}
        <Box
          p="xl"
          style={{
            background: 'linear-gradient(135deg, #0d7c5a 0%, #1db37e 100%)',
            borderRadius: 16,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              pointerEvents: 'none',
            }}
          />
          <Group justify="space-between" align="flex-start" style={{ position: 'relative', zIndex: 1 }}>
            <Stack
              gap="xs"
            >
              <Group gap="sm">
                <Salad
                  size={24}
                  color="rgba(255,255,255,0.85)"
                />
                <Title
                  order={1}
                  c="white"
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '1.8rem',
                  }}
                >
                  Nutrition Plans
                </Title>
              </Group>
              <Text
                c="rgba(255,255,255,0.8)"
                size="sm"
                maw={480}
              >
                Science-backed meal plans tailored to your goals. Every macro, every meal — planned
                out for you.
              </Text>
            </Stack>
            {user?.role === 'coach' && (
              <Button
                color="teal"
                variant="white"
                leftSection={<Plus size={16} />}
                onClick={() => setModalOpened(true)}
              >
                Add Diet Plan
              </Button>
            )}
          </Group>
        </Box>

        {/* Filters */}
        <Group
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="sm"
        >
          <Group gap="sm" wrap="wrap">
            {user?.role === 'coach' && (
              <SegmentedControl
                value={scope}
                onChange={setScope}
                data={[
                  { label: 'All Plans', value: 'all' },
                  { label: 'My Created Plans', value: 'my_plans' },
                ]}
                color="teal"
                styles={{
                  root: { backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' },
                }}
              />
            )}
            <SegmentedControl
              value={goal}
              onChange={setGoal}
              data={[
                { label: 'All Goals', value: 'all' },
                { label: 'Fat Loss', value: 'fat_loss' },
                { label: 'Muscle Gain', value: 'muscle_gain' },
                { label: 'Maintenance', value: 'maintenance' },
              ]}
              styles={{
                root: { backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' },
              }}
            />
          </Group>
          <TextInput
            placeholder="Search plans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftSection={<Search size={15} />}
            style={{ width: 220 }}
            styles={{ input: { backgroundColor: '#fff' } }}
          />
        </Group>

        {/* Grid */}
        {filtered && filtered.length > 0 ? (
          <>
            <Text
              size="sm"
              c="dimmed"
              fw={500}
            >
              Showing {filtered.length} plan{filtered.length !== 1 ? 's' : ''}
            </Text>
            <SimpleGrid
              cols={{ base: 1, md: 2, lg: 3 }}
              spacing="lg"
            >
              {filtered.map((plan: Diet) => (
                <DietCard
                  key={plan._id}
                  diet={plan}
                />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <Center py={60}>
            <Stack
              align="center"
              gap="sm"
            >
              <Salad
                size={40}
                color="var(--muted)"
              />
              <Text
                c="dimmed"
                fw={500}
              >
                No diet plans match your filters
              </Text>
              <Text
                size="sm"
                c="dimmed"
              >
                Try adjusting your search or goal filter
              </Text>
            </Stack>
          </Center>
        )}
      </Stack>
    </Container>
  )
}

export default DietsPage
