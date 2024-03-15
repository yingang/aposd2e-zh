import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  bundler: viteBundler({}),

  base: "/aposd2e-zh/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "软件设计的哲学",
    },
    '/en/': {
      lang: 'en-US',
      title: 'A Philosophy of Software Design',
    }
  },

  theme: defaultTheme({
    repo: "yingang/aposd2e-zh",
    docsRepo: "yingang/aposd2e-zh",
    docsBranch: "main",
    docsDir: "docs",
    contributors: false,
    sidebarDepth: 2,
    sidebar: "auto",
    locales: {
      '/': { // zh-CN
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaselectLanguageName: '选择语言',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaselectLanguageName: 'Select language',
        editLink: false,
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',
      }
    }
  })
};