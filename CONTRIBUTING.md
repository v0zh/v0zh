# 贡献指南

感谢你对 v0.app 中文社区的关注！我们欢迎所有形式的贡献，包括但不限于：

- 分享文章
- 提交案例
- 改进文档
- 报告问题
- 提出建议

## 如何贡献文章

### 1. Fork 本仓库

点击右上角的 "Fork" 按钮，将仓库 fork 到你的账号下。

### 2. 创建文章文件

在 `data/articles/` 目录下创建一个新的 Markdown 文件，文件名格式为 `item-YYYYMMDD.md`（例如：`item-20250115.md`）。

### 3. 编写文章

文章需要包含 frontmatter 元数据和正文内容：

\`\`\`markdown
---
title: "你的文章标题"
description: "文章简短描述，不超过 200 字"
author: "你的名字"
authorAvatar: "/path/to/avatar.png"  # 可选
category: "入门教程"  # 可选：入门教程、实战案例、进阶技巧、最佳实践、工作流程
tags: ["标签1", "标签2", "标签3"]
publishedAt: "2025-01-15"  # 格式：YYYY-MM-DD
readTime: "5分钟"
views: 0  # 可选，默认为 0
likes: 0  # 可选，默认为 0
---

# 文章标题

这里是文章正文内容，使用 Markdown 格式编写。

## 二级标题

文章内容...

### 三级标题

更多内容...
\`\`\`

### 4. 提交 Pull Request

1. 提交你的更改：`git commit -m "添加文章：你的文章标题"`
2. 推送到你的 fork：`git push origin main`
3. 在 GitHub 上创建 Pull Request

## 如何贡献案例

### 1. 创建案例文件

在 `data/cases/` 目录下创建一个新的 Markdown 文件，文件名格式为 `item-YYYYMMDD.md`。

### 2. 编写案例

案例需要包含更详细的元数据：

\`\`\`markdown
---
title: "你的案例标题"
description: "案例简短描述"
thumbnail: "/path/to/thumbnail.jpg"  # 案例缩略图
category: "电商"  # 可选：电商、营销、内容管理、生产力工具、教育、数据分析
tags: ["标签1", "标签2"]
author: "你的名字"
authorAvatar: "/path/to/avatar.png"  # 可选
publishedAt: "2025-01-15"
likes: 0
views: 0
demoUrl: "https://demo.example.com"  # 可选，演示链接
githubUrl: "https://github.com/username/repo"  # 可选，代码仓库
difficulty: "中级"  # 初级、中级、高级
techStack: ["Next.js", "Tailwind CSS", "Supabase"]  # 使用的技术栈
---

# 案例标题

案例详细介绍...

## 项目概述

项目背景和目标...

## 技术实现

技术细节...

## 学习要点

关键知识点...
\`\`\`

### 3. 添加图片

如果你的案例包含图片，请将图片放在 `public/` 目录下，并在 Markdown 中使用相对路径引用。

### 4. 提交 Pull Request

按照上述文章提交流程提交你的案例。

## 内容规范

### 文章要求

- 内容原创或已获得授权
- 与 v0.app 相关
- 语言清晰，逻辑连贯
- 代码示例完整可运行
- 排版规范，使用正确的 Markdown 语法

### 案例要求

- 项目真实可用
- 提供演示链接或代码仓库（至少一个）
- 包含项目截图或演示视频
- 技术栈信息完整
- 详细说明实现过程和关键技术点

## 审核流程

1. 提交 PR 后，维护者会在 3 个工作日内审核
2. 如有问题，会在 PR 中留言反馈
3. 修改完成后，维护者会合并 PR
4. 合并后，你的贡献会立即显示在网站上

## 行为准则

- 尊重他人，友善交流
- 不发布违法、违规内容
- 不抄袭他人作品
- 保护个人隐私
- 遵守开源协议

## 获得帮助

如果你在贡献过程中遇到问题，可以：

- 在 GitHub Issues 中提问
- 加入我们的社区讨论群
- 发送邮件至：community@v0zh.com

再次感谢你的贡献！让我们一起建设更好的 v0.app 中文社区！
