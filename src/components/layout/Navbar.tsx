"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, ArrowRight, Home, User, Briefcase, FolderOpen, FileText, Mail, Sparkles } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

import { CommandPalette } from "@/components/command-palette"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/i18n/LanguageProvider"

const navItems = [
  { key: "home", href: "/", icon: Home },
  { key: "about", href: "/about", icon: User },
  { key: "services", href: "/services", icon: Briefcase },
  { key: "portfolio", href: "/portfolio", icon: FolderOpen },
  { key: "blog", href: "/blog", icon: FileText },
  { key: "contact", href: "/contact", icon: Mail },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const { t } = useLanguage()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const pathname = usePathname()

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            4mediagency
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA & Theme */}
        <div className="hidden md:flex items-center gap-4">
          <CommandPalette />
          <LanguageSwitcher />
          <ModeToggle />
          <Link href="/contact">
            <Button className="bg-primary hover:bg-blue-600 text-white rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95">
              {t("nav.cta")}
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative h-10 w-10 rounded-full hover:bg-primary/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          
          {/* Mobile Menu Content */}
          <SheetContent 
            side="right" 
            hideCloseButton
            className="p-0 border-0 bg-gradient-to-b from-background via-background to-background/95"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-border/30">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                  <span className="text-white font-black text-lg">4</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  mediagency
                </span>
              </Link>
              <SheetClose asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>

            {/* Navigation */}
            <div className="relative z-10 flex flex-col h-[calc(100vh-81px)]">
              <nav className="flex-1 px-4 py-4 overflow-y-auto">
                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                            isActive 
                              ? "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary" 
                              : "text-foreground hover:bg-muted/50"
                          )}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div 
                              layoutId="activeNav"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"
                            />
                          )}
                          
                          {/* Icon */}
                          <div className={cn(
                            "flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 shrink-0",
                            isActive 
                              ? "bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/20" 
                              : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}>
                            <Icon className="h-[18px] w-[18px]" />
                          </div>
                          
                          {/* Label */}
                          <span className={cn(
                            "text-[15px] font-medium flex-1 transition-colors",
                            isActive ? "text-primary" : "group-hover:text-primary"
                          )}>
                            {t(`nav.${item.key}`)}
                          </span>
                          
                          {/* Arrow */}
                          <ArrowRight className={cn(
                            "h-4 w-4 transition-all duration-300 shrink-0",
                            isActive 
                              ? "text-primary opacity-100" 
                              : "text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          )} />
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </nav>

              {/* Footer */}
              <div className="px-4 pb-5 pt-3 border-t border-border/30 space-y-3 bg-muted/20 backdrop-blur-sm">
                {/* Controls */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CommandPalette />
                    <ModeToggle />
                  </div>
                  <LanguageSwitcher />
                </div>

                {/* CTA Button */}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    {t("nav.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Copyright */}
                <p className="text-center text-[11px] text-muted-foreground/60">
                  © {new Date().getFullYear()} 4mediagency · Tunisia
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
