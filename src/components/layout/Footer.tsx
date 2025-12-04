"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/i18n/LanguageProvider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tighter">
              4mediagency
            </h3>
            <p className="text-slate-400 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1, y: -3 }}>
                   <Link href="#" className="bg-slate-900 p-2 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-slate-800">
                     <Icon className="h-5 w-5" />
                   </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("footer.navigation")}</h4>
            <ul className="space-y-3">
              {[
                { key: "home", href: "/" },
                { key: "about", href: "/about" },
                { key: "services", href: "/services" },
                { key: "portfolio", href: "/portfolio" },
                { key: "blog", href: "/blog" },
                { key: "contact", href: "/contact" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {t(`footer.nav_items.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {[
                { key: "web" },
                { key: "branding" },
                { key: "social" },
                { key: "content" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    {t(`footer.services_list.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("footer.newsletter_title")}</h4>
            <p className="text-slate-400 mb-4">
              {t("footer.newsletter_subtitle")}
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={t("footer.newsletter_placeholder")} 
                className="bg-slate-900/50 border-slate-800 focus-visible:ring-primary text-white" 
              />
              <Button size="icon" className="bg-secondary hover:bg-orange-600 shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t("footer.location")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>{t("footer.phone")}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} 4mediagency. {t("footer.copyright")}</p>
          <div className="flex items-center gap-2">
            <span>{t("footer.made_with")}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="h-4 w-4 text-blue-500 fill-blue-500" />
            </motion.div>
            <span>&</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
               <Heart className="h-4 w-4 text-orange-500 fill-orange-500" />
            </motion.div>
            <span>{t("footer.in_tunisia")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
