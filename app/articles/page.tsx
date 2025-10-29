import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Clock, Eye, Heart, PenSquare } from "lucide-react"
import { mockArticles, categories } from "@/lib/mock-data"

export default function ArticlesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">文章分享</h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              探索 v0.app 的使用技巧、最佳实践和实战经验
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="搜索文章..." className="pl-10" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 text-center">
            <Button asChild>
              <Link href="/articles/new">
                <PenSquare className="mr-2 h-4 w-4" />
                分享你的文章
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-background px-4 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "全部" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`}>
                <Card className="h-full border-border transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-muted-foreground">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                          <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{article.author.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {article.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {article.likes}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              加载更多文章
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
