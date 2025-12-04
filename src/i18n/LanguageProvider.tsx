"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react"
import { DEFAULT_LOCALE, LOCALES, Locale, getMessage } from "./messages"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  availableLocales: Locale[]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

const STORAGE_KEY = "4media_locale"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, internalSetLocale] = useState<Locale>(DEFAULT_LOCALE)

  // Load saved locale once on mount
  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && LOCALES.includes(stored)) {
      internalSetLocale(stored)
    } else {
      // Try to detect from browser
      const browserLang =
        navigator.language?.split("-")[0]?.toLowerCase() ?? DEFAULT_LOCALE
      const detected =
        (LOCALES.find((l) => l === browserLang) as Locale | undefined) ??
        DEFAULT_LOCALE
      internalSetLocale(detected)
      window.localStorage.setItem(STORAGE_KEY, detected)
    }
  }, [])

  // Keep <html> attributes in sync (dir + lang)
  useEffect(() => {
    if (typeof document === "undefined") return
    const html = document.documentElement
    html.lang = locale
    html.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    internalSetLocale(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  const t = useCallback(
    (key: string) => {
      return getMessage(locale, key)
    },
    [locale],
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      availableLocales: LOCALES,
    }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}


