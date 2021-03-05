const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      ...screens
    },
    fontFamily: {
      sans: ['Jost'],
      serif: ['sans-serif']
    },
    extend: {
      container: {
        screens: {
          '2xl': "1280px",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
