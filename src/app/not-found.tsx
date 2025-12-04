"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/i18n/LanguageProvider"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Glitch Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <motion.div
         className="absolute inset-0 opacity-20"
         animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
         }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         style={{
            backgroundImage: "radial-gradient(circle, #0EA5E9 1px, transparent 1px)",
            backgroundSize: "50px 50px",
         }}
      />

      <div className="text-center max-w-lg relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 relative select-none">
            404
            <motion.span 
                className="absolute top-0 left-0 text-primary opacity-50 mix-blend-screen"
                animate={{ x: [-2, 2, -2], y: [1, -1, 0] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
            >
                404
            </motion.span>
            <motion.span 
                className="absolute top-0 left-0 text-secondary opacity-50 mix-blend-screen"
                animate={{ x: [2, -2, 2], y: [-1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.3 }}
            >
                404
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative -mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {t("notFound.title")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("notFound.description")}
          </p>
          
          <div className="relative max-w-sm mx-auto mb-8 group">
            <Input
              placeholder={t("notFound.search_placeholder")}
              className="pr-10 rounded-full border-primary/20 focus:border-primary transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full rounded-full hover:bg-transparent">
              <Search className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button className="bg-primary hover:bg-blue-600 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105">
                <Home className="mr-2 h-4 w-4" /> {t("notFound.home_button")}
              </Button>
            </Link>
            <Button variant="outline" className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" /> {t("notFound.back_button")}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
