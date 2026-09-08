'use client'

import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Check, UserCheck, UserX } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'
import { useCoach, useCoaches } from '@/features/coach/useCoach'

interface ProfileModalProps {
  opened: boolean
  onClose: () => void
}

export default function ProfileModal({ opened, onClose }: ProfileModalProps) {
  const { user } = useAuth()
  const { data: coaches = [], isLoading: isLoadingCoaches } = useCoaches()
  const { assignCoach, isAssigningCoach } = useCoach()

  const currentCoachObj =
    typeof user?.coachId === 'object' && user?.coachId !== null ? user.coachId : null
  const currentCoachIdStr =
    typeof user?.coachId === 'string'
      ? user.coachId
      : currentCoachObj
      ? currentCoachObj._id
      : ''

  const [selectedCoachId, setSelectedCoachId] = useState<string | null>(currentCoachIdStr || 'none')

  useEffect(() => {
    if (opened && user) {
      const cId =
        typeof user.coachId === 'object' && user.coachId !== null
          ? user.coachId._id
          : typeof user.coachId === 'string'
          ? user.coachId
          : 'none'
      setSelectedCoachId(cId || 'none')
    }
  }, [opened, user])

  if (!user) return null

  const isCoach = user.role === 'coach'

  const selectOptions = [
    { value: 'none', label: '🚫 No Coach Assigned' },
    ...coaches.map((c) => ({
      value: c._id,
      label: `🏋️ ${c.name} (${c.email})`,
    })),
  ]

  const handleSaveCoach = () => {
    const coachIdToSubmit = !selectedCoachId || selectedCoachId === 'none' ? null : selectedCoachId
    assignCoach(coachIdToSubmit, {
      onSuccess: () => {
        notifications.show({
          title: 'Profile Updated',
          message: coachIdToSubmit
            ? 'Your coach assignment has been saved!'
            : 'Coach removed successfully.',
          color: 'green',
          icon: <Check size={16} />,
        })
        onClose()
      },
      onError: (err: any) => {
        notifications.show({
          title: 'Error',
          message: err?.response?.data?.message || 'Failed to update coach',
          color: 'red',
        })
      },
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Title order={4} fw={700}>
          {isCoach ? 'My Profile' : 'My Profile & Coach'}
        </Title>
      }
      centered
      size="md"
      radius="md"
    >
      <Stack gap="lg" py="xs">
        {/* User Card */}
        <Paper withBorder p="md" radius="md" style={{ background: '#f8fafc' }}>
          <Group justify="space-between" align="center">
            <Group gap="md">
              <Avatar color={isCoach ? 'violet' : 'cobaltBlue'} size="lg" radius="xl">
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Text fw={700} size="lg" lh={1.2}>
                  {user.name}
                </Text>
                <Text size="sm" c="dimmed">
                  {user.email}
                </Text>
              </Box>
            </Group>
            <Badge
              color={isCoach ? 'violet' : 'cobaltBlue'}
              variant="light"
              size="md"
              radius="sm"
              tt="capitalize"
            >
              {isCoach ? 'Coach' : 'Client / User'}
            </Badge>
          </Group>
        </Paper>

        {isCoach ? (
          <Group justify="flex-end">
            <Button variant="default" onClick={onClose}>
              Close
            </Button>
          </Group>
        ) : (
          <>
            <Divider label="Coach Assignment" labelPosition="left" />
            <Stack gap="md">
            <Box>
              <Text size="xs" fw={700} c="dimmed" tt="uppercase" style={{ letterSpacing: '0.05em' }} mb={4}>
                Currently Assigned Coach
              </Text>
              {currentCoachObj ? (
                <Paper
                  withBorder
                  p="sm"
                  radius="md"
                  style={{ borderLeft: '4px solid var(--mantine-color-cobaltBlue-6)' }}
                >
                  <Group justify="space-between">
                    <Box>
                      <Text fw={600} size="sm">
                        {currentCoachObj.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {currentCoachObj.email}
                      </Text>
                    </Box>
                    <Badge color="green" variant="light" size="xs">
                      Active Coach
                    </Badge>
                  </Group>
                </Paper>
              ) : (
                <Paper withBorder p="sm" radius="md" style={{ background: '#fff9db' }}>
                  <Group gap="xs">
                    <UserX size={16} color="var(--mantine-color-yellow-8)" />
                    <Text size="sm" c="yellow.9" fw={500}>
                      No coach is currently assigned to your profile.
                    </Text>
                  </Group>
                </Paper>
              )}
            </Box>

            <Box>
              <Text size="sm" fw={600} mb={6}>
                Select or Change Coach
              </Text>
              <Select
                data={selectOptions}
                value={selectedCoachId}
                onChange={setSelectedCoachId}
                searchable
                clearable
                nothingFoundMessage="No coaches found"
                placeholder="Search or select a coach..."
                disabled={isLoadingCoaches}
                size="md"
                comboboxProps={{ shadow: 'md', transitionProps: { transition: 'pop', duration: 200 } }}
              />
              <Text size="xs" c="dimmed" mt={4}>
                Choose a coach from the dropdown or select &quot;No Coach Assigned&quot; if you want to train independently.
              </Text>
            </Box>

            <Group justify="flex-end" mt="xs">
              <Button variant="default" onClick={onClose} disabled={isAssigningCoach}>
                Cancel
              </Button>
              <Button
                onClick={handleSaveCoach}
                loading={isAssigningCoach}
                color="cobaltBlue"
                fw={600}
              >
                Save Coach Settings
              </Button>
            </Group>
          </Stack>
          </>
        )}
      </Stack>
    </Modal>
  )
}
