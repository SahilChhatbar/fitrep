import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import AppLayout from '@/components/layout/AppLayout'
import './globals.css'
import { theme } from './theme'
import { QueryProvider } from '@/provider/query-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme}>
          <QueryProvider>
            <AppLayout>{children}</AppLayout>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
