import type { FooterSection } from "@/types/footer"

export const quickLinks: FooterSection = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects"},
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Learning & Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
    {
      label: "Download Resume",
      href: "./resume.pdf",
      download: true,
      external: true,
    },
  ],
}

export const contactLinks: FooterSection = {
  title: "Contact",
  links: [
    {
      label: "mbdevelopment.dev@gmail.com",
      href: "mailto:mbdevelopment.dev@gmail.com",
      external: true,
    },
    {
      label: "+55 44 99954-6644",
      href: "https://wa.me/5544999546644",
      external: true,
    },
  ],
}