export default {
  components: true,
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
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
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
    ]
  ],
  head: {
    title: `Rizal Asrul Pambudi - What's on my mind?`,
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'blogs, software engineering, frontend engineer, rizal, asrul, pambudi' },
      {
        hid: 'description',
        name: 'description',
        content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rizalasrul.netlify.app' },
      { property: 'og:site_name', content: 'Home | Rizal Asrul Pambudi' },
      { property: 'og:title', content: `Rizal Asrul Pambudi - What's on my mind?` },
      { property: 'og:description', content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.' },
      { property: 'og:image', content: '' },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@rizalasrul',
      },
      {
        name: 'twitter:creator',
        content: '@rizalasrul',
      },
      {
        name: 'twitter:creator',
        content: '@rizalasrul',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://rizalasrul.netlify.app' },
    ],
  },
}
