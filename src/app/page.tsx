"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Globe, Smartphone, PenTool, BarChart, Shield, Video, MousePointer2, LayoutGrid, MessageSquare, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/i18n/LanguageProvider"

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
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("home.services_web_title")}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{t("home.services_web_desc")}</p>
                  <Button variant="link" className="p-0 text-primary text-lg group-hover:translate-x-2 transition-transform">
                    {t("home.services_web_cta")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/30 blur-[80px] rounded-full" />
            </motion.div>

            {/* Small Cards */}
            {[
              { key: "services_branding", icon: PenTool, color: "text-secondary", bg: "bg-secondary/10" },
              { key: "services_marketing", icon: BarChart, color: "text-primary", bg: "bg-primary/10" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                className="relative group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between min-h-[250px]"
                whileHover={{ y: -10 }}
              >
                 <div className={`${service.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold mb-2">{t(`home.${service.key}`)}</h3>
                   <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all" />
                 </div>
              </motion.div>
            ))}

            {/* Medium Cards */}
            {[
               { titleKey: "services_cyber_title", descKey: "services_cyber_desc", icon: Shield, color: "text-secondary", bg: "bg-secondary/10" },
               { titleKey: "services_apps_title", descKey: "services_apps_desc", icon: Smartphone, color: "text-primary", bg: "bg-primary/10" },
            ].map((service, i) => (
               <motion.div 
                key={i}
                className="relative group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-center min-h-[250px]"
                whileHover={{ scale: 1.02 }}
               >
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500">
                    <service.icon className={`h-32 w-32 ${service.color}`} />
                 </div>
                 <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{t(`home.${service.titleKey}`)}</h3>
                  <p className="text-muted-foreground">{t(`home.${service.descKey}`)}</p>
                 </div>
               </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Link href="/services">
              <Button size="lg" variant="ghost" className="text-xl hover:bg-transparent hover:text-primary transition-colors">
                {t("home.services_all_cta")} <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="py-10 bg-primary text-white overflow-hidden">
        <div className="flex whitespace-nowrap">
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              className={`flex gap-20 items-center text-4xl font-black tracking-widest ${
                // Uppercase looks bad for Arabic, keep it only for LTR
                isRTL ? "" : "uppercase"
              }`}
              animate={{
                x: isRTL ? ["0%", "100%"] : ["0%", "-100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-20">
                  {t("home.marquee_items.0") && (
                    <>
                      <span>{t("home.marquee_items.0")}</span>
                      <span>{t("home.marquee_items.1")}</span>
                      <span>{t("home.marquee_items.2")}</span>
                      <span>{t("home.marquee_items.3")}</span>
                      <span>{t("home.marquee_items.4")}</span>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Work - Parallax */}
      <section className="py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">{t("home.featured_title")}</h2>
              <p className="text-muted-foreground max-w-2xl text-xl">
                {t("home.featured_subtitle")}
              </p>
            </div>
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg">
              {t("home.view_full_portfolio")}
            </Button>
          </div>

          <div className="space-y-32">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <motion.div 
                   className={`order-2 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                   initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                 >
                    <h3 className="text-4xl font-bold mb-4">
                      {t("home.featured_project_name")} {i}
                    </h3>
                    <div className="flex gap-2 mb-6">
                      <Badge variant="secondary">{t("home.featured_badge_web")}</Badge>
                      <Badge variant="outline">{t("home.featured_badge_dev")}</Badge>
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {t("home.featured_desc")}
                    </p>
                    <Button variant="link" className="text-primary p-0 text-lg group-hover:translate-x-2 transition-transform">
                      {t("home.featured_cta")} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                 </motion.div>
                 
                 <motion.div 
                   className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted order-1 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                   whileHover={{ scale: 0.98 }}
                 >
                    <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-500/20' : 'from-orange-500/20'} to-transparent`} />
                    {/* Placeholder for Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-6xl font-black">
                       IMG {i}
                    </div>
                 </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Neon */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
          <motion.h2 
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t("home.cta_title_prefix")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t("home.cta_title_highlight")}
            </span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            {t("home.cta_subtitle")}
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-slate-200 text-xl px-12 py-8 rounded-full shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_70px_-10px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-1">
            {t("home.cta_button")}
          </Button>
        </div>
      </section>
    </div>
  )
}
