export type Locale = "en" | "pt"
export const defaultLocale: Locale = "en"
export type LocalizedText = Record<Locale, string>

export const STORAGE_KEY = "mb-dev-hub:locale"