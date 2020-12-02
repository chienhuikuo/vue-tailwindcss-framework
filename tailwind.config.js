const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html','./src/**/*.vue','./src/**/*.jsx',]
  },
  presets: [
    require('./tailwind-preset.js')
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
}
