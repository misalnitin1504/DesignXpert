/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c4a6e',
          light: '#1e3a5f',
        },
        secondary: {
          DEFAULT: '#e0f2fe',
          light: '#f0f9ff',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
        },
        yellow: {
          DEFAULT: '#7dd3fc',
          light: '#bae6fd',
        },
        concrete: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
