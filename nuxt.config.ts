
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // we deactivate the Server Side Rendering
  ssr: false,

  // Add nuxt-vuefire module
  modules: [
    'nuxt-vuefire',
    '@pinia/nuxt',
  ],
  vuefire: {
    auth: true, // enable Firebase Authentication
    config: {
      apiKey: "AIzaSyCYOSuO8pgs1aP3sqwgzEjCTJU9FPCzAb8",
      authDomain: "clever-to-do-list-4258a.firebaseapp.com",
      projectId: "clever-to-do-list-4258a",
      storageBucket: "clever-to-do-list-4258a.appspot.com",
      messagingSenderId: "305083695338",
      appId: "1:305083695338:web:b29e5250dfaf1bfe855793"
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
})