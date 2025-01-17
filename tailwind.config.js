/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Aquire': ['Aquire', 'sans-serif'],
        'DmSans': ['DM Sans', 'sans-serif'],
        'Ysabeau': ['Ysabeau SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
