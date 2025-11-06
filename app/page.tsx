import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Code2, Users, Sparkles, Github, MessageSquare } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Sparkles,
      title: "AI 驱动开发",
      description: "使用 AI 快速生成高质量的 React 和 Next.js 代码",
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
      icon: Code2,
      title: "即时预览",
      description: "实时查看代码效果，快速迭代和调整设计",
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      icon: BookOpen,
      title: "学习资源",
      description: "丰富的教程、文章和最佳实践分享",
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
      icon: Users,
      title: "活跃社区",
      description: "与其他开发者交流经验，共同成长",
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    },
  ]

  const stats = [
    { label: "社区成员", value: "1,000+" },
    { label: "分享文章", value: "200+" },
    { label: "案例展示", value: "150+" },
    { label: "每日活跃", value: "500+" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              欢迎来到 v0.app 中文社区
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              为中文开发者提供 v0.app 学习资源、实战案例和技术交流平台。 加入我们，一起探索 AI 驱动的前端开发新时代。
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  立即加入
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">了解更多</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="https://v0101.vercel.app">中文指南</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              为什么选择 v0.app
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              v0.app 是 Vercel 推出的 AI 驱动的开发工具，帮助开发者快速构建现代化的 Web 应用
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border">
                <CardHeader>
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="bg-muted/50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Latest Articles */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">最新文章</h2>
                <Button variant="ghost" asChild>
                  <Link href="/articles">
                    查看全部
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">v0.app 入门指南：从零开始构建你的第一个应用</CardTitle>
                      <CardDescription className="text-muted-foreground">2025年1月{i}日 · 5分钟阅读</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Latest Cases */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">精选案例</h2>
                <Button variant="ghost" asChild>
                  <Link href="/cases">
                    查看全部
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">电商平台首页设计 - 使用 v0.app 快速实现</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        作者：开发者{i} · 2025年1月{i}日
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">加入 v0.app 中文社区</CardTitle>
              <CardDescription className="mt-4 text-base text-muted-foreground">
                与数千名开发者一起学习、分享和成长。贡献你的文章和案例，帮助更多人了解 v0.app
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  <Users className="mr-2 h-4 w-4" />
                  加入社区
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub 协作
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/articles">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  分享文章
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
