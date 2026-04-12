'use client'

import Link from 'next/link'
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowRight, Dumbbell } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'

export default function LoginPage() {
  const { login, isLoggingIn, loginError } = useAuth()

  const form = useForm({
    initialValues: {
      identifier: '',
      password: '',
    },
    validate: {
      identifier: (value: string) => (value.length < 1 ? 'Name or Email is required' : null),
      password: (value: string) => (value.length < 1 ? 'Password is required' : null),
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    login(values)
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f7f4 0%, #eef0fb 100%)',
        padding: '2rem 1rem',
      }}
    >
      <Container
        size={440}
        w="100%"
      >
        <Stack
          align="center"
          mb="xl"
          gap="sm"
          className="page-enter"
        >
          <ThemeIcon
            size={52}
            radius="xl"
            color="cobaltBlue"
            variant="light"
          >
            <Dumbbell size={26} />
          </ThemeIcon>
          <Title
            ta="center"
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontWeight: 400,
              fontSize: '2rem',
              letterSpacing: '-0.02em',
            }}
          >
            Welcome back
          </Title>
          <Text
            c="dimmed"
            size="sm"
            ta="center"
          >
            Don&apos;t have an account?{' '}
            <Anchor
              size="sm"
              component={Link}
              href="/auth/signup"
              fw={600}
              c="cobaltBlue"
            >
              Sign up free
            </Anchor>
          </Text>
        </Stack>

        <Paper
          withBorder
          shadow="md"
          p={32}
          radius="lg"
          style={{ border: '1.5px solid var(--border)' }}
          className="stagger-1 page-enter"
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                label="Name or Email"
                placeholder="john@example.com"
                size="md"
                required
                {...form.getInputProps('identifier')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                size="md"
                required
                {...form.getInputProps('password')}
              />
            </Stack>

            {loginError && (
              <Box
                mt="md"
                p="sm"
                style={{
                  background: '#fff5f5',
                  border: '1px solid #ffc9c9',
                  borderRadius: 8,
                }}
              >
                <Text
                  color="red"
                  size="sm"
                  fw={500}
                >
                  {(loginError as any).response?.data?.message ||
                    'Login failed. Please check your credentials.'}
                </Text>
              </Box>
            )}

            <Group
              justify="space-between"
              align="center"
              mt="md"
            >
              <Anchor
                component="button"
                type="button"
                size="xs"
                c="dimmed"
              >
                Forgot password?
              </Anchor>
            </Group>

            <Button
              type="submit"
              loading={isLoggingIn}
              fullWidth
              mt="lg"
              size="md"
              rightSection={!isLoggingIn && <ArrowRight size={16} />}
              styles={{
                root: {
                  background: 'var(--primary)',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(0,22,122,0.2)',
                  height: 44,
                },
              }}
            >
              Sign in
            </Button>

            <Divider
              label="or"
              labelPosition="center"
              my="md"
            />

            <Button
              component={Link}
              href="/workouts"
              fullWidth
              variant="subtle"
              color="dark"
              size="sm"
            >
              Browse plans without account
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  )
}
