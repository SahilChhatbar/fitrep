'use client'

import { useEffect } from 'react'
import { useAuth } from '@/features/auth/useAuth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getMeQuery, token, logout } = useAuth()

  useEffect(() => {
    if (token && getMeQuery.isError) {
      // If token exists but fetch fails (e.g., token expired), logout
      logout()
    }
  }, [getMeQuery.isError, token, logout])

  return <>{children}</>
}
