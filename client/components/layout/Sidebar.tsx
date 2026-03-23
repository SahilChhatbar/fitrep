import React from 'react'
import { Stack, NavLink } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  toggle: () => void;
}
type NavItem = {
  href: string;
  label: string;
};

const Sidebar = ({ toggle }: SidebarProps): React.JSX.Element => {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/workouts", label: "Workouts" },
    { href: "/diet", label: "Diet" },
  ];
  const handleLinkClick = () => {
    toggle();
  };

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

