/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        acai: {
          950: '#1E0A2E',
          900: '#2D0F45',
          800: '#3D1A5C',
          700: '#5B2A86',
          400: '#B48ADB',
          100: '#EADCF7',
        },
        'lime-brand': {
          DEFAULT: '#8DD63A',
          dark: '#6BB023',
        },
        leaf: '#3E8E2F',
        cream: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        chunky: '0 4px 0 #6BB023',
        'chunky-acai': '0 4px 0 #1E0A2E',
        glow: '0 0 60px 10px rgba(141, 214, 58, 0.25)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
