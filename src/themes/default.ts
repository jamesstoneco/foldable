export const defaultTheme = {
  colors: {
    primary: {
      DEFAULT: 'hsl(222.2 47.4% 11.2%)',
      foreground: 'hsl(210 40% 98%)',
    },
    secondary: {
      DEFAULT: 'hsl(210 40% 96.1%)',
      foreground: 'hsl(222.2 47.4% 11.2%)',
    },
    accent: {
      DEFAULT: 'hsl(210 40% 90%)',
      foreground: 'hsl(222.2 47.4% 11.2%)',
    },
    destructive: {
      DEFAULT: 'hsl(0 84.2% 60.2%)',
      foreground: 'hsl(210 40% 98%)',
    },
    muted: {
      DEFAULT: 'hsl(210 40% 96.1%)',
      foreground: 'hsl(215.4 16.3% 46.9%)',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '0.2rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof defaultTheme;
