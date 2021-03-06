const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
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
        'h3': ['2rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0rem',
        }],
        'h4': ['1.75rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0875rem',
        }],
        'h5': ['1.25rem', {
          lineHeight: '1.625rem',
          letterSpacing: '0.3125rem',
        }],
        'body1': ['1rem', {
          lineHeight: '1.625rem',
          letterSpacing: '0rem',
        }],
        'body2': ['0.875rem', {
          lineHeight: '0.875rem',
          letterSpacing: '0.125rem',
        }],
        'caption': ['0.9375rem', {
          lineHeight: '0.875rem',
          letterSpacing: '0.0625rem',
        }],
      },
      colors: {
        'peach': '#E7816B',
        'peach-light': '#FFAD9B',
        'peach-lighter': '#FDF3F0',
        'dark': '#1D1C1E',
        'grey-dark': '#333136',
        'grey-light': '#F1F3F5',
      },
      container: {
        screens: {
          '2xl': "1280px",
        }
      },
      backgroundImage: theme => ({
        'home-header-bg': "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        'footer-contact-bg': "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
      }),
      backgroundPosition: {
        '-left-86-top-48': 'left -96px top -48px'
      },
      backgroundSize: {
        'unset': 'unset',
      },
      height: {
        '120': '30rem'
      },
      width: {
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
