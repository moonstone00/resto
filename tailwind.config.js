/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sixtyFour: 'Sixtyfour',
      },
      colors: {
        'primaryColor': '#006563',
        'secondaryColor': '#CEAB7A'
      },
      screens: {
        'tablet': '568px'
      }
    },
  },
  plugins: [],
}