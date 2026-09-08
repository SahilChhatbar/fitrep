import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Badge, Box, Burger, Button, Group, Menu, Stack, Text } from '@mantine/core'
import { LogOut, User as UserIcon } from 'lucide-react'
import logo from '@/public/logo.svg'
import ProfileModal from '@/components/ProfileModal'
import { useAuth } from '@/features/auth/useAuth'

interface HeaderProps {
  mobileOpened: boolean
  toggleMobile: () => void
  desktopOpened: boolean
  toggleDesktop: () => void
  showNavbar?: boolean
}

const Header = ({
  mobileOpened,
  toggleMobile,
  desktopOpened,
  toggleDesktop,
  showNavbar = true,
}: HeaderProps) => {
  const { user, logout } = useAuth()
  const isCoach = user?.role === 'coach'
  const [profileOpened, setProfileOpened] = useState(false)

  return (
    <>
      <Group
        h="100%"
        px="md"
        justify="space-between"
      >
        <Group>
          {showNavbar && (
            <>
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
            </>
          )}
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
            <Group gap="xs">
              <Stack gap={2} align="flex-end" visibleFrom="xs">
                <Text size="sm" fw={600} lh={1.2}>
                  {user.name}
                </Text>
                <Badge
                  color={isCoach ? 'violet' : 'blue'}
                  variant="light"
                  size="xs"
                  radius="sm"
                  tt="capitalize"
                >
                  {isCoach ? 'Coach' : 'User'}
                </Badge>
              </Stack>
              <Menu shadow="md" width={220} position="bottom-end">
                <Menu.Target>
                  <Box style={{ cursor: 'pointer' }}>
                    <Avatar color={isCoach ? 'violet' : 'cobaltBlue'} radius="xl">
                      {user.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </Box>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>
                    <Stack gap={2}>
                      <Text fw={700} size="sm" c="dark">
                        {user.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {user.email}
                      </Text>
                    </Stack>
                  </Menu.Label>
                  <Menu.Divider />
                  <Menu.Item
                    leftSection={<UserIcon size={14} />}
                    onClick={() => setProfileOpened(true)}
                  >
                    {isCoach ? 'My Profile' : 'My Profile & Coach'}
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red" leftSection={<LogOut size={14} />} onClick={() => logout()}>
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

      {user && (
        <ProfileModal
          opened={profileOpened}
          onClose={() => setProfileOpened(false)}
        />
      )}
    </>
  )
}

export default Header
