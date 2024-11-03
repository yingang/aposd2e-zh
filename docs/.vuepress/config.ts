import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { createSidebar } from './sidebar'

export default defineUserConfig({
	bundler: viteBundler({}),

  base: "/aposd2e-zh/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "软件设计的哲学，第二版",
    },
    '/en/': {
      lang: 'en-US',
      title: 'A Philosophy of Software Design, 2nd Edition',
    },
    '/zh-tw/' : {
      lang: 'zh-TW',
      title: '軟體設計的哲學，第二版',
    }
  },

  theme: defaultTheme({
    repo: "yingang/aposd2e-zh",
    docsRepo: "yingang/aposd2e-zh",
    docsBranch: "main",
    docsDir: "docs",
    contributors: false,
    sidebarDepth: 2,
    locales: {
      '/': { // zh-CN
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        // selectLanguageAriaselectLanguageName: '选择语言',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        sidebar: createSidebar('docs', ''),
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        // selectLanguageAriaselectLanguageName: 'Select language',
        editLink: false,
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',
        sidebar: createSidebar('docs/en', '/en'),
      },
      '/zh-tw/': {
        selectLanguageName: '繁体中文',
        selectLanguageText: '選擇語言',
        // selectLanguageAriaselectLanguageName: '選擇語言',
        editLink: false,
        editLinkText: '在 GitHub 上編輯此頁',
        lastUpdatedText: '上次更新',
        sidebar: createSidebar('docs/zh-tw', '/zh-tw'),
      }
    }
  }),
})
