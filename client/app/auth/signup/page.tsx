'use client'

import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import Link from 'next/link'
import { useAuth } from '@/features/auth/useAuth'

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
      password: (value: string) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    signup(values)
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" fw={900}>
        Create an account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component={Link} href="/auth/login">
          Sign In
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your full name"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="hello@example.com"
              required
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              {...form.getInputProps('password')}
            />
          </Stack>

          {signupError && (
            <Text color="red" size="sm" mt="sm">
              {(signupError as any)?.response?.data?.message || 'Signup failed. Please try again.'}
            </Text>
          )}

          <Button type="submit" loading={isSigningUp} fullWidth mt="xl">
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
