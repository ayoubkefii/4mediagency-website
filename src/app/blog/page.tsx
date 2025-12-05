import { getAllPosts } from "@/lib/mdx"
import { BlogList } from "./blog-list"

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return <BlogList posts={posts} />
}
