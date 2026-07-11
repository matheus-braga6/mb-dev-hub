import { useLanguage } from "@/i18n/LanguageContext"
import { FlagBRIcon } from "@/assets/icons/FlagBRIcon"
import { FlagUSIcon } from "@/assets/icons/FlagUSIcon"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Botão Inglês */}
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label="Switch to English"
        aria-pressed={locale === "en"}
        className={cn(
          "size-7 shrink-0 overflow-hidden rounded-full cursor-pointer",
          "ring-2 transition-all duration-200 hover:scale-110",
          locale === "en"
            ? "ring-accent opacity-100"
            : "ring-transparent opacity-50 hover:opacity-100"
        )}
      >
        <FlagUSIcon className="block size-full" />
      </button>

      {/* Botão Português */}
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-label="Mudar para Português"
        aria-pressed={locale === "pt"}
        className={cn(
          "size-7 shrink-0 overflow-hidden rounded-full cursor-pointer",
          "ring-2 transition-all duration-200 hover:scale-110",
          locale === "pt"
            ? "ring-accent opacity-100"
            : "ring-transparent opacity-50 hover:opacity-100"
        )}
      >
        <FlagBRIcon className="block size-full" />
      </button>
    </div>
  )
}
