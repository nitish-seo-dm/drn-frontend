import animatePlugin from 'tailwindcss-animate'

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'glass-card',              // Optional if still using in className (but not required)
    'backdrop-blur-sm', // ✅ required
    'rounded-2xl',
    'p-4',
    'text-foreground',
    'text-muted-foreground',
    'bg-background',
    'border',
    'shadow-lg',
    'dark',
  ],
  theme: {
    extend: {
      colors: {
        drn: {
          blue: '#1e3a8a',
          green: '#10b981',
          white: '#f9fafb',
          black: '#0f172a',
        },
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        card: 'oklch(1 0 0)',
        'card-foreground': 'oklch(0.145 0 0)',
        popover: 'oklch(1 0 0)',
        'popover-foreground': 'oklch(0.145 0 0)',
        primary: 'oklch(0.205 0 0)',
        'primary-foreground': 'oklch(0.985 0 0)',
        secondary: 'oklch(0.97 0 0)',
        'secondary-foreground': 'oklch(0.205 0 0)',
        muted: 'oklch(0.97 0 0)',
        'muted-foreground': 'oklch(0.556 0 0)',
        accent: 'oklch(0.97 0 0)',
        'accent-foreground': 'oklch(0.205 0 0)',
        destructive: 'oklch(0.577 0.245 27.325)',
        border: 'oklch(0.922 0 0)',
        input: 'oklch(0.922 0 0)',
        ring: 'oklch(0.708 0 0)',
        sidebar: 'oklch(0.985 0 0)',
        'sidebar-foreground': 'oklch(0.145 0 0)',
      },
      borderRadius: {
        xl: '1rem',
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [animatePlugin],
}

export default config
