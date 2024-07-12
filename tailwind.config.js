/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0'
      },
    },
    extend: {
      fontFamily: {
        'poppins': ['poppins']
      },
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0'
      },
    },
  },
  plugins: [],
}