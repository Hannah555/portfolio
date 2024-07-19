/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'secondary': '#2ca9bc',
      }
    },
  },
  plugins: [],
}

