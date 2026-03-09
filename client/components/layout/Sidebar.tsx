import React from 'react'
import { Stack, Text } from '@mantine/core'
import Link from 'next/link'

const Sidebar = (): React.JSX.Element => {
  return (
    <>
      <Stack>
        <Link href="/dashboard"><Text>Dashboard</Text></Link>
        <Link href="/workouts"><Text>Workouts</Text></Link>
        <Link href="/diet"><Text>Diet</Text></Link>
      </Stack>
    </>
  )
}

export default Sidebar
