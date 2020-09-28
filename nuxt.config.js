export default {
  components: true,
  generate: {
    fallback: true
  },
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  server: {
    //host: '0.0.0.0',
  },
  head: {
    htmlAttrs: { lang: 'id' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0f3460' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@rizalasrul' },
      { name: 'twitter:creator', content: '@rizalasrul' },
      { name: 'twitter:creator', content: '@rizalasrul' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  css: ['~/assets/main.css'],
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    [
      'nuxt-highlightjs', {
        style: 'obsidian'
      },
    ],
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://rizalasrul.com',
    gzip: true,
  }
}
