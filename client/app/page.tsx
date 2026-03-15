import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, Group, Stack, Text, Title } from '@mantine/core'
import logo from '@/public/logo.svg'

export default function Home() {
  return (
    <Stack
      align="center"
      h="100%"
    >
      <Stack>
        <Title
          order={1}
          fw={900}
        >
          Fitness, tracked.
        </Title>
        <Text size="sm">
          Log your workouts, diet, track your progress, and achieve your fitness goals.
        </Text>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
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
        <Title>Your fitness, logged.</Title>
        <Group>
          <Card>
            <Stack>
              <Text size="lg">Get a workout plan, suitable for your goals.</Text>
              <Link href="/workouts">
                <Button>Get Started</Button>
              </Link>
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Text size="lg">Get a diet plan, suitable for your goals.</Text>
              <Link href="/diet">
                <Button>Get Started</Button>
              </Link>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Stack>
  )
}
