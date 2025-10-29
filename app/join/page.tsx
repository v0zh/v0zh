import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  PenSquare,
  Code2,
  Github,
  MessageSquare,
  BookOpen,
  Heart,
  CheckCircle2,
  GitPullRequest,
  FileText,
} from "lucide-react"

export default function JoinPage() {
  const ways = [
    {
      icon: PenSquare,
      title: "分享文章",
      description: "通过 GitHub PR 提交 v0.app 使用教程、技巧分享或最佳实践文章",
      action: "查看指南",
      href: "#contribute",
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      icon: Code2,
      title: "提交案例",
      description: "通过 GitHub PR 展示你使用 v0.app 构建的项目案例",
      action: "查看指南",
      href: "#contribute",
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      icon: Github,
      title: "GitHub 协作",
      description: "通过 GitHub 贡献代码、修复问题或改进文档",
      action: "访问 GitHub",
      href: "https://github.com/v0zh/v0-chinese-community",
      color: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      icon: MessageSquare,
      title: "参与讨论",
      description: "在社区论坛中回答问题、分享经验和交流想法",
      action: "加入讨论",
      href: "#",
      color: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
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
      title: "Fork 仓库",
      description: "在 GitHub 上 Fork v0-chinese-community 仓库到你的账号",
    },
    {
      step: "2",
      title: "创建内容",
      description: "在 data/articles/ 或 data/cases/ 目录下创建 Markdown 文件",
    },
    {
      step: "3",
      title: "提交 PR",
      description: "将你的更改提交到 GitHub 并创建 Pull Request",
    },
    {
      step: "4",
      title: "社区审核",
      description: "维护者会在 3 个工作日内审核你的贡献",
    },
    {
      step: "5",
      title: "合并发布",
      description: "通过审核后，内容将自动发布到社区网站",
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
            通过 GitHub
            协作的方式贡献内容，无论你是初学者还是专家，都可以为社区做出贡献。分享你的知识和经验，帮助更多人了解和使用
            v0.app。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="https://github.com/v0zh/v0-chinese-community">
                <Github className="mr-2 h-4 w-4" />
                访问 GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contribute">了解如何贡献</Link>
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

      {/* Detailed GitHub Contribution Guide */}
      <section id="contribute" className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">如何通过 GitHub 贡献</h2>
            <p className="mt-4 text-muted-foreground">我们使用 GitHub 协作的方式管理社区内容</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Article Contribution */}
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">贡献文章</CardTitle>
                <CardDescription>在 data/articles/ 目录下创建 Markdown 文件</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">文件命名</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded">item-YYYYMMDD.md</code>
                  <p className="text-sm text-muted-foreground mt-1">例如：item-20250115.md</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">必需字段</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• title - 文章标题</li>
                    <li>• description - 文章描述</li>
                    <li>• author - 作者名字</li>
                    <li>• category - 分类（入门教程/实战案例/进阶技巧等）</li>
                    <li>• tags - 标签数组</li>
                    <li>• publishedAt - 发布日期（YYYY-MM-DD）</li>
                    <li>• readTime - 阅读时长</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link
                    href="https://github.com/v0zh/v0-chinese-community/blob/main/CONTRIBUTING.md#如何贡献文章"
                    target="_blank"
                  >
                    查看详细文档
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Case Contribution */}
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 dark:bg-purple-500/20">
                  <Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">贡献案例</CardTitle>
                <CardDescription>在 data/cases/ 目录下创建 Markdown 文件</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">文件命名</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded">item-YYYYMMDD.md</code>
                  <p className="text-sm text-muted-foreground mt-1">例如：item-20250115.md</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">必需字段</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• title - 案例标题</li>
                    <li>• description - 案例描述</li>
                    <li>• thumbnail - 缩略图路径</li>
                    <li>• category - 分类（电商/营销/教育等）</li>
                    <li>• difficulty - 难度（初级/中级/高级）</li>
                    <li>• techStack - 技术栈数组</li>
                    <li>• demoUrl/githubUrl - 演示或代码链接（可选）</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link
                    href="https://github.com/v0zh/v0-chinese-community/blob/main/CONTRIBUTING.md#如何贡献案例"
                    target="_blank"
                  >
                    查看详细文档
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribution Process */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献流程</h2>
            <p className="mt-4 text-muted-foreground">简单五步，通过 GitHub PR 开始你的贡献之旅</p>
          </div>

          <div className="mt-12">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

              <div className="space-y-8">
                {process.map((item) => (
                  <div key={item.step} className="relative flex gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background dark:bg-card">
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

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="https://github.com/v0zh/v0-chinese-community/blob/main/CONTRIBUTING.md" target="_blank">
                <GitPullRequest className="mr-2 h-4 w-4" />
                查看完整贡献指南
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">内容规范</h2>
            <p className="mt-4 text-muted-foreground">遵循这些规范，确保你的贡献符合社区标准</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
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
                items: [
                  "尊重他人，保持友善和专业",
                  "避免发布广告或无关内容",
                  "保护个人隐私和敏感信息",
                  "遵守开源协议和版权规定",
                ],
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
            ].map((guideline) => (
              <Card key={guideline.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{guideline.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
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
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">贡献者权益</h2>
            <p className="mt-4 text-muted-foreground">感谢你的贡献，我们为贡献者提供以下权益</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "获得社区贡献者徽章",
              "在个人主页展示你的贡献",
              "与其他开发者建立联系",
              "提升个人技术影响力",
              "优先体验新功能",
              "参与社区决策",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500/10 dark:bg-pink-500/20">
                  <Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">准备好开始贡献了吗？</CardTitle>
              <CardDescription className="mt-4 text-base text-muted-foreground">
                Fork 仓库，创建内容，提交 PR，与数千名开发者一起共建 v0.app 中文社区
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="https://github.com/v0zh/v0-chinese-community" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  访问 GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/v0zh/v0-chinese-community/blob/main/CONTRIBUTING.md" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  贡献指南
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
