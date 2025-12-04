"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

import { CommandPalette } from "@/components/command-palette"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/i18n/LanguageProvider"

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
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
          <Button className="bg-primary hover:bg-blue-600 text-white rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95">
            {t("nav.cta")}
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4mediagency
              </span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-[calc(100vh-80px)]">
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium transition-all duration-200 group",
                        pathname === item.href 
                          ? "bg-primary/10 text-primary" 
                          : "text-foreground hover:bg-muted hover:text-primary"
                      )}
                    >
                      <span>{t(`nav.${item.key}`)}</span>
                      <ArrowRight className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        pathname === item.href 
                          ? "text-primary" 
                          : "text-muted-foreground group-hover:translate-x-1 group-hover:text-primary"
                      )} />
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-border/50 space-y-6 bg-muted/30">
                {/* Controls Row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CommandPalette />
                    <ModeToggle />
                  </div>
                  <LanguageSwitcher />
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary hover:bg-blue-600 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  {t("nav.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Social/Copyright */}
                <p className="text-center text-xs text-muted-foreground">
                  © 2024 4mediagency. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
