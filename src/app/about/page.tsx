"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Zap, Globe } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageProvider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      {/* Hero */}
      <section className="container px-4 md:px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("about.hero_title")} <span className="text-primary">4mediagency</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("about.hero_subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 mb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: t("about.stats_projects"), value: 500, suffix: "+" },
              { label: t("about.stats_clients"), value: 120, suffix: "+" },
              { label: t("about.stats_team"), value: 25, suffix: "" },
              { label: t("about.stats_awards"), value: 15, suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} duration={2.5} />{stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container px-4 md:px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t("about.values_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { titleKey: "Innovation", descKey: "innovation", icon: Zap },
            { titleKey: "Excellence", descKey: "excellence", icon: Award },
            { titleKey: "Intégrité", descKey: "integrity", icon: Heart },
            { titleKey: "Collaboration", descKey: "collaboration", icon: Users },
            { titleKey: "Impact", descKey: "impact", icon: Target },
            { titleKey: "Vision Globale", descKey: "global_vision", icon: Globe },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                    <CardTitle>{value.titleKey}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(`about.values.${value.descKey}`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container px-4 md:px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t("about.journey_title")}
        </h2>
        <div className="relative border-l-2 border-muted ml-4 md:ml-1/2 space-y-12">
            {["2020", "2021", "2022", "2023"].map((year, index) => {
              const title = t(`about.journey.${year}.title`)
              const desc = t(`about.journey.${year}.desc`)
              return (
            <motion.div 
              key={year}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''} md:gap-16`}>
                 <div className="hidden md:block w-1/2" /> {/* Spacer for alternating layout - simplified for now, actually standard vertical list is better for mobile first responsiveness without complex logic */}
                 {/* Let's keep it simple vertical for now to ensure responsiveness */}
                 <div className="mb-1">
                    <span className="text-sm font-bold text-secondary">{year}</span>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">{desc}</p>
                 </div>
              </div>
            </motion.div>
              )
            })}
        </div>
      </section>
    </div>
  )
}
