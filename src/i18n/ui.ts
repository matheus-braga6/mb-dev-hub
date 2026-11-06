import type { Locale } from "./config"

const en = {
  nav: {
    projects: "Projects",
    about: "About",
    skills: "Skills",
    certifications: "Learning & Certifications",
    contact: "Contact",
    toggleNavigation: "Toggle navigation"
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Frontend Developer",
    stack: ["React · Next.js · TypeScript", "Vue.js · Nuxt.js", "Web Performance"],
    intro:
      "I'm a frontend developer focused on building scalable, accessible, and high-quality user interfaces using modern web technologies.",
    myProjects: "My Projects",
    downloadResume: "Download Resume",
  },
  projects: {
    title: "My Projects",
    seeMore: "See more",
    seeLess: "See less",
    repository: "Repository",
    liveDemo: "Live Demo",
  },
  about: {
    yearsOfExperience: "Years of Experience",
    projectsCompleted: "Projects Completed",
    education: "Education",
    educationSchool: "Self-Taught Frontend Developer",
    educationPeriod: "2023 – Present",
    softSkillsTitle: "Soft Skills",
    softSkills: [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Ownership",
      "Adaptability",
      "Creativity",
      "Time Management",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (B1)" },
      { name: "Spanish", level: "Intermediate" },
    ],
    experienceTitle: "Experience",
  },
  skills: {
    title: "Skills",
    showAll: "Show all",
    frontend: "Frontend",
    tools: "Tools",
    design: "Design",
  },
  certifications: {
    title: "Learning & Certifications",
    previous: "Previous certificate",
    next: "Next certificate",
  },
  contact: {
    title: "Get in Touch",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    send: "Send Message",
    submitted: "Message Sent",
    error: "Something went wrong. Please email me at mbdevelopment.dev@gmail.com.",
  },
  footer: {
    tagline:
      "Let's connect and build something great together!\nFeel free to reach out about projects, ideas or anything frontend.",
    rightsReserved: "All rights reserved.",
  }
}

export type UIStrings = typeof en

const pt: UIStrings = {
  nav: {
    projects: "Projetos",
    about: "Sobre",
    skills: "Habilidades",
    certifications: "Cursos & Certificações",
    contact: "Contato",
    toggleNavigation: "Abrir menu de navegação"
  },
  hero: {
    greeting: "Olá, eu sou o",
    role: "Desenvolvedor Frontend",
    stack: ["React · Next.js · TypeScript", "Vue.js · Nuxt.js", "Web Performance"],
    intro:
      "Sou um desenvolvedor frontend focado em construir interfaces escaláveis, acessíveis e de alta qualidade utilizando tecnologias web modernas.",
    myProjects: "Meus Projetos",
    downloadResume: "Baixar Currículo",
  },
  projects: {
    title: "Meus Projetos",
    seeMore: "Ver mais",
    seeLess: "Ver menos",
    repository: "Repositório",
    liveDemo: "Ver Demo",
  },
  about: {
    yearsOfExperience: "Anos de Experiência",
    projectsCompleted: "Projetos Concluídos",
    education: "Educação",
    educationSchool: "Desenvolvedor Frontend Autodidata",
    educationPeriod: "2023 – Presente",
    softSkillsTitle: "Habilidades Interpessoais",
    softSkills: [
      "Comunicação",
      "Resolução de Problemas",
      "Trabalho em Equipe",
      "Responsabilidade",
      "Adaptabilidade",
      "Criatividade",
      "Gestão do Tempo",
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário (B1)" },
      { name: "Espanhol", level: "Intermediário" },
    ],
    experienceTitle: "Experiência",
  },
  skills: {
    title: "Habilidades",
    showAll: "Ver todas",
    frontend: "Frontend",
    tools: "Ferramentas",
    design: "Design",
  },
  certifications: {
    title: "Cursos & Certificações",
    previous: "Certificado anterior",
    next: "Próximo certificado",
  },
  contact: {
    title: "Envie Sua Mensagem",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Sua mensagem...",
    send: "Enviar Mensagem",
    submitted: "Mensagem Enviada",
    error: "Algo deu errado. Envie um e-mail para mbdevelopment.dev@gmail.com.",
  },
  footer: {
    tagline:
      "Vamos nos conectar e construir algo incrível juntos!\nFique à vontade para falar comigo sobre projetos, ideias ou qualquer assunto de frontend.",
    rightsReserved: "Todos os direitos reservados.",
  }
}

export const dictionary: Record<Locale, UIStrings> = { en, pt }