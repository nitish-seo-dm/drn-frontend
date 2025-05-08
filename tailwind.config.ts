import animatePlugin from 'tailwindcss-animate'

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'glass-card',
    'bg-background',
    'text-foreground',
    'text-muted-foreground',
    'dark',
    'backdrop-blur-sm',
    'bg-glass-gradient',
  ],
  theme: {
    extend: {
      // your existing theme stays unchanged...
    },
  },
  plugins: [animatePlugin],
}

export default config
