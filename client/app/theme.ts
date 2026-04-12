import { MantineColorsTuple, createTheme, rem } from '@mantine/core'

const cobaltBlue: MantineColorsTuple = [
  '#eef0fb',
  '#d5d9f3',
  '#a9b2e8',
  '#7b88dc',
  '#5463d2',
  '#3b4dcc',
  '#2f42ca',
  '#2234b3',
  '#192ea0',
  '#00167a',
]

export const theme = createTheme({
  primaryColor: 'cobaltBlue',
  colors: { cobaltBlue },
  white: '#ffffff',
  defaultRadius: 'md',
  fontFamily: 'DM Sans, sans-serif',
  headings: {
    fontFamily: 'DM Serif Display, serif',
    fontWeight: '400',
  },
  fontSizes: {
    xs: rem(11),
    sm: rem(13),
    md: rem(15),
    lg: rem(17),
    xl: rem(20),
  },
  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
  },
  shadows: {
    xs: '0 1px 3px rgba(15,14,11,0.06)',
    sm: '0 2px 8px rgba(15,14,11,0.08)',
    md: '0 4px 16px rgba(15,14,11,0.08), 0 2px 6px rgba(15,14,11,0.05)',
    lg: '0 12px 40px rgba(15,14,11,0.12), 0 4px 12px rgba(15,14,11,0.06)',
    xl: '0 24px 64px rgba(15,14,11,0.14)',
  },
  components: {
    AppShell: {
      styles: {
        root: { backgroundColor: '#f8f7f4' },
        header: {
          backgroundColor: 'rgba(248,247,244,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2dfd8',
        },
        navbar: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2dfd8',
        },
        main: { backgroundColor: '#f8f7f4' },
      },
    },
    Button: {
      defaultProps: { radius: 'md' },
      styles: {
        root: {
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          transition: 'all 0.15s ease',
        },
      },
    },
    Card: {
      defaultProps: { radius: 'md', shadow: 'sm' },
      styles: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e2dfd8',
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    Badge: {
      defaultProps: { radius: 'sm' },
      styles: {
        root: {
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          fontSize: rem(10),
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          fontFamily: 'DM Sans, sans-serif',
          backgroundColor: '#f8f7f4',
          border: '1.5px solid #e2dfd8',
          '&:focus': { borderColor: '#00167a', backgroundColor: '#ffffff' },
        },
        label: { fontWeight: 600, marginBottom: rem(6) },
      },
    },
    PasswordInput: {
      styles: {
        input: {
          fontFamily: 'DM Sans, sans-serif',
          backgroundColor: '#f8f7f4',
          border: '1.5px solid #e2dfd8',
          '&:focus': { borderColor: '#00167a', backgroundColor: '#ffffff' },
        },
        label: { fontWeight: 600, marginBottom: rem(6) },
      },
    },
    Select: {
      styles: {
        input: {
          backgroundColor: '#f8f7f4',
          border: '1.5px solid #e2dfd8',
        },
        label: { fontWeight: 600, marginBottom: rem(6) },
      },
    },
    NumberInput: {
      styles: {
        input: {
          backgroundColor: '#f8f7f4',
          border: '1.5px solid #e2dfd8',
        },
        label: { fontWeight: 600, marginBottom: rem(6) },
      },
    },
    Textarea: {
      styles: {
        input: {
          backgroundColor: '#f8f7f4',
          border: '1.5px solid #e2dfd8',
          fontFamily: 'DM Sans, sans-serif',
        },
        label: { fontWeight: 600, marginBottom: rem(6) },
      },
    },
    Divider: {
      styles: { root: { borderColor: '#e2dfd8' } },
    },
    NavLink: {
      styles: {
        root: { borderRadius: rem(8), fontWeight: 500 },
      },
    },
  },
  other: {
    primaryBg: '#f8f7f4',
    secondaryText: '#00167a',
  },
})
