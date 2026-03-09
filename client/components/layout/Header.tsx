import Image from 'next/image'
import { Button, Group, Text } from '@mantine/core'
import logo from '@/public/logo.svg'

const Header = () => {
  return (
    <>
      <Group
        justify="space-between"
        p="sm"
      >
        <Group>
          <Image
            src={logo}
            alt="FitRep Logo"
            height={40}
          />
          <Text style={{ fontStyle: 'italic' }}>Fitness, tracked.</Text>
        </Group>
        <Group>
          <Button>Login</Button>
        </Group>
      </Group>
    </>
  )
}

export default Header
