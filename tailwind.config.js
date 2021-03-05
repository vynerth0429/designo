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
      fontSize: {
        'h1': ['3rem', {
          lineHeight: '3rem',
          letterSpacing: '0rem',
        }],
        'h2': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '0.125rem',
        }],
        'h3': ['1.25rem', {
          lineHeight: '1.625rem',
          letterSpacing: '-0.8px',
        }],
        'h4': ['12px', {
          lineHeight: '15px',
          letterSpacing: '0.3125rem',
        }],
        'body1': ['1rem', {
          lineHeight: '1.625rem',
          letterSpacing: '0rem',
        }],
      },
      colors: {
        'peach': '#E7816B',
        'peach-light': '#FFAD9B',
        'dark': '#1D1C1E',
        'grey-dark': '#333136',
        'grey-light': '#F1F3F5',
      },
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
