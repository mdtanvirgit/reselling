/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
