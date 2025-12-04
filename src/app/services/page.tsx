"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  PenTool,
  MessageSquare,
  Globe,
  Shield,
  Lock,
  Code,
  Palette,
  Video,
  Headphones,
  Share2,
  FileText,
  Smartphone,
  Check,
  ArrowUpRight,
} from "lucide-react"
import { useLanguage } from "@/i18n/LanguageProvider"
import { messages } from "@/i18n/messages"

const services = [
  { key: "content", icon: PenTool, size: "md" },
  { key: "communication", icon: MessageSquare, size: "sm" },
  { key: "online_services", icon: Globe, size: "sm" },
  { key: "cybersecurity", icon: Shield, size: "lg" },
  { key: "social_security", icon: Lock, size: "sm" },
  { key: "web_admin", icon: Code, size: "md" },
  { key: "branding", icon: Palette, size: "md" },
  { key: "production", icon: Video, size: "lg" },
  { key: "support", icon: Headphones, size: "sm" },
  { key: "social_management", icon: Share2, size: "md" },
  { key: "study", icon: FileText, size: "sm" },
  { key: "apps", icon: Smartphone, size: "lg" },
] as const

export default function ServicesPage() {
  const { t, locale } = useLanguage()
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mb-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("services.hero_title_prefix")}{" "}
          <span className="text-primary">{t("services.hero_title_highlight")}</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("services.hero_subtitle")}
        </motion.p>
      </section>

      {/* Bento Grid Services */}
      <section className="container px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between
                ${service.size === 'lg' ? 'md:col-span-2 md:row-span-2' : service.size === 'md' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/5' : 'from-secondary/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    index % 2 === 0
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                      : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                  }`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              
              <div className="relative z-10">
                <h3
                  className={`font-bold mb-2 ${
                    service.size === "lg" ? "text-3xl" : "text-xl"
                  }`}
                >
                  {t(`services.cards.${service.key}`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`services.cards.${service.key}_desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            {t("services.process_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["01", "02", "03", "04"].map((step, index) => {
              const title = t(`services.process_steps.${step}.title`)
              const desc = t(`services.process_steps.${step}.desc`)
              return (
              <motion.div
                key={step}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4 select-none">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 -z-10 translate-x-1/2" />
                )}
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container px-4 md:px-6 mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t("services.pricing_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {([
            { key: "starter" as const, highlight: false },
            { key: "growth" as const, highlight: true },
            { key: "enterprise" as const, highlight: false },
          ] as const).map((tier, index) => {
            const tierData = messages[locale].services.pricing_tiers[tier.key]
            return (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col ${
                  tier.highlight
                    ? "border-primary shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)] scale-105 relative z-10"
                    : "border-border opacity-80 hover:opacity-100 transition-opacity"
                }`}
              >
                {tier.highlight && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      {t("services.pricing_popular_badge")}
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {tierData.name}
                  </CardTitle>
                  <div className="text-3xl font-bold mt-4">
                    {tierData.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {tierData.features.map(
                      (feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                      ),
                    )}
                  </ul>
                  <Button className={`w-full ${tier.highlight ? 'bg-primary hover:bg-blue-600' : 'bg-secondary hover:bg-orange-600'}`}>
                    {t("services.pricing_cta")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("services.faq_title")}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              {t("services.faq.q1.question")}
            </AccordionTrigger>
            <AccordionContent>
              {t("services.faq.q1.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              {t("services.faq.q2.question")}
            </AccordionTrigger>
            <AccordionContent>
              {t("services.faq.q2.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">
              {t("services.faq.q3.question")}
            </AccordionTrigger>
            <AccordionContent>
              {t("services.faq.q3.answer")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
