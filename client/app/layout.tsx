import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import AppLayout from '@/components/layout/AppLayout'
import './globals.css'
import { theme } from './theme'
import { QueryProvider } from '@/provider/query-provider'
import { AuthProvider } from '@/provider/auth-provider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'FitRep - Fitness, tracked.',
  description: 'Your personal fitness tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <QueryProvider>
            <AuthProvider>
              <AppLayout>{children}</AppLayout>
            </AuthProvider>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
