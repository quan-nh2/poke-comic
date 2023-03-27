/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Roboto Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
    },
    container: {
      padding: {
        DEFAULT: '16px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
}
