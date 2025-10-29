"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "首页", href: "/" },
    { name: "功能介绍", href: "/features" },
    { name: "文章分享", href: "/articles" },
    { name: "案例展示", href: "/cases" },
    { name: "加入社区", href: "/join" },
    { name: "关于", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-lg font-bold text-primary-foreground">v0</span>
            </div>
            <span className="text-xl font-bold text-foreground">中文社区</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login">登录</Link>
          </Button>
          <Button asChild>
            <Link href="/register">注册</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-border px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex justify-center py-2">
                <ThemeToggle />
              </div>
              <Button variant="ghost" asChild className="w-full">
                <Link href="/login">登录</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/register">注册</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
