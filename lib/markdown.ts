import fs from "fs"
import path from "path"
import matter from "gray-matter"

const articlesDirectory = path.join(process.cwd(), "data/articles")
const casesDirectory = path.join(process.cwd(), "data/cases")

export interface ArticleMetadata {
  title: string
  description: string
  author: string
  authorAvatar?: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  views?: number
  likes?: number
}

export interface Article extends ArticleMetadata {
  id: string
  content: string
}

export interface CaseMetadata {
  title: string
  description: string
  thumbnail: string
  category: string
  tags: string[]
  author: string
  authorAvatar?: string
  publishedAt: string
  likes?: number
  views?: number
  demoUrl?: string
  githubUrl?: string
  difficulty: "初级" | "中级" | "高级"
  techStack: string[]
}

export interface CaseStudy extends CaseMetadata {
  id: string
  content: string
}

// Get all articles
export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "")
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        id,
        content,
        ...(data as ArticleMetadata),
      }
    })
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))

  return articles
}

// Get article by ID
export function getArticleById(id: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      id,
      content,
      ...(data as ArticleMetadata),
    }
  } catch {
    return null
  }
}

// Get all cases
export function getAllCases(): CaseStudy[] {
  if (!fs.existsSync(casesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(casesDirectory)
  const cases = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "")
      const fullPath = path.join(casesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        id,
        content,
        ...(data as CaseMetadata),
      }
    })
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))

  return cases
}

// Get case by ID
export function getCaseById(id: string): CaseStudy | null {
  try {
    const fullPath = path.join(casesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      id,
      content,
      ...(data as CaseMetadata),
    }
  } catch {
    return null
  }
}

// Get unique categories from articles
export function getArticleCategories(): string[] {
  const articles = getAllArticles()
  const categories = new Set(articles.map((article) => article.category))
  return ["全部", ...Array.from(categories)]
}

// Get unique categories from cases
export function getCaseCategories(): string[] {
  const cases = getAllCases()
  const categories = new Set(cases.map((caseStudy) => caseStudy.category))
  return ["全部", ...Array.from(categories)]
}
