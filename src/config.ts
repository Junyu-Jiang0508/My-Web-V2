/**
 * 站点配置
 *
 * Giscus 评论区配置：
 * 1. 在 GitHub 仓库 Settings → Features 中启用 Discussions
 * 2. 访问 https://giscus.app/zh-CN 配置
 * 3. 将下方值替换为 giscus.app 生成的 data-repo-id 和 data-category-id
 */
export const giscus = {
  repo: 'Junyu-Jiang0508/My-Web-V2',
  repoId: '', // 从 giscus.app 获取
  category: 'Announcements',
  categoryId: '', // 从 giscus.app 获取
  mapping: 'pathname' as const,
  theme: 'preferred_color_scheme' as const,
  lang: 'en', // 界面语言为英文，评论可输入任意语言
};
