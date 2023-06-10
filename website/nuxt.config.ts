const isProduction = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image-edge", "@nuxtjs/apollo"],
  googleFonts: {
    preload: true,
    families: {
      Inter: {
        wght: [400, 500, 700],
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://cms:3001/api/graphql",
        browserHttpEndpoint: isProduction
          ? "https://samuelpoulin.ca/api/graphql"
          : "http://localhost:3001/api/graphql",
      },
    },
  },
});
