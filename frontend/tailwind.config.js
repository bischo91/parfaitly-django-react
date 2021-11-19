module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#d9f0f2',
      'secondary': '#eaf6fb',
        }
    ),
    textColor: {
      'primary': '#2286aa',
      'secondary': '#15546a',
    },
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        LobsterTwo: ["Lobster Two", "cursive"],
        BebasNeue: ["Bebas Neue", "cursive"],
        BalsamiqSans: ["Balsamiq Sans", "cursive"],
        OpenSansCondensed: ["Open Sans Condensed", "sans-serif"],
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
