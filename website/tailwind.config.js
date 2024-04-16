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
        'ds-focus': 'hsl(var(--ds-blue-900, hsl(210 100% 66%)))',
        'ds-amber-100': 'hsl(var(--ds-amber-100))',
        'ds-amber-200': 'hsl(var(--ds-amber-200))',
        'ds-amber-300': 'hsl(var(--ds-amber-300))',
        'ds-amber-400': 'hsl(var(--ds-amber-400))',
        'ds-amber-500': 'hsl(var(--ds-amber-500))',
        'ds-amber-600': 'hsl(var(--ds-amber-600))',
        'ds-amber-700': 'hsl(var(--ds-amber-700))',
        'ds-amber-800': 'hsl(var(--ds-amber-800))',
        'ds-amber-900': 'hsl(var(--ds-amber-900))',
        'ds-amber-1000': 'hsl(var(--ds-amber-1000))',
        'ds-background-100': 'hsl(var(--ds-background-100))',
        'ds-background-200': 'hsl(var(--ds-background-200))',
        'ds-blue-100': 'hsl(var(--ds-blue-100))',
        'ds-blue-200': 'hsl(var(--ds-blue-200))',
        'ds-blue-300': 'hsl(var(--ds-blue-300))',
        'ds-blue-400': 'hsl(var(--ds-blue-400))',
        'ds-blue-500': 'hsl(var(--ds-blue-500))',
        'ds-blue-600': 'hsl(var(--ds-blue-600))',
        'ds-blue-700': 'hsl(var(--ds-blue-700))',
        'ds-blue-800': 'hsl(var(--ds-blue-800))',
        'ds-blue-900': 'hsl(var(--ds-blue-900))',
        'ds-blue-1000': 'hsl(var(--ds-blue-1000))',
        'ds-focus-border':
          'hsl(var(--ds-gray-alpha-700, hsl(0 0 100% / 0.54)))',
        'ds-gray-100': 'hsl(var(--ds-gray-100))',
        'ds-gray-200': 'hsl(var(--ds-gray-200))',
        'ds-gray-300': 'hsl(var(--ds-gray-300))',
        'ds-gray-400': 'hsl(var(--ds-gray-400))',
        'ds-gray-500': 'hsl(var(--ds-gray-500))',
        'ds-gray-600': 'hsl(var(--ds-gray-600))',
        'ds-gray-700': 'hsl(var(--ds-gray-700))',
        'ds-gray-800': 'hsl(var(--ds-gray-800))',
        'ds-gray-900': 'hsl(var(--ds-gray-900))',
        'ds-gray-1000': 'hsl(var(--ds-gray-1000))',
        'ds-gray-alpha-100': 'hsl(var(--ds-gray-alpha-100))',
        'ds-gray-alpha-200': 'hsl(var(--ds-gray-alpha-200))',
        'ds-gray-alpha-300': 'hsl(var(--ds-gray-alpha-300))',
        'ds-gray-alpha-400': 'hsl(var(--ds-gray-alpha-400))',
        'ds-gray-alpha-500': 'hsl(var(--ds-gray-alpha-500))',
        'ds-gray-alpha-600': 'hsl(var(--ds-gray-alpha-600))',
        'ds-gray-alpha-700': 'hsl(var(--ds-gray-alpha-700))',
        'ds-gray-alpha-800': 'hsl(var(--ds-gray-alpha-800))',
        'ds-gray-alpha-900': 'hsl(var(--ds-gray-alpha-900))',
        'ds-gray-alpha-1000': 'hsl(var(--ds-gray-alpha-1000))',
        'ds-green-100': 'hsl(var(--ds-green-100))',
        'ds-green-200': 'hsl(var(--ds-green-200))',
        'ds-green-300': 'hsl(var(--ds-green-300))',
        'ds-green-400': 'hsl(var(--ds-green-400))',
        'ds-green-500': 'hsl(var(--ds-green-500))',
        'ds-green-600': 'hsl(var(--ds-green-600))',
        'ds-green-700': 'hsl(var(--ds-green-700))',
        'ds-green-800': 'hsl(var(--ds-green-800))',
        'ds-green-900': 'hsl(var(--ds-green-900))',
        'ds-green-1000': 'hsl(var(--ds-green-1000))',
        'ds-pink-100': 'hsl(var(--ds-pink-100))',
        'ds-pink-200': 'hsl(var(--ds-pink-200))',
        'ds-pink-300': 'hsl(var(--ds-pink-300))',
        'ds-pink-400': 'hsl(var(--ds-pink-400))',
        'ds-pink-500': 'hsl(var(--ds-pink-500))',
        'ds-pink-600': 'hsl(var(--ds-pink-600))',
        'ds-pink-700': 'hsl(var(--ds-pink-700))',
        'ds-pink-800': 'hsl(var(--ds-pink-800))',
        'ds-pink-900': 'hsl(var(--ds-pink-900))',
        'ds-pink-1000': 'hsl(var(--ds-pink-1000))',
        'ds-purple-100': 'hsl(var(--ds-purple-100)',
        'ds-purple-200': 'hsl(var(--ds-purple-200)',
        'ds-purple-300': 'hsl(var(--ds-purple-300)',
        'ds-purple-400': 'hsl(var(--ds-purple-400)',
        'ds-purple-500': 'hsl(var(--ds-purple-500)',
        'ds-purple-600': 'hsl(var(--ds-purple-600)',
        'ds-purple-700': 'hsl(var(--ds-purple-700)',
        'ds-purple-800': 'hsl(var(--ds-purple-800)',
        'ds-purple-900': 'hsl(var(--ds-purple-900)',
        'ds-purple-1000': 'hsl(var(--ds-purple-1000)',
        'ds-red-100': 'hsl(var(--ds-red-100))',
        'ds-red-200': 'hsl(var(--ds-red-200))',
        'ds-red-300': 'hsl(var(--ds-red-300))',
        'ds-red-400': 'hsl(var(--ds-red-400))',
        'ds-red-500': 'hsl(var(--ds-red-500))',
        'ds-red-600': 'hsl(var(--ds-red-600))',
        'ds-red-700': 'hsl(var(--ds-red-700))',
        'ds-red-800': 'hsl(var(--ds-red-800))',
        'ds-red-900': 'hsl(var(--ds-red-900))',
        'ds-red-1000': 'hsl(var(--ds-red-1000))',
        'ds-teal-100': 'hsl(var(--ds-teal-100))',
        'ds-teal-200': 'hsl(var(--ds-teal-200))',
        'ds-teal-300': 'hsl(var(--ds-teal-300))',
        'ds-teal-400': 'hsl(var(--ds-teal-400))',
        'ds-teal-500': 'hsl(var(--ds-teal-500))',
        'ds-teal-600': 'hsl(var(--ds-teal-600))',
        'ds-teal-700': 'hsl(var(--ds-teal-700))',
        'ds-teal-800': 'hsl(var(--ds-teal-800))',
        'ds-teal-900': 'hsl(var(--ds-teal-900))',
        'ds-teal-1000': 'hsl(var(--ds-teal-1000))',
        'geist-color-link-color':
          'hsl(var(--geist-color-success-gesit-success-ligh, hsl(212 100% 60%)))',
        'geist-color-marketing-gray':
          'hsl(var(--geist-color-primary-accents-1, hsl(0 0 7%)))',
        'geist-color-cyan-gesit-cyan':
          'hsl(var(--geist-color-cyan-gesit-cyan))',
        'geist-color-cyan-gesit-cyan-dark':
          'hsl(var(--geist-color-cyan-gesit-cyan-dark))',
        'geist-color-cyan-gesit-cyan-ligh':
          'hsl(var(--geist-color-cyan-gesit-cyan-light))',
        'geist-color-cyan-gesit-cyan-lighter':
          'hsl(var(--geist-color-cyan-gesit-cyan-lighter))',
        'geist-color-error-gesit-error':
          'hsl(var(--geist-color-error-gesit-error))',
        'geist-color-error-gesit-error-dark':
          'hsl(var(--geist-color-error-gesit-error-dark))',
        'geist-color-error-gesit-error-light':
          'hsl(var(--geist-color-error-gesit-error-light))',
        'geist-color-error-gesit-error-lighter':
          'hsl(var(--geist-color-error-gesit-error-lighter))',
        'geist-color-highlight-gesit-highlight-magenta':
          'hsl(var(--geist-color-highlight-gesit-highlight-magenta))',
        'geist-color-highlight-gesit-highlight-pink':
          'hsl(var(--geist-color-highlight-gesit-highlight-pink))',
        'geist-color-highlight-gesit-highlight-purple':
          'hsl(var(--geist-color-highlight-gesit-highlight-purple))',
        'geist-color-highlight-gesit-highlight-yellow':
          'hsl(var(--geist-color-highlight-gesit-highlight-magenta))',
        'geist-color-primary-accents-1':
          'hsl(var(--geist-color-primary-accents-1))',
        'geist-color-primary-accents-2':
          'hsl(var(--geist-color-primary-accents-2))',
        'geist-color-primary-accents-3':
          'hsl(var(--geist-color-primary-accents-3))',
        'geist-color-primary-accents-4':
          'hsl(var(--geist-color-primary-accents-4))',
        'geist-color-primary-accents-5':
          'hsl(var(--geist-color-primary-accents-5))',
        'geist-color-primary-accents-6':
          'hsl(var(--geist-color-primary-accents-6))',
        'geist-color-primary-accents-7':
          'hsl(var(--geist-color-primary-accents-7))',
        'geist-color-primary-accents-8':
          'hsl(var(--geist-color-primary-accents-8))',
        'geist-color-primary-geist-background':
          'hsl(var(--geist-color-primary-geist-background))',
        'geist-color-primary-geist-foreground':
          'hsl(var(--geist-color-primary-geist-foreground))',
        'geist-color-secondary-geist-secondary':
          'hsl(var(--geist-color-primary-accents-5, hsl(0 0 53%)))',
        'geist-color-secondary-geist-secondary-dark':
          'hsl(var(--geist-color-primary-accents-7, hsl(0 0 92%)))',
        'geist-color-secondary-geist-secondary-lighter':
          'hsl(var(--geist-color-primary-accents-2, hsl(0 0 20%)))',
        'geist-color-secondary-gesit-secondary-light':
          'hsl(var(--geist-color-primary-accents-3, hsl(0 0 27%)))',
        'geist-color-success-gesit-success':
          'hsl(var(--geist-color-success-gesit-success))',
        'geist-color-success-gesit-success-dark':
          'hsl(var(--geist-color-success-gesit-success-dark))',
        'geist-color-success-gesit-success-light':
          'hsl(var(--geist-color-success-gesit-success-light))',
        'geist-color-success-gesit-success-lighter':
          'hsl(var(--geist-color-success-gesit-success-lighter))',
        'geist-color-violet-geist-violet':
          'hsl(var(--geist-color-violet-geist-violet))',
        'geist-color-violet-geist-violet-dark':
          'hsl(var(--geist-color-violet-geist-violet-dark))',
        'geist-color-violet-geist-violet-light':
          'hsl(var(--geist-color-violet-geist-violet-light))',
        'geist-color-violet-geist-violet-lighter':
          'hsl(var(--geist-color-violet-geist-violet-lighter))',
        'geist-color-warning-geist-warning':
          'hsl(var(--geist-color-warning-geist-warning))',
        'geist-color-warning-geist-warning-dark':
          'hsl(var(--geist-color-warning-geist-warning-dark))',
        'geist-color-warning-gesit-warning-light':
          'hsl(var(--geist-color-warning-gesit-warning-light))',
        'geist-color-warning-gesit-warning-lighter':
          'hsl(var(--geist-color-warning-gesit-warning-lighter))',
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
