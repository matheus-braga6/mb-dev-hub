import {
  createContext,
  useContext,
  useEffect,   // 👈 novo
  useState,
} from "react"
import {
  defaultLocale,
  STORAGE_KEY,          // 👈 novo
  type Locale,
  type LocalizedText,
} from "./config"
import { dictionary, type UIStrings } from "./ui"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UIStrings
  tl: (value: LocalizedText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// 👇 NOVO: decide o idioma inicial na ordem: 1º salvo → 2º navegador → 3º padrão
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "en" || stored === "pt") {
    return stored
  }

  const browserLang = window.navigator.language.toLowerCase()
  return browserLang.startsWith("pt") ? "pt" : defaultLocale
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 👇 MUDOU: passamos a FUNÇÃO (sem parênteses) — inicialização preguiçosa
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  // 👇 NOVO: toda vez que o idioma muda, salva no navegador e atualiza o <html lang>
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const tl = (value: LocalizedText) => value[locale]

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: dictionary[locale],
    tl,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage precisa estar dentro de um LanguageProvider")
  }

  return context
}