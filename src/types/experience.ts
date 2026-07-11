import type { LocalizedText } from "@/i18n/config"

export interface Experience {
  role: LocalizedText
  company?: string
  location?: LocalizedText
  period: LocalizedText
  responsibilities: LocalizedText[]
}
