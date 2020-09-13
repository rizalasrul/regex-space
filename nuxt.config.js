export default {
  components: true,
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
      { property: 'og:site_name', content: 'Rizal Asrul Pambudi' },
      { property: 'og:title', content: `Rizal Asrul Pambudi - What's on my mind?` },
      { property: 'og:description', content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.' },
      { property: 'og:image', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://rizalasrul.netlify.app' },
    ],
  },
}
