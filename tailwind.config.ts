import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-blue':   '#06ffa5',   // electric mint (primary)
        'accent-purple': '#f72585',   // hot pink (secondary)
        'bg-primary':    '#08080f',
        'bg-card':       '#0f0f1e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
