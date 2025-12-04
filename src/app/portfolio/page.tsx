"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageProvider"

const categoriesKeys = ["0", "1", "2", "3", "4", "5"] as const

const projects = [
  { id: 1, title: "Neon Tech", category: "Web", image: "bg-slate-800", desc: "Un site web futuriste pour une startup technologique.", results: "200% d'augmentation du trafic" },
  { id: 2, title: "Orange Juice", category: "Branding", image: "bg-orange-400", desc: "Refonte complète de la marque pour une entreprise de boissons.", results: "Top Design Award 2023" },
  { id: 3, title: "Social Boost", category: "Social", image: "bg-blue-600", desc: "Campagne virale atteignant des millions de personnes.", results: "1M+ Impressions" },
  { id: 4, title: "FitApp", category: "Apps", image: "bg-green-500", desc: "Application de suivi de santé et fitness.", results: "50k+ Téléchargements" },
  { id: 5, title: "Corporate Film", category: "Vidéo", image: "bg-gray-700", desc: "Documentaire d'entreprise cinématographique.", results: "Diffusé à la TV nationale" },
  { id: 6, title: "E-Shop Pro", category: "Web", image: "bg-purple-600", desc: "Plateforme e-commerce à haute conversion.", results: "35% Taux de conversion" },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string | null>("Tous")

  const filteredProjects =
    filter === null || filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mb-12 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("portfolio.hero_title_prefix")}{" "}
          <span className="text-secondary">
            {t("portfolio.hero_title_highlight")}
          </span>
        </motion.h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("portfolio.hero_subtitle")}
        </p>
      </section>

      {/* Filter */}
      <section className="container px-4 md:px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categoriesKeys.map((key, index) => {
            const label = t(`portfolio.filters.${index}`)
            return (
            <Button
              key={key}
              variant={filter === label ? "default" : "outline"}
              onClick={() => setFilter(label)}
              className={`rounded-full px-6 ${
                filter === label ? "bg-primary hover:bg-blue-600" : "hover:text-primary"
              }`}
            >
              {label}
            </Button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="container px-4 md:px-6 mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer">
                      <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className={`aspect-[4/3] ${project.image} relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Badge className="bg-white text-black hover:bg-slate-200 text-lg px-4 py-2">Voir l'Étude de Cas</Badge>
                            <Badge className="bg-white text-black hover:bg-slate-200 text-lg px-4 py-2">
                              {t("portfolio.case_badge")}
                            </Badge>
                          </div>
                          <span className="text-white font-bold text-3xl opacity-20">{project.category}</span>
                        </div>
                        <CardContent className="pt-6">
                          <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                          <p className="text-muted-foreground">{project.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold mb-2">{project.title}</DialogTitle>
                      <DialogDescription>
                        <Badge variant="secondary">{project.category}</Badge>
                      </DialogDescription>
                    </DialogHeader>
                    <div className={`w-full h-64 rounded-lg ${project.image} mb-6 flex items-center justify-center text-white/20 text-4xl font-bold`}>
                      {t("portfolio.dialog.image_label")}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {t("portfolio.dialog.challenge_title")}
                        </h4>
                        <p className="text-muted-foreground">
                          {t("portfolio.dialog.challenge_desc")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {t("portfolio.dialog.results_title")}
                        </h4>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-primary/20">
                          <p className="text-primary font-bold text-xl">{project.results}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-6">
                      <Button className="bg-secondary hover:bg-orange-600">
                        {t("portfolio.dialog.visit_site")}{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Clients */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-12 text-muted-foreground">
            {t("portfolio.clients_title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for Logos */}
             {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-2xl font-black text-slate-400">
                {t("portfolio.client_placeholder")} {i}
              </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  )
}
