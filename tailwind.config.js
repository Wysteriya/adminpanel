/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'fold':['Foldit', 'cursive'],
        'rubik':['Rubik', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

