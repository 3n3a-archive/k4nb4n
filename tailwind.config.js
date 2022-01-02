// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      './src/index.html',
      './src/**/*.js'
      ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
      container: {
        center: true,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        green: colors.green,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        red: colors.red,

        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#evebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }