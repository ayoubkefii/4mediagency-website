"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { X, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/i18n/LanguageProvider"

const projectKeys = [
  {
    id: 1,
    titleKey: "luxury_real_estate",
    categoryKey: "web_design",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    titleKey: "tech_startup",
    categoryKey: "branding",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    titleKey: "ecommerce_app",
    categoryKey: "development",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
    color: "from-orange-600 to-red-500"
  },
  {
    id: 4,
    titleKey: "fashion_editorial",
    categoryKey: "production",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-600 to-teal-500"
  }
]

type ProjectData = {
  id: number
  title: string
  category: string
  description: string
  image: string
  color: string
}

function Card3D({ project, index, onClick, isRTL }: { 
  project: ProjectData, 
  index: number, 
  onClick: () => void,
  isRTL: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateY: isRTL ? 15 : -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative cursor-pointer group"
    >
      <motion.div 
        whileHover={{ scale: 1.05, z: 20 }}
        whileTap={{ scale: 0.98 }}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" 
          style={{ transition: "transform 0.7s ease-out, opacity 0.3s ease-out" }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white" style={{ transform: "translateZ(20px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} mb-3`}>
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
            <p className="text-sm text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* View Button */}
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose, t, isRTL }: { 
  project: ProjectData | null, 
  onClose: () => void,
  t: (key: string) => string,
  isRTL: boolean
}) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`} />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className={`inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white mb-4`}>
              {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{project.title}</h2>
            <p className="text-lg text-slate-400 mb-8">{project.description}</p>
            
            <div className="space-y-4">
              <div className={`flex items-center gap-4 text-sm text-slate-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t("portfolio.year_label")}: 2024</span>
                <span>•</span>
                <span>{t("portfolio.client_label")}: {t("portfolio.premium_brand")}</span>
              </div>
              
              <Button className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white rounded-full px-8`}>
                {t("portfolio.view_case_study")} <ExternalLink className={`${isRTL ? 'mr-2' : 'ml-2'} w-4 h-4`} />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectGallery3D() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t, locale } = useLanguage()
  const isRTL = locale === "ar"

  // Build projects with translated content
  const projects: ProjectData[] = projectKeys.map(pk => ({
    id: pk.id,
    title: t(`portfolio.projects.${pk.titleKey}`),
    category: t(`portfolio.categories.${pk.categoryKey}`),
    description: t(`portfolio.projects.${pk.titleKey}_desc`),
    image: pk.image,
    color: pk.color
  }))

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="h-full w-full relative bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Header */}
      <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white/10 uppercase tracking-tighter"
        >
          {t("portfolio.gallery_title")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-2 md:mt-4 text-sm md:text-base"
        >
          {t("portfolio.gallery_subtitle")}
        </motion.p>
      </div>

      {/* Cards Container - Desktop Grid */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center" style={{ perspective: "1500px" }}>
        <div className={`flex gap-6 lg:gap-8 px-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {projects.map((project, index) => (
            <div key={project.id} className="w-[220px] lg:w-[280px]">
              <Card3D 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
                isRTL={isRTL}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cards Container - Mobile Carousel */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center px-4" style={{ perspective: "1000px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: isRTL ? -100 : 100, rotateY: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: isRTL ? 100 : -100, rotateY: isRTL ? 20 : -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[300px]"
          >
            <Card3D 
              project={projects[currentIndex]} 
              index={0}
              onClick={() => setSelectedProject(projects[currentIndex])}
              isRTL={isRTL}
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? nextSlide : prevSlide}
            className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={isRTL ? prevSlide : nextSlide}
            className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            t={t}
            isRTL={isRTL}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
