'use client'

import Link from 'next/link'
import {
  Anchor,
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowRight, CheckCircle2, Dumbbell } from 'lucide-react'
import { useAuth } from '@/features/auth/useAuth'

const perks = [
  'Track workout sessions & build streaks',
  'Log daily weight & body composition',
  'Assign diet & workout plans to yourself',
  'See your check-in consistency score',
]

export default function SignupPage() {
  const { signup, isSigningUp, signupError } = useAuth()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: {
      name: (value: string) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      password: (value: string) =>
        value.length < 6 ? 'Password must be at least 6 characters' : null,
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    signup(values)
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
        size={900}
        w="100%"
      >
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={40}
          className="page-enter"
        >
          {/* Left — value prop */}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem 1rem',
            }}
            visibleFrom="md"
          >
            <Stack gap="xl">
              <Stack gap="sm">
                <ThemeIcon
                  size={52}
                  radius="xl"
                  color="cobaltBlue"
                  variant="light"
                >
                  <Dumbbell size={26} />
                </ThemeIcon>
                <Title
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '2.2rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  Your fitness,
                  <br />
                  <Text
                    component="span"
                    inherit
                    style={{ fontStyle: 'italic', color: 'var(--primary)' }}
                  >
                    properly tracked.
                  </Text>
                </Title>
                <Text
                  c="dimmed"
                  lh={1.6}
                >
                  Join FitRep and take control of your fitness journey with tools built to keep you
                  consistent.
                </Text>
              </Stack>

              <Stack gap="sm">
                {perks.map((perk) => (
                  <Box
                    key={perk}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--success)"
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <Text
                      size="sm"
                      fw={500}
                    >
                      {perk}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* Right — form */}
          <Box>
            <Stack
              align="center"
              mb="lg"
              gap="xs"
            >
              <Title
                ta="center"
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontWeight: 400,
                  fontSize: '1.8rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Create your account
              </Title>
              <Text
                c="dimmed"
                size="sm"
                ta="center"
              >
                Already have one?{' '}
                <Anchor
                  size="sm"
                  component={Link}
                  href="/auth/login"
                  fw={600}
                  c="cobaltBlue"
                >
                  Sign in
                </Anchor>
              </Text>
            </Stack>

            <Paper
              withBorder
              shadow="md"
              p={32}
              radius="lg"
              style={{ border: '1.5px solid var(--border)' }}
            >
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput
                    label="Full Name"
                    placeholder="John Doe"
                    size="md"
                    required
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="john@example.com"
                    size="md"
                    required
                    {...form.getInputProps('email')}
                  />
                  <PasswordInput
                    label="Password"
                    placeholder="At least 6 characters"
                    size="md"
                    required
                    {...form.getInputProps('password')}
                  />
                </Stack>

                {signupError && (
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
                      {(signupError as any).response?.data?.message ||
                        'Signup failed. Please try again.'}
                    </Text>
                  </Box>
                )}

                <Button
                  type="submit"
                  loading={isSigningUp}
                  fullWidth
                  mt="xl"
                  size="md"
                  rightSection={!isSigningUp && <ArrowRight size={16} />}
                  styles={{
                    root: {
                      background: 'var(--primary)',
                      fontWeight: 700,
                      boxShadow: '0 4px 16px rgba(0,22,122,0.2)',
                      height: 44,
                    },
                  }}
                >
                  Create Account
                </Button>

                <Text
                  size="xs"
                  c="dimmed"
                  ta="center"
                  mt="md"
                >
                  By creating an account, you agree to our Terms of Service.
                </Text>
              </form>
            </Paper>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
