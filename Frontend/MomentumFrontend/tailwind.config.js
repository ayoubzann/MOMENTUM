/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#150c01',
        'background': '#fefaf3',
        'primary': '#f49121',
        'secondary': '#75f8b5',
        'accent': '#40d9f6',
      },
    },
  },
  plugins: [],


}