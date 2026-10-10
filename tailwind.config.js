/** Colours match the AB Sales app's dark theme (../AB-sales/src/index.css). */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0C',
        surface: '#121214',
        raised: '#18181B',
        line: '#232326',
        ink: '#EDEDEF',
        muted: '#8B8B92',
        lime: { DEFAULT: '#C5F04A', hover: '#D3F57A' },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
