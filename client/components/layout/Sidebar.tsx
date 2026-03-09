import React from 'react'
import { Stack, NavLink } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  toggle: () => void;
}

const Sidebar = ({ toggle }: SidebarProps): React.JSX.Element => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    toggle();
  };

  return (
    <Stack gap="xs">
      <NavLink
        component={Link}
        href="/dashboard"
        label="Dashboard"
        active={pathname === '/dashboard'}
        onClick={handleLinkClick}
      />
      <NavLink
        component={Link}
        href="/workouts"
        label="Workouts"
        active={pathname === '/workouts'}
        onClick={handleLinkClick}
      />
      <NavLink
        component={Link}
        href="/diet"
        label="Diet"
        active={pathname === '/diet'}
        onClick={handleLinkClick}
      />
    </Stack>
  )
}

export default Sidebar

