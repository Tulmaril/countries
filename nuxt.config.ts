// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: 'https://restcountries.com/v3.1',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  components: [{ path: '~/components' }],
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/leaflet',
  ],
  leaflet: {
    markerCluster: true,
  },
  css: ['~/assets/scss/main.scss'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Countries App',
      short_name: 'Countries',
      description: 'Explore countries around the world',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
})
