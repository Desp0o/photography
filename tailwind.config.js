/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'0px', 'max':'768px'},
        'xl': {'min':'1400px', 'max':''}
      },
      boxShadow: {
        'myShadow': '-25px 25px 65px #0d0d0d, 25px -25px 65px #353535',         
      }
    },
  },
  plugins: [],
}
