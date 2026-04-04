import Image from 'next/image'
import Link from 'next/link'
import { Burger, Button, Group, Text, Menu, Avatar, ActionIcon } from '@mantine/core'
import logo from '@/public/logo.svg'
import { useAuth } from '@/features/auth/useAuth'

interface HeaderProps {
  mobileOpened: boolean
  toggleMobile: () => void
  desktopOpened: boolean
  toggleDesktop: () => void
}

const Header = ({ mobileOpened, toggleMobile, desktopOpened, toggleDesktop }: HeaderProps) => {
  const { user, logout } = useAuth()

  return (
    <Group
      h="100%"
      px="md"
      justify="space-between"
    >
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
          color="cobaltBlue.9"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
          color="cobaltBlue.9"
        />
        <Group
          align="flex-end"
          gap="xs"
        >
          <Link href="/">
            {' '}
            <Image
              src={logo}
              alt="FitRep Logo"
              height={40}
            />
          </Link>
          <Text
            visibleFrom="sm"
            size="sm"
            style={{ fontStyle: 'italic', paddingBottom: '4px' }}
          >
            Fitness, tracked.
          </Text>
        </Group>
      </Group>
      <Group>
        {user ? (
          <Group gap="sm">
            <Text size="sm" fw={500} visibleFrom="xs">
              {user.name}
            </Text>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar color="cobaltBlue" radius="xl" style={{ cursor: 'pointer' }}>
                  {user.name.charAt(0)}
                </Avatar>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item component={Link} href="/dashboard">
                  Dashboard
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" onClick={() => logout()}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        ) : (
          <Group gap="xs">
            <Button variant="subtle" component={Link} href="/auth/login">
              Login
            </Button>
            <Button component={Link} href="/auth/signup">
              Sign Up
            </Button>
          </Group>
        )}
      </Group>
    </Group>
  )
}

export default Header
