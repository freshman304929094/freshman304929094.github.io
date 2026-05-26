import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '今日悖论 · 个人数字大脑',
  description: '从零构建 AI 实践、沉淀学术研究、个人笔记与工具模板的数字化第二大脑',
  lang: 'zh-CN',
  base: '/freshman304929094.github.io/',

  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  themeConfig: {
    logo: '',

    nav: [
      { text: '首页', link: '/' },
      { text: '学术论文导读', link: '/academic/' },
      { text: 'Prompts & Rules', link: '/prompts/' },
      { text: '思维导图', link: '/mindmaps/' },
    ],

    sidebar: [
      {
        text: '知识库导航',
        items: [
          { text: '🏠 首页', link: '/' },
          {
            text: '📁 学术论文导读',
            collapsed: false,
            items: [
              { text: '学术论文导读概览', link: '/academic/' },
            ],
          },
          {
            text: '📝 Prompts & Rules',
            collapsed: false,
            items: [
              { text: 'Prompts 概览', link: '/prompts/' },
              { text: '翻译官模板', link: '/prompts/Translation-Master-Prompt' },
            ],
          },
          {
            text: '🗺️ 思维导图与 UI',
            collapsed: false,
            items: [
              { text: '思维导图与 UI 概览', link: '/mindmaps/' },
            ],
          },
        ],
      },
      {
        text: '外部资源',
        items: [
          { text: '🤗 Hugging Face', link: 'https://huggingface.co' },
          { text: '🐈 GitHub', link: 'https://github.com' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/freshman304929094' },
    ],

    footer: {
      message: '⚡ Powered by VitePress · 保持思考，对抗熵增。',
      copyright: 'Copyright © 2026 freshman304929094',
    },

    search: {
      provider: 'local',
    },
  },

  srcDir: '.',
  outDir: '.vitepress/dist',
  cacheDir: '.vitepress/cache',
})