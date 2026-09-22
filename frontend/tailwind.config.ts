import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--surface-card)',
        muted: 'var(--surface-muted)',
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        border: {
          DEFAULT: 'var(--border-subtle)',
          subtle: 'var(--border-subtle)',
          contrast: 'var(--border-contrast)',
          active: 'var(--border-active)',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
          violet: '#8b5cf6',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.04em' }],
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        sm: ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '-0.005em' }],
        base: ['0.875rem', { lineHeight: '1.375rem', letterSpacing: '-0.01em' }],
        md: ['0.9375rem', { lineHeight: '1.5rem', letterSpacing: '-0.015em' }],
        lg: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '-0.02em' }],
        xl: ['1.25rem', { lineHeight: '1.625rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '1.75rem', letterSpacing: '-0.03em' }],
        '3xl': ['1.875rem', { lineHeight: '2rem', letterSpacing: '-0.035em' }],
        '4xl': ['2.25rem', { lineHeight: '2.375rem', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.04em',
        widest: '0.08em',
      },
      boxShadow: {
        'subtle-border': '0 0 0 1px var(--border-subtle)',
        'contrast-border': '0 0 0 1px var(--border-contrast)',
        'panel': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px var(--border-subtle)',
        'panel-elevated': '0 8px 24px -4px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--border-contrast)',
      },
    },
  },
  plugins: [],
};

export default config;
