import { getPostBySlug } from "@/lib/mdx"
import { BlogPost } from "./blog-post"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return {
    title: `${post.meta.title} | 4media Blog`,
    description: post.meta.description,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return <BlogPost post={post} />
}
