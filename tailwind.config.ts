import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bdr': {
          border: '1px dotted red',
        },
        '.bdb': {
          border: '1px dotted blue',
        },
        '.bdt': {
          'border-width': '2px',
        },
        '.my-shadow': {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
      })
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16',
        },
      },
    },
  },
}
