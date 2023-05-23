import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Recipies',
  description: 'Recipies',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes' },
    ],

    sidebar: [
      {
        text: 'All Recipes',
        items: [
          { text: 'Chicken Biriyani', link: '/recipes/biriyani' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/soulsam480/recipes' },
    ],

    footer: {
      message: 'Released under the <a target="_blank" href="https://github.com/soulsam480/recipes/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019 - Present <a target="_blank" href="https://github.com/soulsam480">Sambit Sahoo</a>'
    }
  },
})
