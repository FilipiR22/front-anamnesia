/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Inclui todos os arquivos relevantes na pasta src
  theme: {
    extend: {
      fontSize:{
        '14-size':'14px'
      },
      padding:{
        'quatro': '16px'
      },
      spacing: {
        '72': '72px',
        '80': '80px',
        '104': '104px',
      },
      colors: {
        primary: {
          white:'rgba(255, 255, 255, 1)',
          main: '#256D99',
          light: '#D5E1EB',
          dark: '#134A6D',
        },
        secondary: {
          main: '#F39C1C',
          light: '#E8E1D5',
          dark: '#DA8C25',
        },
        success: {
          main: '#26D99',
          light: '#D0EBD5',
          dark: '#16835C',
        },
        error: {
          main: '#C53A3A',
          light: '#EBD5D5',
          dark: '#962E2E',
        },
        warning: {
          main: '#FFB031',
          light: '#FFF4D7',
          dark: '#F3A043',
        },
        gray: {
          100: '#F4F4F5',
          200: '#BEBEC1',
          300: '#7C7C83',
          400: 'rgba(99, 99, 105, 1)',
          500: '#848583',
          600: '#313135',
          700: '#1E1E20',
          800: '#0C0C0E',
          900: 'rgba(4, 4, 4, 1)',
        },
      },
      screens: {
        'sm-408': '408px',
      },
      textDecorationThickness: {
        strikethrough: 'strikethrough',
      }
    },
  },
  plugins: [],
}