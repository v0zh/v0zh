import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sparkles,
  Code2,
  Zap,
  Palette,
  Database,
  Globe,
  Layers,
  Terminal,
  GitBranch,
  Rocket,
  Shield,
  Users,
} from "lucide-react"

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Sparkles,
      title: "AI 智能生成",
      description: "通过自然语言描述，AI 自动生成高质量的 React 和 Next.js 代码",
      highlights: ["自然语言交互", "智能代码补全", "上下文理解"],
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
      icon: Code2,
      title: "实时代码预览",
      description: "即时查看代码运行效果，支持热重载和实时编辑",
      highlights: ["即时预览", "热重载", "多设备预览"],
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      icon: Zap,
      title: "快速迭代",
      description: "通过对话式交互快速调整设计和功能，大幅提升开发效率",
      highlights: ["对话式开发", "快速修改", "版本管理"],
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    },
    {
      icon: Palette,
      title: "现代化设计",
      description: "内置 shadcn/ui 组件库和 Tailwind CSS，轻松实现精美界面",
      highlights: ["shadcn/ui", "Tailwind CSS", "响应式设计"],
      iconColor: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    },
    {
      icon: Database,
      title: "数据库集成",
      description: "支持 Supabase、Neon 等主流数据库，快速构建全栈应用",
      highlights: ["Supabase", "Neon", "Upstash"],
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
      icon: Globe,
      title: "一键部署",
      description: "与 Vercel 深度集成，一键部署到生产环境",
      highlights: ["Vercel 部署", "自动 CI/CD", "全球 CDN"],
      iconColor: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    },
  ]

  const advancedFeatures = [
    {
      icon: Layers,
      title: "组件化开发",
      description: "自动拆分组件，保持代码结构清晰和可维护性",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    },
    {
      icon: Terminal,
      title: "TypeScript 支持",
      description: "完整的 TypeScript 类型支持，提供更好的开发体验",
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      icon: GitBranch,
      title: "版本控制",
      description: "支持 GitHub 集成，方便团队协作和代码管理",
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    },
    {
      icon: Rocket,
      title: "性能优化",
      description: "自动优化代码性能，包括图片优化、代码分割等",
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-500/10 dark:bg-red-500/20",
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "遵循最佳安全实践，保护你的应用和数据安全",
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
      icon: Users,
      title: "团队协作",
      description: "支持多人协作开发，提高团队生产力",
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
  ]

  const useCases = [
    {
      title: "快速原型开发",
      description: "在几分钟内将想法转化为可交互的原型",
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      title: "落地页制作",
      description: "快速创建精美的营销落地页和产品展示页",
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      title: "管理后台",
      description: "构建功能完整的管理后台和数据看板",
      color: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      title: "全栈应用",
      description: "开发包含前后端的完整 Web 应用",
      color: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-4" variant="secondary">
            功能介绍
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            强大的 AI 驱动开发工具
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            v0.app 结合了 AI 的智能和现代前端技术栈，让开发变得更快、更简单、更有趣
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">核心功能</h2>
            <p className="mt-4 text-muted-foreground">探索 v0.app 的强大功能特性</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <Card key={feature.title} className="border-border">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">更多特性</h2>
            <p className="mt-4 text-muted-foreground">为专业开发者提供的高级功能</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advancedFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.bgColor}`}>
                  <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">应用场景</h2>
            <p className="mt-4 text-muted-foreground">v0.app 适用于各种开发场景</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border-border">
                <CardHeader>
                  <div className={`mb-2 inline-flex rounded-lg px-3 py-1 text-sm font-medium ${useCase.color}`}>
                    {useCase.title}
                  </div>
                  <CardDescription className="text-muted-foreground">{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground">准备好开始了吗？</h2>
          <p className="mt-4 text-lg text-muted-foreground">加入 v0.app 中文社区，与其他开发者一起学习和成长</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/register">立即注册</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/articles">查看教程</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
