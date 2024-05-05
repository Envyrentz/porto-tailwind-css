/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        thic: '#2C3333',
        primary: '#395B64',
        secondary: '#A5C9CA',
        desc: '#94A3B8',
        light: '#E7F6F2',
      },
      screens: {
        xl: '1024px',
        '2xl': '1320',
      },
    },
  },
  plugins: [],
};
