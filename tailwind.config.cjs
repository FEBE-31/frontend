/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '25': '24%',
      },
      screens: {
        '2xl': '1420px',
      },
      colors: {
        'orens-color': '#F18700',
        'main-color': '#2464AB',
        'second-color': '#3DA5DA',
        'alert-color':'#AB2424',
        'succes-color':'#27AB24',
        'text-first' : '#A3A3A3',
      },
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}