export interface Article {
  id: string
  title: string
  description: string
  content: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  views: number
  likes: number
}

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "v0.app 入门指南：从零开始构建你的第一个应用",
    description: "本文将带你了解 v0.app 的基本概念和使用方法，帮助你快速上手这个强大的 AI 开发工具。",
    content: `
# v0.app 入门指南

v0.app 是 Vercel 推出的革命性 AI 开发工具，它能够通过自然语言描述自动生成高质量的 React 和 Next.js 代码。

## 什么是 v0.app

v0.app 结合了大语言模型的智能和现代前端技术栈，让开发变得更快、更简单。你只需要用自然语言描述你想要的功能，v0 就能为你生成相应的代码。

## 快速开始

1. 访问 v0.dev 并登录你的账号
2. 在对话框中描述你想要创建的内容
3. v0 会为你生成代码并提供实时预览
4. 你可以继续对话来调整和优化代码

## 最佳实践

- 清晰描述你的需求
- 提供具体的设计要求
- 利用迭代对话来完善功能
- 学习生成的代码以提升技能

开始你的 v0 之旅吧！
    `,
    author: {
      name: "张三",
      avatar: "/diverse-avatars.png",
    },
    category: "入门教程",
    tags: ["入门", "教程", "基础"],
    publishedAt: "2025-01-15",
    readTime: "5分钟",
    views: 1234,
    likes: 89,
  },
  {
    id: "2",
    title: "使用 v0.app 快速构建响应式落地页",
    description: "学习如何利用 v0.app 的 AI 能力，在几分钟内创建一个精美的响应式落地页。",
    content: `
# 使用 v0.app 快速构建响应式落地页

落地页是产品营销的重要工具，而 v0.app 让创建落地页变得前所未有的简单。

## 设计要点

一个好的落地页需要：
- 清晰的价值主张
- 吸引人的视觉设计
- 明确的行动号召
- 响应式布局

## 使用 v0 创建落地页

只需告诉 v0 你的产品特点和目标受众，它就能为你生成完整的落地页代码。

## 优化技巧

- 使用高质量的图片
- 保持简洁的文案
- 优化加载速度
- A/B 测试不同版本

让 v0 帮你快速实现想法！
    `,
    author: {
      name: "李四",
      avatar: "/diverse-avatars.png",
    },
    category: "实战案例",
    tags: ["落地页", "响应式", "设计"],
    publishedAt: "2025-01-14",
    readTime: "8分钟",
    views: 987,
    likes: 67,
  },
  {
    id: "3",
    title: "v0.app 与 Supabase 集成：构建全栈应用",
    description: "深入了解如何将 v0.app 与 Supabase 结合，快速开发具有数据库功能的全栈应用。",
    content: `
# v0.app 与 Supabase 集成

将 v0.app 与 Supabase 结合，你可以快速构建功能完整的全栈应用。

## Supabase 简介

Supabase 是一个开源的 Firebase 替代品，提供：
- PostgreSQL 数据库
- 实时订阅
- 身份认证
- 存储服务

## 集成步骤

1. 在 v0 中添加 Supabase 集成
2. 配置数据库连接
3. 使用 v0 生成数据库操作代码
4. 实现认证和授权

## 实战示例

我们将创建一个简单的博客系统，包含文章的增删改查功能。

开始构建你的全栈应用吧！
    `,
    author: {
      name: "王五",
      avatar: "/diverse-avatars.png",
    },
    category: "进阶技巧",
    tags: ["Supabase", "全栈", "数据库"],
    publishedAt: "2025-01-13",
    readTime: "12分钟",
    views: 1456,
    likes: 123,
  },
  {
    id: "4",
    title: "v0.app 最佳实践：提高代码质量的10个技巧",
    description: "分享使用 v0.app 开发时的最佳实践，帮助你生成更高质量、更易维护的代码。",
    content: `
# v0.app 最佳实践

虽然 v0 能自动生成代码，但掌握一些技巧能让你获得更好的结果。

## 10个实用技巧

1. 提供清晰的需求描述
2. 指定技术栈和组件库
3. 描述具体的交互行为
4. 提供设计参考
5. 分步骤迭代开发
6. 重视代码组织结构
7. 关注性能优化
8. 考虑可访问性
9. 添加错误处理
10. 编写测试用例

## 实践建议

每个技巧都配有详细的示例和说明，帮助你更好地使用 v0。

提升你的 v0 使用技能！
    `,
    author: {
      name: "赵六",
      avatar: "/diverse-avatars.png",
    },
    category: "最佳实践",
    tags: ["最佳实践", "代码质量", "技巧"],
    publishedAt: "2025-01-12",
    readTime: "10分钟",
    views: 2103,
    likes: 178,
  },
  {
    id: "5",
    title: "从设计到代码：v0.app 的完整工作流程",
    description: "了解如何将设计稿转化为代码，以及如何在 v0.app 中实现设计师和开发者的高效协作。",
    content: `
# 从设计到代码

v0.app 不仅是开发工具，更是连接设计和开发的桥梁。

## 工作流程

1. 设计阶段：创建原型和设计稿
2. 描述阶段：用自然语言描述设计
3. 生成阶段：v0 生成初始代码
4. 迭代阶段：持续优化和调整
5. 部署阶段：一键部署到生产环境

## 协作技巧

- 使用统一的设计系统
- 建立清晰的沟通流程
- 利用 v0 的版本管理
- 及时反馈和调整

让设计和开发无缝衔接！
    `,
    author: {
      name: "孙七",
      avatar: "/diverse-avatars.png",
    },
    category: "工作流程",
    tags: ["设计", "协作", "工作流"],
    publishedAt: "2025-01-11",
    readTime: "7分钟",
    views: 876,
    likes: 54,
  },
  {
    id: "6",
    title: "v0.app AI 提示词工程：如何写出更好的提示",
    description: "掌握提示词工程的技巧，让 v0.app 更准确地理解你的需求并生成理想的代码。",
    content: `
# AI 提示词工程

好的提示词是获得高质量代码的关键。

## 提示词原则

- 具体而非模糊
- 结构化描述
- 提供上下文
- 明确约束条件

## 示例对比

**不好的提示：**
"做一个按钮"

**好的提示：**
"创建一个蓝色的主要按钮，带有白色文字和圆角，鼠标悬停时有阴影效果"

## 高级技巧

学习如何使用多轮对话来完善需求，以及如何提供有效的反馈。

成为提示词专家！
    `,
    author: {
      name: "周八",
      avatar: "/diverse-avatars.png",
    },
    category: "进阶技巧",
    tags: ["AI", "提示词", "技巧"],
    publishedAt: "2025-01-10",
    readTime: "6分钟",
    views: 1567,
    likes: 134,
  },
]

export const categories = ["全部", "入门教程", "实战案例", "进阶技巧", "最佳实践", "工作流程"]

export interface CaseStudy {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  likes: number
  views: number
  demoUrl?: string
  githubUrl?: string
  difficulty: "初级" | "中级" | "高级"
  techStack: string[]
  content: string
}

export const mockCases: CaseStudy[] = [
  {
    id: "1",
    title: "电商平台首页设计",
    description: "使用 v0.app 快速实现的现代化电商平台首页，包含商品展示、分类导航和购物车功能。",
    thumbnail: "/modern-ecommerce-homepage.jpg",
    category: "电商",
    tags: ["电商", "首页", "响应式"],
    author: {
      name: "张三",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-15",
    likes: 234,
    views: 3456,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    difficulty: "中级",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Stripe"],
    content: `
# 电商平台首页设计

这是一个使用 v0.app 构建的现代化电商平台首页案例。

## 项目概述

本项目展示了如何使用 v0.app 快速构建一个功能完整的电商首页，包括：
- 响应式导航栏
- 商品分类展示
- 特色商品轮播
- 购物车功能
- 用户评价展示

## 技术实现

使用 Next.js 14 App Router 和 Tailwind CSS 实现，集成了 Stripe 支付功能。

## 开发过程

1. 使用 v0 生成基础布局
2. 添加商品数据结构
3. 实现购物车逻辑
4. 集成支付功能
5. 优化性能和 SEO

## 学习要点

- 组件化设计思路
- 状态管理最佳实践
- 支付集成方案
- 性能优化技巧
    `,
  },
  {
    id: "2",
    title: "SaaS 产品落地页",
    description: "为 SaaS 产品设计的高转化率落地页，包含产品介绍、定价方案和用户注册流程。",
    thumbnail: "/saas-landing-page-with-pricing.jpg",
    category: "营销",
    tags: ["SaaS", "落地页", "转化"],
    author: {
      name: "李四",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-14",
    likes: 189,
    views: 2789,
    demoUrl: "https://demo.example.com",
    difficulty: "初级",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    content: `
# SaaS 产品落地页

一个专为 SaaS 产品设计的高转化率落地页案例。

## 设计理念

- 清晰的价值主张
- 吸引人的视觉设计
- 明确的行动号召
- 社会证明元素

## 功能特点

包含产品特性展示、定价表格、客户评价和注册表单等核心模块。

## 转化优化

通过 A/B 测试和用户反馈持续优化，提高转化率。
    `,
  },
  {
    id: "3",
    title: "博客管理系统",
    description: "功能完整的博客管理系统，支持文章发布、分类管理、评论互动和 SEO 优化。",
    thumbnail: "/blog-management-dashboard.jpg",
    category: "内容管理",
    tags: ["博客", "CMS", "全栈"],
    author: {
      name: "王五",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-13",
    likes: 312,
    views: 4567,
    githubUrl: "https://github.com/example/blog-cms",
    difficulty: "高级",
    techStack: ["Next.js", "Supabase", "Markdown", "shadcn/ui"],
    content: `
# 博客管理系统

使用 v0.app 和 Supabase 构建的全栈博客系统。

## 核心功能

- Markdown 编辑器
- 文章分类和标签
- 评论系统
- SEO 优化
- 图片上传

## 技术架构

前端使用 Next.js，后端使用 Supabase 提供数据库和认证服务。

## 开发亮点

展示了如何使用 v0 快速搭建全栈应用的完整流程。
    `,
  },
  {
    id: "4",
    title: "任务管理应用",
    description: "类似 Trello 的任务管理应用，支持拖拽排序、团队协作和进度追踪。",
    thumbnail: "/task-management-kanban.png",
    category: "生产力工具",
    tags: ["任务管理", "协作", "拖拽"],
    author: {
      name: "赵六",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-12",
    likes: 267,
    views: 3890,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/task-manager",
    difficulty: "高级",
    techStack: ["Next.js", "dnd-kit", "Supabase", "Tailwind CSS"],
    content: `
# 任务管理应用

一个功能强大的看板式任务管理工具。

## 主要功能

- 拖拽式任务管理
- 多项目支持
- 团队协作
- 实时同步
- 进度统计

## 技术实现

使用 dnd-kit 实现拖拽功能，Supabase 实时订阅实现多人协作。

## 开发经验

分享了复杂交互和实时功能的实现方案。
    `,
  },
  {
    id: "5",
    title: "在线教育平台",
    description: "包含课程展示、视频播放、学习进度追踪和在线测验的完整教育平台。",
    thumbnail: "/online-learning-platform.png",
    category: "教育",
    tags: ["教育", "视频", "学习"],
    author: {
      name: "孙七",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-11",
    likes: 198,
    views: 2345,
    demoUrl: "https://demo.example.com",
    difficulty: "高级",
    techStack: ["Next.js", "Supabase", "Video.js", "shadcn/ui"],
    content: `
# 在线教育平台

一个功能完整的在线学习平台案例。

## 平台功能

- 课程浏览和搜索
- 视频播放器
- 学习进度追踪
- 在线测验
- 证书颁发

## 技术选型

使用 Next.js 构建前端，Supabase 管理用户和课程数据。

## 实现要点

重点介绍了视频播放、进度追踪和测验系统的实现。
    `,
  },
  {
    id: "6",
    title: "数据可视化仪表板",
    description: "企业级数据可视化仪表板，包含多种图表类型和实时数据更新。",
    thumbnail: "/data-visualization-dashboard.png",
    category: "数据分析",
    tags: ["数据可视化", "图表", "仪表板"],
    author: {
      name: "周八",
      avatar: "/diverse-avatars.png",
    },
    publishedAt: "2025-01-10",
    likes: 345,
    views: 5678,
    demoUrl: "https://demo.example.com",
    difficulty: "中级",
    techStack: ["Next.js", "Recharts", "Tailwind CSS", "shadcn/ui"],
    content: `
# 数据可视化仪表板

使用 v0.app 构建的企业级数据仪表板。

## 可视化组件

- 折线图和柱状图
- 饼图和环形图
- 数据表格
- 实时更新
- 交互式筛选

## 设计原则

遵循数据可视化最佳实践，确保信息清晰易读。

## 性能优化

介绍了大数据量下的性能优化方案。
    `,
  },
]

export const caseCategories = ["全部", "电商", "营销", "内容管理", "生产力工具", "教育", "数据分析"]
