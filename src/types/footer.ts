import type { LocalizedText } from "@/i18n/config"

export type FooterLink = {
  label: LocalizedText
  href: string
  external?: boolean
  download?: boolean
}

export type FooterSection = {
  title?: LocalizedText
  links: FooterLink[]
}
