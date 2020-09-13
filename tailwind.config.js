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
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
