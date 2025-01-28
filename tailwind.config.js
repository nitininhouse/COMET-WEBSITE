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
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.3s ease-out',
        slideLeft: 'slideLeft 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
