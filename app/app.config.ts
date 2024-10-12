export default defineAppConfig({
  ui: {
    primary: 'violet',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
  },
  seo: {
    siteName: 'Camila Alfonso - Docs template',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [
      {
        label: 'Content',
        icon: 'i-heroicons-book-open',
        to: '/articles',
      },
      // {
      //   'icon': 'i-simple-icons-github',
      //   'to': 'https://github.com/camilajalfonso/camilaalfonso',
      //   'target': '_blank',
      //   'aria-label': 'Content on GitHub',
      // },
    ],
  },
  footer: {
    credits: 'Copyright © 2024 to Present - Camila Alfonso',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/camilajalfonso',
      'target': '_blank',
      'aria-label': 'Camila Alfonso on Instagram',
    }],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/camilajalfonso/camilaalfonso/edit/main/content',
      links: [
        //   {
        //   icon: 'i-heroicons-star',
        //   label: 'Star on GitHub',
        //   to: 'https://github.com/nuxt/ui',
        //   target: '_blank',
        // },
        //  {
        //   icon: 'i-simple-icons-nuxtdotjs',
        //   label: 'Purchase a license',
        //   to: 'https://ui.nuxt.com/pro/purchase',
        //   target: '_blank',
        // }
      ],
    },
  },
})
