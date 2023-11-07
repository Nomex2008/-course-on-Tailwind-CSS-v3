const { hover } = require('@testing-library/user-event/dist/hover')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //primary:'red',
      transitionTimingFunction:{
        DEFAULT:'ease-in-out',
      },
      transitionDuration:{
        DEFAULT:'300ms',
      },
      keyframes:{
        fadeIn: {
          from: {
            opacity:0
          },
          to: {
            opacity:1
          },
        },
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.card': {
          backgroundColor:'rgb(51, 255, 255)',
          opacity:'1',

          '&:hover':{
            backgroundColor:'rgb(2, 68, 68)',
          }
        }
      })
    })
  ]
}

