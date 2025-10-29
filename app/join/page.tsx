import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, PenSquare, Code2, Github, MessageSquare, BookOpen, Heart, CheckCircle2 } from "lucide-react"

export default function JoinPage() {
  const ways = [
    {
      icon: PenSquare,
      title: "分享文章",
      description: "撰写 v0.app 使用教程、技巧分享或最佳实践文章",
      action: "开始写作",
      href: "/articles/new",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Code2,
      title: "提交案例",
      description: "展示你使用 v0.app 构建的项目，为其他开发者提供灵感",
      action: "提交案例",
      href: "/cases/new",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Github,
      title: "GitHub 协作",
      description: "通过 GitHub 贡献代码、修复问题或改进文档",
      action: "访问 GitHub",
      href: "https://github.com",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: MessageSquare,
      title: "参与讨论",
      description: "在社区论坛中回答问题、分享经验和交流想法",
      action: "加入讨论",
      href: "#",
      color: "bg-orange-500/10 text-orange-500",
    },
  ]

  const guidelines = [
    {
      title: "内容质量",
      items: [
        "确保内容准确、实用且易于理解",
        "提供清晰的代码示例和截图",
        "遵循 Markdown 格式规范",
        "注明参考来源和相关链接",
      ],
    },
    {
      title: "社区规范",
      items: ["尊重他人，保持友善和专业", "避免发布广告或无关内容", "保护个人隐私和敏感信息", "遵守开源协议和版权规定"],
    },
    {
      title: "技术要求",
      items: [
        "代码示例应该可以运行",
        "使用最新版本的 v0.app 和相关技术",
        "提供必要的环境配置说明",
        "测试你的教程和案例",
      ],
    },
  ]

  const process = [
    {
      step: "1",
      title: "注册账号",
      description: "创建你的社区账号，完善个人资料",
    },
    {
      step: "2",
      title: "选择贡献方式",
      description: "根据你的兴趣和专长选择贡献类型",
    },
    {
      step: "3",
      title: "创建内容",
      description: "撰写文章、提交案例或参与代码贡献",
    },
    {
      step: "4",
      title: "社区审核",
      description: "内容将经过社区审核以确保质量",
    },
    {
      step: "5",
      title: "发布分享",
      description: "通过审核后内容将发布到社区",
    },
  ]

  const benefits = [
    "获得社区贡献者徽章",
    "在个人主页展示你的贡献",
    "与其他开发者建立联系",
    "提升个人技术影响力",
    "优先体验新功能",
    "参与社区决策",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4" variant="secondary">
            加入社区
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            一起共建 v0.app 中文社区
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            无论你是初学者还是专家，都可以为社区做出贡献。分享你的知识和经验，帮助更多人了解和使用 v0.app。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                <Users className="mr-2 h-4 w-4" />
                立即加入
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">了解社区</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献方式</h2>
            <p className="mt-4 text-muted-foreground">选择适合你的方式参与社区建设</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ways.map((way) => (
              <Card key={way.title} className="border-border">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${way.color}`}>
                    <way.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{way.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={way.href}>{way.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Process */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献流程</h2>
            <p className="mt-4 text-muted-foreground">简单五步，开始你的贡献之旅</p>
          </div>

          <div className="mt-12">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={item.step} className="relative flex gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献指南</h2>
            <p className="mt-4 text-muted-foreground">遵循这些指南，确保你的贡献符合社区标准</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {guidelines.map((guideline) => (
              <Card key={guideline.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{guideline.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献者权益</h2>
            <p className="mt-4 text-muted-foreground">感谢你的贡献，我们为贡献者提供以下权益</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">准备好开始贡献了吗？</CardTitle>
              <CardDescription className="mt-4 text-base text-muted-foreground">
                加入我们，与数千名开发者一起共建 v0.app 中文社区
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  <Users className="mr-2 h-4 w-4" />
                  注册账号
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com">
                  <Github className="mr-2 h-4 w-4" />
                  访问 GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/articles">
                  <BookOpen className="mr-2 h-4 w-4" />
                  浏览文章
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
