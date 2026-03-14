import Image from 'next/image'
import { Button, Card, Group, Stack, Text } from '@mantine/core'
import logo from '@/public/logo.svg'

export default function Home() {
  return (
    <Stack
      align="center"
      h="100%"
    >
      <Stack>
        <Text size="lg">Fitness, tracked.</Text>
        <Text size="sm">
          Log your workouts, diet, track your progress, and achieve your fitness goals.
        </Text>
        <Button>Get Started</Button>
      </Stack>
      <Stack
        align="center"
        justify="center"
      >
        <Image
          src={logo}
          alt="Home Page Banner Image"
          height={200}
          width={200}
        />
        <Text size="lg">Your fitness, logged.</Text>
        <Group>
          <Card>
            <Stack>
              <Text size="lg">Get a workout plan, suitable for your goals.</Text>
              <Button>Get Started</Button>
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Text size="lg">Get a diet plan, suitable for your goals.</Text>
              <Button>Get Started</Button>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Stack>
  )
}
