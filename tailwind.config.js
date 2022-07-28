/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#F7FAFC',
        gsc: '#067B97',
        'dark-blue': '#0C145A',
        'light-grey': '#E7EAF5',
        'smoke-grey': '#7E8CAC',
        happy: '#36D399',
        anger: '#F87272',
      },
    },
  },
};
