import type { FooterSection } from "@/types/footer"
import { resumeFile } from "@/data/resume"

export const quickLinks: FooterSection = {
  title: {
    en: "Quick Links",
    pt: "Links Rápidos",
  },
  links: [
    { label: { en: "Home", pt: "Início" }, href: "#" },
    { label: { en: "Projects", pt: "Projetos" }, href: "#projects" },
    { label: { en: "About", pt: "Sobre" }, href: "#about" },
    { label: { en: "Skills", pt: "Habilidades" }, href: "#skills" },
    { label: { en: "Learning & Certifications", pt: "Cursos & Certificações" }, href: "#certifications" },
    { label: { en: "Contact", pt: "Contato" }, href: "#contact" },
    {
      label: { en: "Download Resume", pt: "Baixar Currículo" },
      href: resumeFile,
      download: true,
      external: true,
    },
  ],
}

export const contactLinks: FooterSection = {
  title: {
    en: "Contact",
    pt: "Contato",
  },
  links: [
    {
      label: {
        en: "mbdevelopment.dev@gmail.com",
        pt: "mbdevelopment.dev@gmail.com",
      },
      href: "mailto:mbdevelopment.dev@gmail.com",
      external: true,
    },
    {
      label: {
        en: "+55 44 99954-6644",
        pt: "+55 44 99954-6644",
      },
      href: "https://wa.me/5544999546644",
      external: true,
    },
  ],
}