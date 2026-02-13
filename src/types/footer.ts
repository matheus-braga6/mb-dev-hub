export type FooterLink = {
  label: string
  href: string
  external?: boolean
  download?: boolean
}

export type FooterSection = {
  title?: string
  links: FooterLink[]
}