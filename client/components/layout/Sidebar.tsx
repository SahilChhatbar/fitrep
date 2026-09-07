'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLink, Stack } from '@mantine/core'
import { useAuthStore } from '@/features/auth/authStore'

interface SidebarProps {
  toggle: () => void
}
type NavItem = {
  href: string
  label: string
  authRequired?: boolean
}

const ALL_NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', authRequired: true },
  { href: '/workouts', label: 'Workouts' },
  { href: '/diets', label: 'Diet' },
  { href: '/progress', label: 'Progress', authRequired: true },
]

const Sidebar = ({ toggle }: SidebarProps): React.JSX.Element => {
  const pathname = usePathname()
  const token = useAuthStore((s) => s.token)

  const navItems = ALL_NAV_ITEMS.filter((item) => !item.authRequired || !!token)

  return (
    <Stack gap="xs" p="sm">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          component={Link}
          href={item.href}
          label={item.label}
          active={pathname === item.href || pathname.startsWith(item.href + '/')}
          onClick={toggle}
        />
      ))}
    </Stack>
  )
}

export default Sidebar
