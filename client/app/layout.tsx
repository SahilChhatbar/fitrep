import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { theme } from './theme'
import {
  ColorSchemeScript,
  MantineProvider,
} from '@mantine/core'
import '@mantine/core/styles.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FitRep - Fitness tracked.',
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
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  )
}

