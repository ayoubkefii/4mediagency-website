import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd()

export type Post = {
  slug: string
  meta: {
    title: string
    description: string
    date: string
    author?: string
    image?: string
    tags?: string[]
    readingTime?: string
  }
  content: any
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(root, "src", "content", "blog", `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content)

  return {
    slug: realSlug,
    meta: data as any,
    content: mdxSource,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(path.join(root, "src", "content", "blog"))

  const posts = await Promise.all(
    files.map(async (filename) => {
      const { meta, slug } = await getPostBySlug(filename)
      return {
        slug,
        meta,
        content: null,
      }
    })
  )

  return posts.sort((a, b) => {
    if (new Date(a.meta.date) > new Date(b.meta.date)) {
      return -1
    }
    return 1
  })
}
