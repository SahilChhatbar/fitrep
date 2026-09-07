'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/features/auth/useAuth'

const PUBLIC_ROUTES = ['/', '/diets', '/workouts']
const AUTH_ROUTES = ['/auth/login', '/auth/signup']

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getMeQuery, token, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (token && getMeQuery.isError) {
      // Token expired or invalid — logout and redirect
      logout()
    }
  }, [getMeQuery.isError, token, logout])

  return <>{children}</>
}
