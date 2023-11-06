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
  plugins: [],
//plugin()
}

