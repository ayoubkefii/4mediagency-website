"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/i18n/LanguageProvider"

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("blog.hero_title").split("&")[0]}{" "}
          <span className="text-primary">
            {t("blog.hero_title").split("&")[1] ?? ""}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("blog.hero_subtitle")}
        </p>
      </section>

      {/* Featured Post */}
      <section className="container px-4 md:px-6 mb-20">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-slate-900 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          {/* Placeholder Image Background */}
          <div className="absolute inset-0 bg-primary/20 group-hover:scale-105 transition-transform duration-700" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
            <Badge className="mb-4 bg-secondary hover:bg-orange-600 text-white border-none">
              {t("blog.featured_badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t("blog.featured_title")}
            </h2>
            <div className="flex items-center gap-6 text-slate-300 mb-6">
              <div className="flex items-center gap-2"><User className="h-4 w-4" /> Admin</div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 24 Oct 2024</div>
            </div>
            <p className="text-slate-300 text-lg mb-6 line-clamp-2">
              {t("blog.featured_excerpt")}
            </p>
            <Button className="bg-primary hover:bg-blue-600 text-white rounded-full">
              {t("blog.featured_read")}
            </Button>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="container px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-blue-100' : 'bg-orange-100'} group-hover:scale-110 transition-transform duration-500`} />
                <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white">
                  {t("blog.card_category")}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {t("blog.card_date_label")}
                  </span>
                  <span>•</span>
                  <span>{t("blog.card_read_time")}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {t("blog.card_title")} {i}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {t("blog.card_excerpt")}
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary font-medium hover:underline flex items-center gap-2">
                  {t("blog.card_read_more")} <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <Button variant="outline" disabled>
            {t("blog.pagination_prev")}
          </Button>
          <Button variant="default" className="bg-primary">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">
            {t("blog.pagination_next")}
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {t("blog.newsletter_title")}
          </h2>
          <p className="text-blue-100 mb-8">
            {t("blog.newsletter_subtitle")}
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              placeholder={t("blog.newsletter_placeholder")}
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-secondary hover:bg-orange-600 text-white">
              {t("blog.newsletter_cta")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
