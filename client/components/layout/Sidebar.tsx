import React from 'react'
import { Stack, Text } from '@mantine/core'

const Sidebar = (): React.JSX.Element => {
  return (
    <>
      <Stack>
        <Text>Dashboard</Text>
        <Text>Workouts</Text>
        <Text>Diet</Text>
      </Stack>
    </>
  )
}

export default Sidebar
