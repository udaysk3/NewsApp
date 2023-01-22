module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts,scss}',
      "./src/index.html",
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}