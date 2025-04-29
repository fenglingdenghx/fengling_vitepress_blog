// vitepress 中的 TS 类型 和 defineConfig 方法
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站的标题
  title: "Fengling",
  // 网站的介绍
  description: "风聆个人知识库",
  head: [
    // 添加图标
    [ "link", { rel: "icon", href: "/fengling_vitepress_blog/favicon.ico" } ],
  ],
  /**
   * 站点将部署到的 base URL。如果计划在子路径例如 GitHub 页面下部署站点，则需要设置此项。
   * 如果计划将站点部署到 https://foo.github.io/bar/，那么应该将 base 设置为 '/bar/'。
   * 它应该始终以 / 开头和结尾。
   */
  base: '/fengling_vitepress_blog/',
  // 站点的 lang 属性。这将呈现为页面 HTML 中的 <html lang="en-US"> 标签。
  lang: 'zh-US', 
  /**
   * 是否使用 Git 获取每个页面的最后更新时间戳。
   * 时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
   */
  lastUpdated: true,
  // 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。另请参阅生成简洁的 URL。需要服务端支持
  cleanUrls: false,
  // 主题相关配置
  themeConfig: {
    /**
     * 得益于 minisearch，VitePress 支持使用浏览器内索引进行模糊全文搜索。
     * 要启用此功能，只需在 .vitepress/config.ts 文件中将
     * themeConfig.search.provider 选项设置为 'local' 即可：
     */
    search: {
      // 启用minisearch搜索
      provider: 'local',
      options: {
        translations: {
          button: {
            // 搜索框内的文字
            buttonText: '搜索文档',
          },
          modal: {
            // 未搜索到结果的文字
            noResultsText: '无法找到相关结果',
            // 删除标题
            resetButtonTitle: '清除',
            // 搜索框底部显示文字
            footer: {
              selectText: '选择',
              navigateText: '切换', 
              closeText: '关闭'
            }
          }
        }
      }
    },
    // 网站头部导航
    nav: [
      {
        text: '技术文档',
        items: [
          { text: 'vitepress', link: '/vitepress/1.vitepress搭建过程' },
          { text: 'flutter', link: '/flutter/test' },
        ]
      }
    ],
    sidebar: [
      {
        text: 'vitepress',
        collapsed: true,
        items: [
          {
            text: '1.vitepress搭建过程',
            link: '/vitepress/1.vitepress搭建过程'
          },
          {
            text: '2.github自动化部署',
            link: '/vitepress/2.github自动化部署'
          },
          {
            text: '3.markdown语法示例',
            link: '/vitepress/3.markdown语法示例'
          }
        ]
      }
    ],
    // 网站右侧导航标题
    outlineTitle: '内容导航',
    // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。
    returnToTopLabel: '回到顶部',
    // 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
    sidebarMenuLabel: '章节目录',
    // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
    darkModeSwitchLabel: '主题模式',
    // 最后更新时间显示文本
    lastUpdatedText: '更新时间',
    docFooter: {
      // 上一篇按钮
      prev: '上一篇',
      //  下一篇按钮
      next: '下一篇'
    },
    // 是否显示右侧大纲
    outline: {
      // 大纲显示层级
      level: 'deep'
    },
    // 404 页面配置
    notFound: {
      title: '页面未找到', //  页面标题
      linkText: '返回首页', // 返回按钮文字
      quote: '未找到你想访问的页面。' // 页面描述
    },
    footer: {
      message: 'fengling个人知识库',
      copyright: '版权所有 Feng Ling'
    }
  }
})
