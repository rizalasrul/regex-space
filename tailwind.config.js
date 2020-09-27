module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    typography: {
      default: {
        css: {
          color: '#fff',
          h1: {
            color: '#fff',
          },
          h2: {
            color: '#fff',
          },
          h3: {
            color: '#fff',
          },
          h4: {
            color: '#fff',
          },
          h5: {
            color: '#fff',
          },
          h6: {
            color: '#fff',
          },
          a: {
            color: '#93c2db',
            '&:hover': {
              color: '#93c2db',
            },
          },
          figure: {
            figcaption: {
              color: '#fff',
              fontSize: '12px',
            },
          },
          blockquote: {
            color: '#fff',
          },
          code: {
            color: '#fff',
          },
        },
      },
      'xl': {
        figure: {
          figcaption: {
            color: '#fff',
            fontSize: '12px',
          },
        },
      },
      'md': {
        figure: {
          figcaption: {
            color: '#fff',
            fontSize: '12px',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
