import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3Fileinput",
  description: "Create Your Vue Project With vue3Fileinput",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting-Strated' },
      
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Getting Strated', link: '/Getting-Strated' },
          { text: 'API Examples', link: '/api-examples' },
          { text: 'Props', link: '/props'},
          { text: 'Events', link: '/Events'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pritish229/vue3-Fileinput' }
    ]
  }
})
