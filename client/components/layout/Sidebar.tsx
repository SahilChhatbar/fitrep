import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLink, Stack } from '@mantine/core'

interface SidebarProps {
  toggle: () => void
}
type NavItem = {
  href: string
  label: string
}

const Sidebar = ({ toggle }: SidebarProps): React.JSX.Element => {
  const pathname = usePathname()
  const navItems: NavItem[] = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/workouts', label: 'Workouts' },
    { href: '/diets', label: 'Diet' },
  ]
  const handleLinkClick = () => {
    toggle()
  }

  return (
    <Stack gap="xs">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          component={Link}
          href={item.href}
          label={item.label}
          active={pathname === item.href}
          onClick={handleLinkClick}
        />
      ))}
    </Stack>
  )
}

export default Sidebar
