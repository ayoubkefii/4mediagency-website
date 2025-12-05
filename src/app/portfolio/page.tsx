"use client"

import { useState } from "react"
import { ProjectGallery3D } from "@/components/ui/project-gallery-3d"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  ExternalLink, 
  Quote,
  Lightbulb,
  Target,
  Palette,
  Code2,
  Rocket,
  Star,
  Users,
  FolderOpen,
  Award,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/i18n/LanguageProvider"

// Extended project data
const allProjects = [
  {
    id: 1,
    title: "Luxury Real Estate Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    description: "A high-end real estate platform with immersive virtual tours and 3D property visualization.",
    tags: ["Next.js", "Three.js", "Tailwind"],
    year: "2024"
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    category: "branding",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    description: "Complete brand identity for a Silicon Valley AI startup, from logo to brand guidelines.",
    tags: ["Logo Design", "Brand Strategy", "Guidelines"],
    year: "2024"
  },
  {
    id: 3,
    title: "E-commerce Mobile App",
    category: "app",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
    description: "Mobile-first shopping experience with 2M+ downloads and 4.8 star rating.",
    tags: ["React Native", "Firebase", "Stripe"],
    year: "2024"
  },
  {
    id: 4,
    title: "Fashion Editorial Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    description: "Award-winning video campaign for a luxury fashion house with 50M+ views.",
    tags: ["Video Production", "Social Media", "Influencer"],
    year: "2023"
  },
  {
    id: 5,
    title: "FinTech Dashboard",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Real-time financial analytics dashboard with advanced charting and reporting.",
    tags: ["React", "D3.js", "WebSocket"],
    year: "2024"
  },
  {
    id: 6,
    title: "Restaurant Chain Rebrand",
    category: "branding",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    description: "Complete rebrand for a national restaurant chain with 200+ locations.",
    tags: ["Brand Identity", "Packaging", "Signage"],
    year: "2023"
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    category: "app",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    description: "AI-powered fitness app with personalized workout plans and nutrition tracking.",
    tags: ["Flutter", "ML Kit", "HealthKit"],
    year: "2024"
  },
  {
    id: 8,
    title: "Tourism Board Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    description: "Integrated marketing campaign that increased tourism by 35% year-over-year.",
    tags: ["Digital Ads", "Content", "PR"],
    year: "2023"
  },
]

const categories = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Development" },
  { key: "branding", label: "Branding" },
  { key: "app", label: "Mobile Apps" },
  { key: "marketing", label: "Marketing" },
]

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "GlobalBank", logo: "GB" },
  { name: "HealthPlus", logo: "H+" },
  { name: "EcoSmart", logo: "ES" },
  { name: "MediaMax", logo: "MM" },
  { name: "FoodChain", logo: "FC" },
  { name: "TravelGo", logo: "TG" },
]

const stats = [
  { number: "50+", label: "Projects Completed", icon: FolderOpen },
  { number: "35+", label: "Happy Clients", icon: Users },
  { number: "12", label: "Awards Won", icon: Award },
  { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
]

const processSteps = [
  { 
    step: 1, 
    title: "Discovery", 
    description: "We dive deep into your business, goals, and target audience to understand your unique needs.",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    step: 2, 
    title: "Strategy", 
    description: "We develop a comprehensive roadmap aligned with your objectives and market positioning.",
    icon: Target,
    color: "from-purple-500 to-pink-500"
  },
  { 
    step: 3, 
    title: "Design", 
    description: "Our creative team crafts stunning visuals that capture your brand essence and engage users.",
    icon: Palette,
    color: "from-orange-500 to-red-500"
  },
  { 
    step: 4, 
    title: "Development", 
    description: "We build with cutting-edge technology, ensuring performance, security, and scalability.",
    icon: Code2,
    color: "from-green-500 to-emerald-500"
  },
  { 
    step: 5, 
    title: "Launch", 
    description: "We deploy your project and provide ongoing support to ensure continued success.",
    icon: Rocket,
    color: "from-primary to-secondary"
  },
]

const testimonials = [
  {
    quote: "4mediagency transformed our online presence completely. The results exceeded all our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Their attention to detail and creative vision helped us stand out in a crowded market.",
    author: "Michael Chen",
    role: "Marketing Director, InnovateLab",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Professional, responsive, and incredibly talented. They delivered beyond what we imagined.",
    author: "Emma Williams",
    role: "Founder, EcoSmart",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { t } = useLanguage()

  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* 3D Gallery Section */}
      <section className="relative h-screen">
        <ProjectGallery3D />
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-sm mb-2">Scroll to explore more</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio of successful projects across industries.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeFilter === cat.key ? "default" : "outline"}
                onClick={() => setActiveFilter(cat.key)}
                className={`rounded-full transition-all ${
                  activeFilter === cat.key 
                    ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" 
                    : "hover:bg-muted"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full">
                          View Project <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-0">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs px-2 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-white/20 text-white">Our Process</Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              How We <span className="text-secondary">Work</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our proven methodology ensures exceptional results on every project.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                  )}

                  <div className="text-center group">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-4`}
                    >
                      <Icon className="h-9 w-9 text-white" />
                    </motion.div>

                    {/* Step Number */}
                    <div className="text-sm font-bold text-primary mb-1">Step {step.step}</div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              What Our <span className="text-secondary">Clients</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-card to-muted/30 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground mb-6 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Trusted By</p>
            <h3 className="text-2xl font-bold">Industry Leaders</h3>
          </motion.div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-24 h-24 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-2xl font-black text-muted-foreground/50 hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwSDI0djMwaDZ2LTMwem0tNiAwSDE4djMwaDZ2LTMwem0tNiAwSDEydjMwaDZ2LTMwem0tNiAwSDZ2MzBoNnYtMzB6bS02IDBoLTZ2MzBoNnYtMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s collaborate and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
