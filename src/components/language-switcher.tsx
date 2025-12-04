"use client"

import { useLanguage } from "@/i18n/LanguageProvider"
import { LOCALES } from "@/i18n/messages"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      <span className="hidden text-xs text-muted-foreground md:inline-block">
        {t("language.label")}
      </span>
      <div className="flex rounded-full border bg-background/60 p-0.5 text-xs">
        {LOCALES.map((code) => (
          <Button
            key={code}
            type="button"
            variant={code === locale ? "default" : "ghost"}
            size="sm"
            className={`h-7 px-2 text-[11px] ${
              code === locale
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setLocale(code)}
          >
            {code.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  )
}


