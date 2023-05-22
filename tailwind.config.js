/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          'marine': 'hsl(213, 96%, 18%)',
          'purplish': 'hsl(243, 100%, 62%)',
          'pastel': 'hsl(228, 100%, 84%)',
          'light': 'hsl(206, 94%, 87%)',
        },
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'gray': {
          'cool': 'hsl(231, 11%, 63%)',
          'light': 'hsl(229, 24%, 87%)',
        },
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabester': 'hsl(231, 100%, 99%)',
      },
      fontFamily: {
        'primary': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

