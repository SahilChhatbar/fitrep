'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Center, Loader } from '@mantine/core'
import { useAuthStore } from '@/features/auth/authStore'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token)
  const router = useRouter()
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHasHydrated(true)
    })
    setHasHydrated(useAuthStore.persist.hasHydrated())
    return () => unsub()
  }, [])

  useEffect(() => {
    if (hasHydrated && token) {
      router.replace('/dashboard')
    }
  }, [hasHydrated, token, router])

  // While redirecting or hydrating, show loader (avoids flash of login UI)
  if (!hasHydrated || token) {
    return (
      <Center h="100vh">
        <Loader size="lg" color="cobaltBlue" />
      </Center>
    )
  }

  return <>{children}</>
}
