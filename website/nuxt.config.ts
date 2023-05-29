// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image-edge", "@nuxtjs/apollo"],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://cms:3001/api/graphql",
        browserHttpEndpoint: "http://localhost:3001/api/graphql",
      },
    },
  },
});
