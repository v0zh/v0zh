import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">v0</span>
              </div>
              <span className="text-xl font-bold text-foreground">中文社区</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              v0.app 中文社区，为中文用户提供学习资源、案例分享和技术交流平台。
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">资源</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
                  功能介绍
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground">
                  文章分享
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-muted-foreground hover:text-foreground">
                  案例展示
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">社区</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/join" className="text-sm text-muted-foreground hover:text-foreground">
                  加入社区
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="https://v0.dev" className="text-sm text-muted-foreground hover:text-foreground">
                  v0.app 官网
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 v0.app 中文社区. 本站非 Vercel 官方网站，由社区志愿者维护。
          </p>
        </div>
      </div>
    </footer>
  )
}
