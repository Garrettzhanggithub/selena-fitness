# Selena Fitness — Website Design Specification v2.0
### Design PRD — Fitness Coach Brand Website

> 本文档用途：作为 AI Agent 或前端工程师实施新网站的唯一权威规范。所有设计与开发决策应以本文档为准。

---

## 目录

0. 项目背景与目标
1. 品牌定位 Brand Identity
2. 目标用户 Target Audience
3. 信息架构与用户旅程 Site Flow / IA
4. 设计系统 Design System
5. 页面分区规范 Section-by-Section Spec
6. 摄影规范 Photography Guide
7. 动效规范 Motion Design
8. 响应式规范 Responsive Rules
9. 未来产品架构 App & Booking Roadmap
10. 技术与代码规范 Engineering Standards
11. SEO / 性能 / 可访问性 Checklist
12. 验收标准 Definition of Done

---

## 0. 项目背景与目标

**现状问题**：现有网站信息架构陈旧（Hero → About → Services → Testimonials → Contact 的模板结构），没有建立统一的设计语言，无法承载高端个人训练品牌的定位。

**本次目标**：不是"改版"，而是"重建"。产出一个能撑起未来 3–5 年品牌资产的网站，包括：
- 官网（本文档核心范围）
- Booking 预约系统（V1.5，接口预留）
- Client App / Portal（V2，架构预留）

**成功标准**：用户从落地到浏览完首屏后，应产生"这个教练很贵、很专业、我信任她、我想要这样的身材"的情绪反应。

---

## 1. 品牌定位 Brand Identity

### 1.1 品牌性格

| 保留 Keep | 避免 Avoid |
|---|---|
| Confidence（自信） | Cute（可爱） |
| Luxury（高端） | Gym-bro / Crossfit 感 |
| Minimal（极简） | Cheap（廉价感） |
| Strong（力量感） | Bodybuilding 竞技感 |
| Modern（现代） | Instagram 网红感 |
| Editorial（编辑/杂志感） | 过度饱和色彩、过多 emoji |

### 1.2 品牌基调三词

**Confident · Refined · Powerful**

### 1.3 Emotional Goal（首屏 5 秒测试）

1. ★★★★★ This trainer is expensive.
2. ★★★★★ She knows what she's doing.
3. ★★★★★ I trust her.
4. ★★★★★ I want this body / this result.

---

## 2. 目标用户 Target Audience

**Persona 1 — "Career Confidence Seeker"**
- 女性，28–40 岁，白领/专业人士
- 收入：8 万美元+/年
- 目标：减脂、体态改善、自信提升
- 决策心理：不比价，比"这个人是否专业、是否值得托付身体"

**Persona 2 — "Post-Milestone Rebuilder"**
- 产后恢复 / 重大生活转折后
- 需要"被理解"，文案需要有共情但不失专业权威感

---

## 3. 信息架构与用户旅程 Site Flow / IA

### 3.1 情绪曲线式导航

Hero（建立第一印象：贵、专业）
→ Trust（凭证与权威）
→ Transformation（Before/After 结果）
→ Why Selena（差异化叙事）
→ Programs（课程体系）
→ How It Works（流程）
→ Results / Social Proof（客户证言）
→ Lifestyle（品牌生活方式）
→ FAQ（消除顾虑）
→ Booking（转化）

### 3.2 站点地图

- `/`（单页长滚动，锚点导航）
- `/programs`（课程详情）
- `/about`（教练故事完整版）
- `/results`（案例墙）
- `/booking`（预约/咨询表单）
- `/journal`（可选，SEO 内容运营）

### 3.3 导航规则

- 顶部导航仅保留 4–5 项，不做下拉菜单堆砌
- 导航栏默认透明叠加于 Hero 之上，滚动后切换为纯色背景
- 移动端导航为全屏抽屉式

---

## 4. 设计系统 Design System

### 4.1 色彩系统 Color Tokens

| Token | 用途 | HEX |
|---|---|---|
| --color-primary | 主色，文字/深色背景 | #111111 |
| --color-secondary | 反白/浅色背景正文 | #FFFFFF |
| --color-accent | 强调色，CTA、高亮 | #C6A86A（暖金色） |
| --color-background | 页面基底背景 | #F8F7F4（暖白） |
| --color-muted | 次要文字 | #6B6862 |
| --color-border | 分割线、卡片边框 | #E5E2DC |
| --color-success | 表单成功状态 | #3F7A5A |
| --color-error | 表单错误状态 | #B3413E |

**规则**：
- 全站不使用纯黑 #000000 和纯白 #FFFFFF 作为大面积背景
- Accent 色使用比例不超过 5%
- 深色 Section 与浅色 Section 交替出现

### 4.2 字体系统 Typography

- **标题字体（Display）**：Playfair Display（衬线，编辑感）
- **正文字体（Body）**：Inter / -apple-system

| Token | 用途 | 字号 | 行高 | 字重 |
|---|---|---|---|---|
| --text-hero | Hero 大标题 | 72px / 4.5rem | 1.05 | 500 |
| --text-h1 | 页面主标题 | 56px / 3.5rem | 1.1 | 500 |
| --text-h2 | 区块标题 | 44px / 2.75rem | 1.15 | 500 |
| --text-h3 | 卡片/子标题 | 32px / 2rem | 1.2 | 500 |
| --text-body-lg | 引导性正文 | 20px / 1.25rem | 1.6 | 400 |
| --text-body | 正文 | 18px / 1.125rem | 1.6 | 400 |
| --text-caption | 说明文字/标签 | 14px / 0.875rem | 1.4 | 500 |

### 4.3 间距系统（8px 基准）

4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160

- Section 之间垂直间距：桌面 128–160px，移动端 64–80px
- 组件内边距（卡片）：32–48px

### 4.4 圆角 Border Radius

| Token | 用途 | 数值 |
|---|---|---|
| --radius-button | 按钮 | 9999px（胶囊形） |
| --radius-card | 卡片 | 28px |
| --radius-image | 图片容器 | 32px |
| --radius-input | 表单输入框 | 18px |

### 4.5 阴影 Shadow

| Token | 用途 | 值 |
|---|---|---|
| --shadow-sm | 卡片默认 | 0 2px 8px rgba(17,17,17,0.06) |
| --shadow-md | 卡片 hover | 0 12px 32px rgba(17,17,17,0.10) |
| --shadow-lg | 弹层/Modal | 0 24px 64px rgba(17,17,17,0.16) |

### 4.6 按钮规范

- **Primary CTA**：Accent 底色，Primary 色文字，胶囊形，hover 时轻微上浮
- **Secondary CTA**：透明底 + 1px 边框，hover 时底色渐变填充
- **Ghost / Text Link**：无边框，hover 时下划线从左至右展开

---

## 5. 页面分区规范 Section-by-Section Spec

### 5.1 Hero
- Height: 100vh（移动端 90vh）
- 背景：摄影棚拍摄的教练全身/半身照
- Headline: 最多 8 个词，聚焦"转变承诺"
- 按钮: Primary（Book Consultation）+ Secondary（See Results）
- Scroll Indicator + Parallax

### 5.2 Trust
- 横向排列认证 logo、媒体报道、从业年限、服务客户数
- 灰阶 logo，hover 恢复彩色
- 不使用星级评分，改用具体数字

### 5.3 Transformation
- Before/After 对比（Slider Reveal 或并排排版）
- 简短故事标签（"Sarah, 34 — 6 Months"）

### 5.4 Why Selena
- 个人故事叙事 + 编辑感人像特写
- 3 个方法论关键词卡片

### 5.5 Programs
- 卡片式布局，含课程名、适合人群、核心亮点、CTA
- Hover 时 scale(1.02) + 阴影加深

### 5.6 How It Works
- 3–4 步流程横向排列
- 极简线性图标 + 一句话说明

### 5.7 Results / Social Proof
- 真实客户照片 + 克制文字（2–3 句话/条）
- 引号+客户签名式排版

### 5.8 Lifestyle
- 品牌生活方式展示（非直接销售内容）
- 摄影画廊 Grid，间距宽松

### 5.9 FAQ
- 手风琴交互，默认全部收起
- 6–10 条，聚焦消除决策顾虑

### 5.10 Booking / Contact
- 精简表单：姓名、邮箱、电话、目标、期望开始时间
- 预留日历插件嵌入位

---

## 6. 摄影规范 Photography Guide

**禁止**：自拍、手机随手拍、健身房镜子照、过曝、带品牌 logo 背景
**要求**：摄影棚拍摄、纯色背景、浅景深、边缘光、编辑感风格、统一调色

---

## 7. 动效规范 Motion Design

| 动效类型 | 规范 |
|---|---|
| Scroll Fade-in | opacity: 0, translateY: 24px → 正常，duration: 0.6s |
| Image Reveal | 遮罩从一侧滑开（Mask Reveal） |
| Parallax | Hero 及大图 Section，滚动系数 0.5–0.7 |
| Card Hover | scale(1.02) + 阴影加深，duration: 0.3s |
| Button Hover | 背景色/边框渐变过渡 0.25s |
| Menu Animation | 全屏遮罩淡入 + 菜单项 stagger 浮现 |

统一原则：ease-out 曲线，时长 0.2s–0.8s。推荐 Framer Motion。

---

## 8. 响应式规范 Responsive Rules

| 断点 | 宽度 | 布局要点 |
|---|---|---|
| Desktop | ≥ 1280px | 完整多栏，Hero 图文左右分栏 |
| Laptop | 1024–1279px | 保持多栏，间距收窄 20% |
| Tablet | 768–1023px | 部分改为单栏，抽屉导航 |
| Mobile | < 768px | 全部单栏，Hero 上下堆叠 |

---

## 9. 未来产品架构 App & Booking Roadmap

- Booking 表单数据设计为可扩展 Schema
- Auth 提前选型（Clerk / Supabase Auth）
- Programs / Testimonials 使用 Headless CMS
- 图片统一走 CDN（Cloudinary / Vercel Blob）

---

## 10. 技术与代码规范 Engineering Standards

- **框架**：React + Next.js（App Router）
- **样式**：Tailwind CSS v4，Design Tokens 管理
- **动效**：Framer Motion
- **组件**：shadcn/ui（二次定制）
- **语言**：TypeScript strict 模式
- **可访问性**：WCAG AA
- **性能**：Lighthouse ≥ 95
- **图片**：AVIF/WebP + next/image 懒加载

---

## 11. SEO / 性能 / 可访问性 Checklist

- [ ] 唯一 `<title>` 与 meta description
- [ ] 语义化 HTML，标题层级不跳级
- [ ] Schema.org 结构化数据
- [ ] 有效 alt 文本
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] 键盘可操作，可见 focus 状态
- [ ] 色彩对比度 ≥ 4.5:1

---

## 12. 验收标准 Definition of Done

1. 通过 Emotional Goal 四项自测
2. 所有样式来自 Design Token，无硬编码
3. 三个断点独立排版
4. 动效符合第 7 章规范
5. Lighthouse ≥ 95
6. 键盘可完整操作
7. 图片符合第 6 章规范

---

## 执行计划（分 5 阶段）

1. **阶段一**：Design Tokens + 全局样式基础 + Framer Motion 安装
2. **阶段二**：Hero + Trust + Transformation
3. **阶段三**：Why Selena + Programs + How It Works
4. **阶段四**：Results + Lifestyle + FAQ + Booking
5. **阶段五**：响应式核查 + 动效核查 + 性能/SEO 核查
