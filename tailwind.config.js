/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#e6f0ff',
          200: '#c8ddff',
          300: '#a8c7ff',
          400: '#7ea8ff',
          500: '#5a87ff',
          600: '#3c6bff',
          700: '#2f54d6',
          800: '#2846ad',
          900: '#223d8d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}