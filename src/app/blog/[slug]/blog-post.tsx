"use client"

import { Post } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-10 mb-5" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed mb-6 text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="text-lg text-muted-foreground" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8 text-muted-foreground" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary" {...props} />
  ),
}

export function BlogPost({ post }: { post: Post }) {
  return (
    <article className="min-h-screen py-20">
      {/* Back Button */}
      <div className="container px-4 md:px-6 mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="container px-4 md:px-6 mb-12 text-center max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {post.meta.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          {post.meta.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" /> {post.meta.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> {post.meta.date}
          </div>
          {post.meta.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.meta.readingTime}
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.meta.image && (
        <div className="container px-4 md:px-6 mb-16 max-w-5xl mx-auto">
          <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
             {/* In a real app, use next/image properly configured. For now, using a div background as a placeholder if image is external/local path that might not be resolved yet without config */}
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url(${post.meta.image})` }}
             />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <MDXRemote {...post.content} components={components} />
        
        <hr className="my-12 border-muted" />
        
        <div className="flex justify-between items-center">
          <p className="font-medium text-muted-foreground">
            Share this article
          </p>
          <div className="flex gap-2">
             {/* Social Share Buttons would go here */}
             <Button variant="outline" size="sm">Twitter</Button>
             <Button variant="outline" size="sm">LinkedIn</Button>
             <Button variant="outline" size="sm">Facebook</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
