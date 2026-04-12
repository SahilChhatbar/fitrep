'use client'

import Link from 'next/link'
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Dumbbell,
  Flame,
  Salad,
  Target,
  TrendingUp,
} from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'

const features = [
  {
    icon: <Dumbbell size={22} />,
    title: 'Expert Workout Plans',
    description:
      'Beginner to advanced programs designed to match your exact fitness goals and schedule.',
    color: 'cobaltBlue',
    href: '/workouts',
  },
  {
    icon: <Salad size={22} />,
    title: 'Science-Backed Nutrition',
    description:
      'Calorie and macro-optimised diet plans for fat loss, muscle gain, or maintenance.',
    color: 'teal',
    href: '/diets',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Progress Tracking',
    description:
      'Log sessions, track weight, build streaks, and see your consistency score over time.',
    color: 'orange',
    href: '/progress',
  },
]

const stats = [
  { value: '30+', label: 'Workout Plans' },
  { value: '20+', label: 'Diet Plans' },
  { value: '3', label: 'Fitness Levels' },
  { value: '100%', label: 'Free' },
]

export default function Home() {
  const { token } = useAuth()
  const isGuest = !token

  return (
    <Box style={{ minHeight: '100%' }}>
      {/* Hero */}
      <Box
        style={{
          background: 'linear-gradient(135deg, #00167a 0%, #1a35c4 60%, #2f42ca 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        py={{ base: 64, md: 96 }}
        px="md"
      >
        {/* Decorative circles */}
        <Box
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: -60,
            left: '20%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          }}
        />

        <Container
          size="lg"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Stack
            align="center"
            gap="xl"
            className="page-enter"
          >
            <Badge
              variant="light"
              color="orange"
              size="lg"
              leftSection={<Flame size={12} />}
              styles={{
                root: {
                  backgroundColor: 'rgba(245,156,42,0.2)',
                  color: '#f59c2a',
                  border: '1px solid rgba(245,156,42,0.3)',
                },
              }}
            >
              Your fitness journey starts here
            </Badge>

            <Title
              ta="center"
              c="white"
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                fontWeight: 400,
              }}
            >
              Train smarter,{' '}
              <Text
                component="span"
                inherit
                style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}
              >
                track everything.
              </Text>
            </Title>

            <Text
              ta="center"
              c="rgba(255,255,255,0.75)"
              size="lg"
              maw={520}
              lh={1.6}
            >
              FitRep gives you expert workout plans, nutrition guidance, and powerful progress
              tracking — all in one place.
            </Text>

            <Group mt="sm">
              {isGuest ? (
                <>
                  <Button
                    component={Link}
                    href="/auth/signup"
                    size="lg"
                    rightSection={<ArrowRight size={16} />}
                    styles={{
                      root: {
                        background: '#ffffff',
                        color: '#00167a',
                        fontWeight: 700,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        '&:hover': { background: '#f0f0f0' },
                      },
                    }}
                  >
                    Get Started Free
                  </Button>
                  <Button
                    component={Link}
                    href="/workouts"
                    size="lg"
                    variant="outline"
                    styles={{
                      root: {
                        borderColor: 'rgba(255,255,255,0.4)',
                        color: 'white',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      },
                    }}
                  >
                    Browse Plans
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    href="/dashboard"
                    size="lg"
                    rightSection={<ArrowRight size={16} />}
                    styles={{
                      root: {
                        background: '#ffffff',
                        color: '#00167a',
                        fontWeight: 700,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    Go to Dashboard
                  </Button>
                  <Button
                    component={Link}
                    href="/progress"
                    size="lg"
                    variant="outline"
                    styles={{
                      root: {
                        borderColor: 'rgba(255,255,255,0.4)',
                        color: 'white',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      },
                    }}
                  >
                    Log Today
                  </Button>
                </>
              )}
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Stats bar */}
      <Box
        style={{ background: '#ffffff', borderBottom: '1px solid var(--border)' }}
        py="lg"
      >
        <Container size="lg">
          <SimpleGrid cols={{ base: 2, sm: 4 }}>
            {stats.map((stat) => (
              <Stack
                key={stat.label}
                align="center"
                gap={2}
              >
                <Text
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '2rem',
                    color: 'var(--primary)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  size="sm"
                  c="dimmed"
                  fw={500}
                >
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features */}
      <Container
        size="lg"
        py={{ base: 48, md: 80 }}
        px="md"
      >
        <Stack
          align="center"
          mb="xl"
          gap="sm"
        >
          <Text
            size="sm"
            fw={700}
            c="cobaltBlue"
            tt="uppercase"
            style={{ letterSpacing: '0.1em' }}
          >
            Everything you need
          </Text>
          <Title
            ta="center"
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Built for real results
          </Title>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing="xl"
        >
          {features.map((f, i) => (
            <Box
              key={f.title}
              component={Link}
              href={f.href}
              style={{ textDecoration: 'none' }}
              className={`stagger-${i + 1}`}
            >
              <Box
                p="xl"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid var(--border)',
                  borderRadius: 16,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 40px rgba(0,22,122,0.1)'
                  el.style.borderColor = '#a9b2e8'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = 'var(--border)'
                }}
              >
                <ThemeIcon
                  size={48}
                  radius="md"
                  color={f.color}
                  variant="light"
                  mb="md"
                >
                  {f.icon}
                </ThemeIcon>
                <Title
                  order={3}
                  mb="xs"
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '1.25rem',
                  }}
                >
                  {f.title}
                </Title>
                <Text
                  size="sm"
                  c="dimmed"
                  lh={1.6}
                >
                  {f.description}
                </Text>
                <Group
                  mt="md"
                  gap={4}
                >
                  <Text
                    size="sm"
                    fw={600}
                    c="cobaltBlue"
                  >
                    Explore
                  </Text>
                  <ArrowRight
                    size={14}
                    color="var(--primary)"
                  />
                </Group>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA for guests */}
      {isGuest && (
        <Box
          mx="md"
          mb="xl"
          style={{
            background: 'linear-gradient(135deg, #f8f7f4 0%, var(--primary-light) 100%)',
            border: '1.5px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <Container
            size="lg"
            py={{ base: 48, md: 64 }}
          >
            <Stack
              align="center"
              gap="lg"
            >
              <ThemeIcon
                size={56}
                radius="xl"
                color="cobaltBlue"
                variant="light"
              >
                <Target size={28} />
              </ThemeIcon>
              <Title
                ta="center"
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to transform your fitness?
              </Title>
              <Text
                ta="center"
                c="dimmed"
                maw={480}
                lh={1.6}
              >
                Create a free account to track your workouts, log check-ins, and watch your progress
                compound over time.
              </Text>
              <Group>
                {[
                  'Personal progress tracking',
                  'Streak & consistency metrics',
                  'Assign any plan to yourself',
                ].map((item) => (
                  <Group
                    key={item}
                    gap={6}
                  >
                    <CheckCircle2
                      size={14}
                      color="var(--success)"
                    />
                    <Text
                      size="sm"
                      fw={500}
                    >
                      {item}
                    </Text>
                  </Group>
                ))}
              </Group>
              <Group mt="xs">
                <Button
                  component={Link}
                  href="/auth/signup"
                  size="md"
                  rightSection={<ArrowRight size={15} />}
                  styles={{
                    root: {
                      background: 'var(--primary)',
                      fontWeight: 700,
                      boxShadow: '0 4px 16px rgba(0,22,122,0.2)',
                    },
                  }}
                >
                  Create Free Account
                </Button>
                <Button
                  component={Link}
                  href="/auth/login"
                  size="md"
                  variant="subtle"
                  color="dark"
                >
                  Already have an account?
                </Button>
              </Group>
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  )
}
