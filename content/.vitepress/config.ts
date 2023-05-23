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
      { link: 'mailto:soulsam480@hotmail.com', icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>' } }
    ],

    footer: {
      message: 'Released under the <a target="_blank" href="https://github.com/soulsam480/recipes/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019 - Present <a target="_blank" href="https://github.com/soulsam480">Sambit Sahoo</a>'
    },

  },
})
