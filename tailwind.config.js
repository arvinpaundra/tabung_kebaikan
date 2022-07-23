/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softBlue: '#F7FAFC',
        gsc: '#067B97',
        secondary: '#E7EAF5',
        darkBlue: '#0C145A',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: false,
  },
};
