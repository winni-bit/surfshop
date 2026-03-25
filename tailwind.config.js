/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          warm: 'var(--color-bg-warm)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
          subtle: 'var(--color-accent-subtle)',
        },
        surf: {
          ocean: 'var(--color-surf-ocean)',
          deep: 'var(--color-surf-deep)',
          coral: 'var(--color-surf-coral)',
          sand: 'var(--color-surf-sand)',
          kelp: 'var(--color-surf-kelp)',
          sunset: 'var(--color-surf-sunset)',
          foam: 'var(--color-surf-foam)',
          slate: 'var(--color-surf-slate)',
        },
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'section': 'var(--section-padding)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-gentle': 'float-gentle 7s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s var(--ease-smooth) both',
        'fade-in': 'fade-in 0.6s var(--ease-smooth) both',
        'slide-in-left': 'slide-in-left 0.8s var(--ease-smooth) both',
        'slide-in-right': 'slide-in-right 0.8s var(--ease-smooth) both',
        'reveal': 'reveal 1s var(--ease-smooth) both',
        'scale-in': 'scale-in 0.6s var(--ease-smooth) both',
        'parallax-drift': 'parallax-drift 12s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'word-reveal': 'word-reveal 0.8s var(--ease-smooth) both',
        'line-reveal': 'line-reveal 0.8s var(--ease-smooth) both',
      },
      transitionTimingFunction: {
        'smooth': 'var(--ease-smooth)',
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'dramatic': 'var(--duration-dramatic)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(26, 23, 20, 0.04), 0 4px 12px rgba(26, 23, 20, 0.06)',
        'card-hover': '0 4px 12px rgba(26, 23, 20, 0.08), 0 16px 40px rgba(26, 23, 20, 0.1)',
        'elevated': '0 8px 30px rgba(26, 23, 20, 0.08), 0 2px 8px rgba(26, 23, 20, 0.04)',
        'nav': '0 1px 0 rgba(26, 23, 20, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
