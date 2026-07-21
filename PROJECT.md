# Selena Fitness — 项目总结

## 🔑 关键凭证

> ⚠️ Token 存放在本地 `.env`，不提交到 Git。

| 凭证 | 说明 |
|------|------|
| **GitHub Token** | 读写所有仓库（含 Private） |
| **Vercel Token** | 自动部署到 Vercel |
| **GitHub 用户名** | `Garrettzhanggithub` |
| **Vercel 账户** | `firebasechuangyue-4107` |

## 🌐 网站信息

| 项目 | 地址 |
|------|------|
| **Selena Fitness** | https://selena-fitness.vercel.app |
| **GitHub 仓库** | https://github.com/Garrettzhanggithub/selena-fitness |
| **后台管理** | https://selena-fitness.vercel.app/backend |

## 🎨 设计风格

| 特征 | 值 |
|------|-----|
| **参考** | Apexcoach（超大标题 + 背景图 + 脉冲徽章） |
| **品牌色** | 翡翠绿 `#10B981` (emerald-500) |
| **字体** | Inter，标题 `font-black` 超粗体 |
| **双主题** | 🌙 深色 / ☀️ 浅色（手动切换按钮） |

## 🔧 技术栈

| 技术 | 版本 |
|------|------|
| **框架** | Next.js 16 (App Router) |
| **语言** | TypeScript + React 19 |
| **样式** | Tailwind CSS v4 + CSS Design Tokens |
| **Blog 系统** | Markdown 文件 + gray-matter 解析 |

## 🔐 后台管理 `/backend`

| 功能 | 说明 |
|------|------|
| **密码** | `selena2026`（默认） |
| **写文章** | 标题、分类、摘要、Markdown 内容 |
| **自动保存** | 保存到 `content/blog/` 目录 |

## 📁 GitHub 所有仓库

| 仓库 | 语言 | 类型 |
|------|------|------|
| 🌐 selena-fitness | TypeScript | 健身教练网站 ✅ |
| 🔒 PianoClass-Web | TypeScript | 钢琴课网站 |
| 🔒 MusicClass-Web | TypeScript | 音乐课网站 |
| 🔒 ElectricianWeb | TypeScript | 电工网站 |
| 🔒 Apexcoach | TypeScript | 参考设计 |
| 🔒 christmas-tree | TypeScript | 圣诞树项目 |
| 🔒 invoice-organizer | Kotlin | 发票整理 |
| 🔒 llm | — | LLM 相关 |
| 🔒 llmbot | — | LLM Bot |

## 💪 工作流

1. 告诉我改什么 → 人家直接改代码
2. Build + Deploy → 自动推送 GitHub + 部署 Vercel
3. 写新文章 → 去 `/backend` 后台发布，或告诉人家帮你写
