/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        'slide-up': {
          '0%': {transform: 'translateY(10px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        'slide-down': {
          '0%': {transform: 'translateY(-100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.9s ease-out forwards',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['Josefin', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1E1E2F, #2A2A3C, #1E1E2F)',
      }
    },
  },
  plugins: [],
}

