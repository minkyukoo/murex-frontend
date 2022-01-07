module.exports = {
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {

    },
    container: {
      padding: {
        DEFAULT: '48px',
        sm: '15px',
        lg: '38px',
        xl: '48px',
        '2xl': '48px',
        '3xl': '48px',
        'custom-16': '16px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1824px',
      // => @media (min-width: 1824px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
