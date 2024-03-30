/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#2E1437',
        'custom-gray': '#948E99',
      },
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'dongle': ['Dongle', 'sans-serif'],
      },
      fontWeight: {
        'custom': 300, // Replace '<weight>' with your desired weight value
      },
    },
  },
  plugins: [],
}

