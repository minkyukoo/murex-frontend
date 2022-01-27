module.exports = {
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit',
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {

    },
    fluidContainer: {
      'default': {
        maxWidth: '100%', // defaults to null (no max width)
        padding: '48px', // defaults to '15px'
      },
    },
    container: {
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "20px",
        xl: "48px",
        "2xl": "48px",
        "3xl": "48px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#57195C",
      'grey-1': "#BDBDBD",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1824px",
      // => @media (min-width: 1824px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
