import i18n from "./config/i18n.js";
import webpack from "webpack";
export default {
  target: "server",
  server: {
    host: '0',
    // port: 3002,
  },
  loading: "~/components/LoadingBar.vue",

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Murex Partners",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // css
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
    // scss
    "~/assets/scss/general.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel", mode: "client" },
    { src: "~/plugins/jw-vue-pagination", mode: "client" },
    { src: "~/plugins/i18n.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
  },
  styleResources: {
    scss: [
      "~/assets/scss/general.scss",
      "~/assets/scss/variables.scss",
      "~/assets/scss/mixins.scss",
      "~/assets/scss/mixins.scss",
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios"],
  i18n: {
    vueI18nLoader: true,
    defaultLocale: "kr",
    locales: [
      {
        code: "en",
        name: "EN",
      },
      {
        code: "kr",
        name: "KO",
      },
    ],
    vueI18n: i18n,
  },
  axios: {
    // baseURL: "https://murexpartners.com/api/", // Used as fallback if no runtime config is provided
    // baseURL: "http://murex-backend.dvconsulting.org/api/", // local
    baseURL: "https://admin.murexpartners.com/api"
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: "jquery",
        _: "lodash",
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      }),
    ],
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
};
