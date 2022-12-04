/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto'],
        // 'serif': ['Playfair Display'],
        // 'mono': ['Roboto Mono'],
        // 'display': ['Roboto'],
        'body': ['Roboto'],
      },
      colors: {
        // 'primary': '#0A58ED',
      },
    },
  },
  plugins: [],
}
1