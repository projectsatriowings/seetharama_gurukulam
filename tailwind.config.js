/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#E8871E', deep: '#C96A0B', soft: '#FDEEDD' },
        maroon: { DEFAULT: '#6B1D1D', dark: '#4A1212', surface: '#F6ECE4' },
        cream: '#FBF5E9',
        ivory: '#FFFDF8',
        gold: { DEFAULT: '#C9A24B', soft: '#E9D8A6' },
        ink: { DEFAULT: '#2B1A14', soft: '#5B4A40', muted: '#7A685D' },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['var(--font-head)'],
        sans: ['var(--font-body)'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        warm: '0 10px 30px rgba(107, 29, 29, 0.10)',
        card: '0 6px 24px rgba(43, 26, 20, 0.08)',
        header: '0 4px 20px rgba(43, 26, 20, 0.06)',
        elevated: '0 12px 32px rgba(107, 29, 29, 0.09), 0 2px 6px rgba(43, 26, 20, 0.04)',
      },
      borderRadius: { card: '1.125rem' },
    },
  },
  plugins: [],
}
