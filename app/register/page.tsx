"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Chrome, Mail, Lock, User } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("两次输入的密码不一致")
      return
    }

    if (!agreeToTerms) {
      alert("请同意服务条款和隐私政策")
      return
    }

    setIsLoading(true)
    // TODO: Implement email registration with Supabase
    setTimeout(() => {
      setIsLoading(false)
      alert("注册功能将在集成 Supabase 后启用")
    }, 1000)
  }

  const handleGoogleRegister = async () => {
    setIsLoading(true)
    // TODO: Implement Google OAuth with Supabase
    setTimeout(() => {
      setIsLoading(false)
      alert("Google 注册功能将在集成 Supabase 后启用")
    }, 1000)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-xl font-bold text-primary-foreground">v0</span>
          </div>
          <CardTitle className="text-2xl">创建账号</CardTitle>
          <CardDescription className="text-muted-foreground">加入 v0.app 中文社区，开始你的学习之旅</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Google Register */}
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={handleGoogleRegister}
            disabled={isLoading}
          >
            <Chrome className="mr-2 h-4 w-4" />
            使用 Google 账号注册
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">或使用邮箱注册</span>
            </div>
          </div>

          {/* Email Register Form */}
          <form onSubmit={handleEmailRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">用户名</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="你的用户名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">邮箱地址</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="至少 8 个字符"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">确认密码</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="再次输入密码"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={(checked) => setAgreeToTerms(!!checked)} />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                我同意{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  服务条款
                </Link>{" "}
                和{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  隐私政策
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "注册中..." : "创建账号"}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            已有账号？{" "}
            <Link href="/login" className="text-primary hover:underline">
              立即登录
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
