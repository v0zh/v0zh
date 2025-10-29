"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement password reset with Supabase
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-xl font-bold text-primary-foreground">v0</span>
          </div>
          <CardTitle className="text-2xl">重置密码</CardTitle>
          <CardDescription className="text-muted-foreground">
            {isSubmitted ? "我们已发送重置链接到你的邮箱" : "输入你的邮箱地址，我们将发送重置密码的链接"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "发送中..." : "发送重置链接"}
                </Button>
              </form>

              <div className="text-center">
                <Button variant="ghost" asChild>
                  <Link href="/login">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    返回登录
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground">
                请检查你的邮箱 <span className="font-medium text-foreground">{email}</span>，点击邮件中的链接重置密码。
              </p>
              <p className="text-sm text-muted-foreground">如果没有收到邮件，请检查垃圾邮件文件夹。</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/login">返回登录</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
