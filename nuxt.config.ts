// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    server: {
      proxy: {
        '/': {
          target: 'http://localhost:3000/api/',
          ws: true,
        },
      },
    },
  },
})
