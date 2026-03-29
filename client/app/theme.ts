import { MantineColorsTuple, createTheme } from '@mantine/core'

// Cobalt blue palette generated around #00167a
const cobaltBlue: MantineColorsTuple = [
  '#e6e8f5', // 0 - lightest
  '#c0c5e8',
  '#99a1da',
  '#727dcd',
  '#4b59bf',
  '#2435b2',
  '#1a2a9e',
  '#10208a',
  '#061576',
  '#00167a', // 9 - primary cobalt blue
]

export const theme = createTheme({
  /** Primary color used for interactive elements, highlights, etc. */
  primaryColor: 'cobaltBlue',

  colors: {
    cobaltBlue,
  },

  /** White background throughout the app */
  white: '#ffffff',

  /** Default background color */
  defaultRadius: 'md',

  components: {
    AppShell: {
      styles: {
        root: { backgroundColor: '#ffffff' },
        header: { backgroundColor: '#ffffff', borderBottom: '1px solid #e6e8f5' },
        main: { backgroundColor: '#ffffff' },
      },
    },
  },

  /** Override global CSS variables */
  other: {
    primaryBg: '#ffffff',
    secondaryText: '#00167a',
  },
})
