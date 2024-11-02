import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '青山 常在',
    subtitle: 'Always Standing',
    author: 'qingshan',
    description: 'Rediscory the beauty of typography',
    website: 'https://astro-theme-typography.pages.dev',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      // {
      //   name: 'twitter',
      //   href: 'https://github.com/moeyua/astro-theme-typography',
      // },
      // {
      //   name: 'mastodon',
      //   href: 'https://github.com/moeyua/astro-theme-typography',
      // },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/posts/page/1',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
  },
  appearance: {
    theme: 'light',
    locale: 'zh-cn',
    colorsLight: {
      foreground: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      foreground: '#ffffff',
      background: '#2e405b',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@moeyua13',
    meta: [],
    link: [],
  },
  comment: {
    giscus: {
      repo: 'lniche/astro-theme-typography',
      repoId: 'R_kgDOM07Cyw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOM07Cy84Cj6Au',
      mapping: 'title',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'light',
      lang: 'zh-CN',
      loading: 'lazy'
    }
  },
  rss: {
    fullText: true,
  },
}
