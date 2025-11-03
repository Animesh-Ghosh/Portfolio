module.exports = {
  title: 'Animesh Ghosh',
  description: "Animesh-Ghosh's Portfolio site.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/Animesh-Ghosh' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/i-am-animesh/' }
    ],
    displayAllHeaders: true,
    sidebar: [
      ['/projects', 'My Projects'],
      ['/about', 'About Me'],
      ['/talks', 'Talks']
    ]
  },
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/nprogress'
  ]
}
