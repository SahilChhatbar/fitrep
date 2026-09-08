'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Divider, NavLink, Stack } from '@mantine/core'
import { Apple, ClipboardList, Dumbbell, LayoutDashboard, LineChart, Salad } from 'lucide-react'
import { useAuthStore } from '@/features/auth/authStore'

interface SidebarProps {
  toggle: () => void
}

const SidebarContent = ({ toggle }: SidebarProps): React.JSX.Element => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const isCoach = user?.role === 'coach'

  const isMyPlansFilter = searchParams.get('filter') === 'my_plans'

  const isWorkoutsActive = (pathname === '/workouts' || pathname.startsWith('/workouts/')) && !isMyPlansFilter
  const isDietsActive = (pathname === '/diets' || pathname.startsWith('/diets/')) && !isMyPlansFilter
  const isMyWorkoutsActive = pathname === '/workouts' && isMyPlansFilter
  const isMyDietsActive = pathname === '/diets' && isMyPlansFilter

  return (
    <Stack justify="space-between" h="100%" px="md" py="md" pt="lg">
      <Stack gap="xs">
        {token && (
          <NavLink
            component={Link}
            href="/dashboard"
            label="Dashboard"
            leftSection={<LayoutDashboard size={16} />}
            active={pathname === '/dashboard'}
            onClick={toggle}
            style={{ borderRadius: 8 }}
          />
        )}

        <NavLink
          component={Link}
          href="/workouts"
          label="Workouts"
          leftSection={<Dumbbell size={16} />}
          active={isWorkoutsActive}
          onClick={toggle}
          style={{ borderRadius: 8 }}
        />

        <NavLink
          component={Link}
          href="/diets"
          label="Diet Plans"
          leftSection={<Salad size={16} />}
          active={isDietsActive}
          onClick={toggle}
          style={{ borderRadius: 8 }}
        />

        {token && (
          <NavLink
            component={Link}
            href="/progress"
            label="Progress"
            leftSection={<LineChart size={16} />}
            active={pathname === '/progress'}
            onClick={toggle}
            style={{ borderRadius: 8 }}
          />
        )}

        {isCoach && (
          <>
            <Divider my={6} label="Coach Menu" labelPosition="center" />
            <NavLink
              component={Link}
              href="/workouts?filter=my_plans"
              label="My Workout Plans"
              leftSection={<ClipboardList size={16} />}
              active={isMyWorkoutsActive}
              onClick={toggle}
              style={{ borderRadius: 8 }}
            />
            <NavLink
              component={Link}
              href="/diets?filter=my_plans"
              label="My Diet Plans"
              leftSection={<Apple size={16} />}
              active={isMyDietsActive}
              onClick={toggle}
              style={{ borderRadius: 8 }}
            />
          </>
        )}
      </Stack>
    </Stack>
  )
}

const Sidebar = (props: SidebarProps): React.JSX.Element => {
  return (
    <Suspense fallback={null}>
      <SidebarContent {...props} />
    </Suspense>
  )
}

export default Sidebar
