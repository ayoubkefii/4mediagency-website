"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useAnimation } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-md border-primary/50 hover:bg-primary hover:text-white shadow-lg group relative overflow-hidden"
        onClick={scrollToTop}
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-primary/20"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-primary"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <ArrowUp className="h-5 w-5 relative z-10 transition-transform group-hover:-translate-y-1" />
      </Button>
    </motion.div>
  )
}
