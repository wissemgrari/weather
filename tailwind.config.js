/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0C1E',
        lightBlue: '#16182A',
        primary: '#0095FF',
      },
    },
  },
  plugins: [],
};
