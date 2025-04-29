import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// user vitepress options
const userConfig: UserConfig<DefaultTheme.Config> = {
  title: "Fengling 笔记",
  description: "fengling blog",
  base: '/fengling_vitepress_blog/',
  lang: 'zh-US',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      {
        text: '技术文档',
        items: [
          { text: 'vitepress', link: '/vitepress/1.VitePress搭建过程' },
          { text: 'flutter', link: '/flutter/test' },
        ]
      }
    ],
    outlineTitle: '内容导航',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '章节目录',
    darkModeSwitchLabel: '主题模式',
    lastUpdatedText: '更新时间',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(userConfig, {
  collapsed: true,
  useTitleFromFileHeading: false
}))
