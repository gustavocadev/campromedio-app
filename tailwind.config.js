module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    // fontFamily: {
    //   'display': ['Oswald', ],
    //   'body': ['"Open Sans"',]
    //  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
