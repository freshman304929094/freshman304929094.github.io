import { defineConfig } from 'vitepress'

// 1. 将各个模块的侧边栏定义为独立的变量
const academicSidebar = [
  { text: '学术论文导读概览', link: '/academic/' },
  // 以后新增论文，只需在这里加一行
]

const promptsSidebar = [
  { text: 'Prompts 概览', link: '/prompts/' },
  { text: '翻译官模板', link: '/prompts/Translation-Master-Prompt' },
  { text: '测试文档', link: '/prompts/test' }, // 在这里添加你丢失的那3个文件
  // 以后新增模板，只需在这里加一行
]

const mindmapsSidebar = [
  { text: '思维导图与 UI 概览', link: '/mindmaps/' },
]

export default defineConfig({
  title: '今日悖论 · 个人数字大脑',
  description: '从零构建 AI 实践、沉淀学术研究、个人笔记与工具模板的数字化第二大脑',
  lang: 'zh-CN',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学术论文导读', link: '/academic/' },
      { text: 'Prompts & Rules', link: '/prompts/' },
      { text: '思维导图', link: '/mindmaps/' },
    ],

    // 2. 在这里引用定义的变量，结构一目了然
    sidebar: [
      {
        text: '知识库导航',
        items: [
          { text: '🏠 首页', link: '/' },
          { text: '📁 学术论文导读', collapsed: false, items: academicSidebar },
          { text: '📝 Prompts & Rules', collapsed: false, items: promptsSidebar },
          { text: '🗺️ 思维导图与 UI', collapsed: false, items: mindmapsSidebar },
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
    // ... 其他配置保持不变
  },
  srcDir: '.',
})