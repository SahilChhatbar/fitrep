'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Center, Loader } from '@mantine/core'
import { useAuthStore } from '@/features/auth/authStore'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token)
  const router = useRouter()

  useEffect(() => {
    if (token) {
      router.replace('/')
    }
  }, [token, router])

  // While redirecting, show nothing (avoids flash of login UI)
  if (token) {
    return (
      <Center h="100vh">
        <Loader size="lg" color="cobaltBlue" />
      </Center>
    )
  }

  return <>{children}</>
}
