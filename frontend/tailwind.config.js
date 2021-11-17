module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#d9f0f2',
      'secondary': '#8dd2d8',
        }
      ),
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        LobsterTwo: ["Lobster Two", "cursive"],
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}
