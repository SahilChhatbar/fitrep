import Image from 'next/image'
import { Button, Group, Text, Burger } from '@mantine/core'
import logo from '@/public/logo.svg'
import Link from 'next/link';

interface HeaderProps {
  mobileOpened: boolean;
  toggleMobile: () => void;
  desktopOpened: boolean;
  toggleDesktop: () => void;
}

const Header = ({ mobileOpened, toggleMobile, desktopOpened, toggleDesktop }: HeaderProps) => {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" color="cobaltBlue.9" />
        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" color="cobaltBlue.9" />
        <Group align="flex-end" gap="xs">
          <Link href="/"> <Image
            src={logo}
            alt="FitRep Logo"
            height={40}
          /></Link>
          <Text visibleFrom="sm" size="sm" style={{ fontStyle: 'italic', paddingBottom: '4px' }}>
            Fitness, tracked.
          </Text>
        </Group>
      </Group>
      <Group>
        <Button variant="filled">Login</Button>
      </Group>
    </Group>
  )
}


export default Header

