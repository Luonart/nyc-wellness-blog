import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  heroImage?: string
  draft: boolean
  content: string
}

export interface Page {
  slug: string
  title: string
  description: string
  content: string
}

const contentDirectory = path.join(process.cwd(), 'content')

// Get all posts from the content/posts directory
export function getAllPosts(): Post[] {
  const postsDirectory = path.join(contentDirectory, 'posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        tags: data.tags || [],
        heroImage: data.heroImage || undefined,
        draft: data.draft || false,
        content,
      }
    })
    .filter((post) => !post.draft) // Filter out draft posts
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // Sort by date descending

  return allPostsData
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
  const postsDirectory = path.join(contentDirectory, 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    tags: data.tags || [],
    heroImage: data.heroImage || undefined,
    draft: data.draft || false,
    content,
  }
}

// Get all pages from the content/pages directory
export function getAllPages(): Page[] {
  const pagesDirectory = path.join(contentDirectory, 'pages')
  
  if (!fs.existsSync(pagesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(pagesDirectory)
  const allPagesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(pagesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        content,
      }
    })

  return allPagesData
}

// Get a single page by slug
export function getPageBySlug(slug: string): Page | null {
  const pagesDirectory = path.join(contentDirectory, 'pages')
  const fullPath = path.join(pagesDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    content,
  }
}

// Get posts by tag
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap((post) => post.tags)
  return Array.from(new Set(tags)).sort()
}
