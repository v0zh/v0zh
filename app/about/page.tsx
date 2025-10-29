import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Users, Heart, Zap, Globe, BookOpen } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  const mission = [
    {
      icon: Target,
      title: "我们的使命",
      description: "为中文开发者提供最优质的 v0.app 学习资源和交流平台，降低 AI 驱动开发的学习门槛。",
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      icon: Users,
      title: "社区驱动",
      description: "由社区成员共同维护和贡献，每个人都可以分享经验、提出建议和参与建设。",
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
      icon: Heart,
      title: "开放包容",
      description: "欢迎所有对 v0.app 感兴趣的开发者，无论你是初学者还是资深专家。",
      iconColor: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "知识共享",
      description: "鼓励成员分享学习心得和实战经验",
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
      icon: Zap,
      title: "持续创新",
      description: "探索 AI 开发的最新技术和最佳实践",
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    },
    {
      icon: Globe,
      title: "全球视野",
      description: "连接中文社区与国际 v0 生态系统",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    },
  ]

  const team = [
    {
      name: "社区创始人",
      role: "v0.app 官方大使候选人",
      avatar: "/diverse-avatars.png",
      description: "致力于推广 v0.app 在中文开发者社区的应用",
    },
  ]

  const stats = [
    { label: "社区成员", value: "1,000+" },
    { label: "分享文章", value: "200+" },
    { label: "案例展示", value: "150+" },
    { label: "GitHub Stars", value: "500+" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4" variant="secondary">
            关于我们
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            v0.app 中文社区
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            我们是一个由热爱 v0.app 的中文开发者组成的社区，致力于为中文用户提供最好的学习资源、实战案例和技术支持。
          </p>
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

      {/* Mission Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">关于社区</h2>
            <p className="mt-4 text-muted-foreground">我们的愿景和价值观</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {mission.map((item) => (
              <Card key={item.title} className="border-border">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${item.bgColor}`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">核心价值观</h2>
            <p className="mt-4 text-muted-foreground">指导我们社区发展的原则</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${value.bgColor}`}>
                  <value.icon className={`h-5 w-5 ${value.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">团队介绍</h2>
            <p className="mt-4 text-muted-foreground">社区的核心成员</p>
          </div>

          <div className="mt-12 flex justify-center">
            {team.map((member) => (
              <Card key={member.name} className="max-w-sm border-border">
                <CardHeader className="text-center">
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">{member.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground">加入我们</h2>
          <p className="mt-4 text-lg text-muted-foreground">成为 v0.app 中文社区的一员，与我们一起成长</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/register">立即注册</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/join">了解如何贡献</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
