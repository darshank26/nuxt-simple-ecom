// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // devtools: { enabled: true }
  app:{
    head:{
      title : 'Nuxt | Simple Ecom Demo',
      meta :[
        {name : 'description', content: 'Nuxt ecom site basic'}
      ],
      link : [
        {
          rel : 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
})
