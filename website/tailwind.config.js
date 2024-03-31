/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx',
  ],
  theme: {
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 320px))',
      2: 'repeat(2, minmax(0, 360px))',
      '2-big': 'repeat(2, minmax(0, 540px))',
      3: 'repeat(3, minmax(0, 360px))',
    },
    extend: {
      animation: {
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        grid: 'grid 15s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      backgroundColor: {
        'layout-main': '#0A0A0A',
      },
      borderColor: {
        border: 'hsl(0, 0%, 12%)',
      },
      colors: {
        'gray-main': '#A1A1A1',
        'white-main': '#D8D8DA',
      },
      gridTemplateRows: {
        '3-fit': 'repeat(3, fit-content)',
      },
      fontFamily: {
        overused: 'Overused Grotesk, sans-serif',
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': {
            rotate: '0deg',
          },
          '15%, 35%': {
            rotate: '90deg',
          },
          '65%, 85%': {
            rotate: '270deg',
          },
          '100%': {
            rotate: '360deg',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],

  darkMode: 'class',
};
