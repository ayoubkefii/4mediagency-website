"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Globe, Smartphone, PenTool, BarChart, Shield, Video, MousePointer2, LayoutGrid, MessageSquare, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/i18n/LanguageProvider"
import { VideoTestimonials } from "@/components/ui/video-testimonials"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<{x: number, y: number, opacity: number, duration: number}[]>([])
  const { t, locale } = useLanguage()
  const isRTL = locale === "ar"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    
    // Initialize particles on client side only to prevent hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * (window.innerWidth),
      y: Math.random() * (window.innerHeight),
      opacity: Math.random(),
      duration: Math.random() * 5 + 5
    }))
    setParticles(newParticles)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - ULTRA PREMIUM */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
        {/* Complex Animated Background */}
        <div className="absolute inset-0 w-full h-full bg-background overflow-hidden">
           {/* Gradient Orbs */}
          <motion.div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[150px] mix-blend-screen dark:mix-blend-screen"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[150px] mix-blend-screen dark:mix-blend-screen"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Grid Mesh Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.07]" />
          
          {/* Floating Particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full"
              initial={{ 
                x: p.x, 
                y: p.y,
                opacity: p.opacity
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            style={{ x: mousePosition.x, y: mousePosition.y }} // Parallax effect on mouse move
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse" />
              <Badge variant="outline" className="relative px-6 py-2 rounded-full text-sm border-primary/30 text-foreground bg-background/50 backdrop-blur-xl uppercase tracking-widest">
                {t("home.badge")}
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter max-w-6xl leading-[0.9]"
              variants={fadeInUp}
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 pb-4">
                {t("home.hero_line1")}
              </span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x pb-4">
                {t("home.hero_line2")}
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
              variants={fadeInUp}
            >
              {t("home.hero_subtitle")}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center pt-8"
              variants={fadeInUp}
            >
              <Button className="text-lg px-10 py-8 bg-primary hover:bg-blue-600 rounded-full shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-10px_rgba(14,165,233,0.7)] transition-all hover:scale-105 group">
                <span className="mr-2">{t("home.hero_primary_cta")}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-8 rounded-full border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all hover:scale-105 backdrop-blur-sm">
                {t("home.hero_secondary_cta")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span>{t("home.scroll_hint")}</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </section>

      {/* Bento Grid Services Preview */}
      <section className="py-32 bg-background relative z-20">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center justify-center text-center mb-20 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">{t("home.expertise_title")}</h2>
            <p className="text-muted-foreground max-w-2xl text-xl">
              {t("home.expertise_subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large Card */}
            <motion.div 
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 min-h-[400px]"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t("home.services_web_title")}</h3>
                  <p className="text-muted-foreground text-lg mb-6 max-w-md">
                    {t("home.services_web_desc")}
                  </p>
                  <Button variant="ghost" className="group-hover:translate-x-2 transition-transform p-0 hover:bg-transparent">
                    {t("home.services_web_cta")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Abstract Visual */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-100 dark:to-slate-900 z-10" />
                {/* Placeholder for 3D Element or Image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </motion.div>

            {/* Branding Card */}
            <motion.div 
              className="relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8"
              whileHover={{ y: -5 }}
            >
              <PenTool className="h-10 w-10 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-2">{t("home.services_branding")}</h3>
              <p className="text-muted-foreground">Identity & Strategy</p>
            </motion.div>

            {/* Marketing Card */}
            <motion.div 
              className="relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8"
              whileHover={{ y: -5 }}
            >
              <BarChart className="h-10 w-10 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{t("home.services_marketing")}</h3>
              <p className="text-muted-foreground">SEO & Growth</p>
            </motion.div>

            {/* More Services... */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
               <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center justify-center gap-4">
                 <Shield className="h-8 w-8 text-red-500" />
                 <h4 className="font-bold">{t("home.services_cyber_title")}</h4>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center justify-center gap-4">
                 <Smartphone className="h-8 w-8 text-purple-500" />
                 <h4 className="font-bold">{t("home.services_apps_title")}</h4>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center justify-center gap-4">
                 <Video className="h-8 w-8 text-pink-500" />
                 <h4 className="font-bold">Production</h4>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05 }} className="bg-primary p-6 rounded-2xl flex items-center justify-center cursor-pointer group">
                 <span className="font-bold text-white mr-2">{t("home.services_all_cta")}</span>
                 <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="py-10 bg-primary overflow-hidden flex whitespace-nowrap" dir="ltr">
        <motion.div 
          className={`flex gap-20 items-center text-4xl md:text-6xl font-black text-white/20 tracking-widest ${isRTL ? '' : 'uppercase'}`}
          animate={{ x: isRTL ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {t("home.marquee_items").map((item, i) => (
            <span key={i}>{item}</span>
          ))}
          {t("home.marquee_items").map((item, i) => (
            <span key={`dup-${i}`}>{item}</span>
          ))}
        </motion.div>
      </div>

      {/* Featured Project - Immersive */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{t("home.featured_title")}</h2>
              <p className="text-muted-foreground text-xl">{t("home.featured_subtitle")}</p>
            </div>
            <Button variant="outline" className="hidden md:flex">{t("home.view_full_portfolio")}</Button>
          </div>

          <motion.div 
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-slate-900" />
            {/* Project Image Placeholder */}
             <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-105 group-hover:scale-100"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')" }}
            />
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end items-start z-20">
              <div className="flex gap-4 mb-6">
                <Badge className="bg-white text-black hover:bg-white/90">{t("home.featured_badge_web")}</Badge>
                <Badge variant="outline" className="text-white border-white/30">{t("home.featured_badge_dev")}</Badge>
              </div>
              <h3 className="text-4xl md:text-7xl font-bold text-white mb-6">{t("home.featured_project_name")}</h3>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 line-clamp-3">
                {t("home.featured_desc")}
              </p>
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-slate-200">
                {t("home.featured_cta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <VideoTestimonials />

      {/* CTA Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
         {/* Confetti/Particles Effect could go here */}
         <div className="container px-4 md:px-6 text-center relative z-10">
           <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
             {t("home.cta_title_prefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t("home.cta_title_highlight")}</span>
           </h2>
           <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12">
             {t("home.cta_subtitle")}
           </p>
           <Link href="/contact">
            <Button size="lg" className="text-xl px-12 py-8 rounded-full bg-white text-black hover:bg-slate-200 shadow-2xl shadow-white/10">
              {t("home.cta_button")}
            </Button>
           </Link>
         </div>
      </section>
    </div>
  )
}
