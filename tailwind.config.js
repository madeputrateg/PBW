/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    center: true,
    container: {
      padding: '20rem',
    },

    fontFamily: {
      Pops: ["Poppins", "cursive"],
    },
    fontWeight: {
      light: '300',
      normal: '600',
      bold: '800',
    },
    extend: {},
  },
  plugins: [],
}