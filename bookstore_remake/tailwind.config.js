/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wind: ['"WindSong"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}