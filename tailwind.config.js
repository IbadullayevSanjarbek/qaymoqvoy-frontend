/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E4',
        butter: '#FDEBB8',
        mustard: { DEFAULT: '#E0A526', dark: '#C78D12' },
        choco: { DEFAULT: '#4A2C1A', soft: '#7A5A45' },
        taupe: '#8C7565',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px -8px rgba(74, 44, 26, 0.18)',
      },
    },
  },
  plugins: [],
}
