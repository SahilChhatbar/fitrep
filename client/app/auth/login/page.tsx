'use client'

import {
  Anchor,
  Button,
  Container,
  Group,
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
    <Container size={420} my={40}>
      <Title ta="center" fw={900}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component={Link} href="/auth/signup">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Name or Email"
              placeholder="Your name or email"
              required
              {...form.getInputProps('identifier')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              {...form.getInputProps('password')}
            />
          </Stack>

          {loginError && (
            <Text color="red" size="sm" mt="sm">
              {(loginError as any)?.response?.data?.message || 'Login failed. Please check your credentials.'}
            </Text>
          )}

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs">
              Forgot password?
            </Anchor>
            <Button type="submit" loading={isLoggingIn} fullWidth mt="xl">
              Sign in
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
