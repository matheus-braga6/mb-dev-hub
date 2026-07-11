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
    tagline: "Frontend Developer | TypeScript | React | Vue.js",
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
      { name: "English", level: "B1 (Technical Reading & Professional Communication)" },
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
  },
  contact: {
    title: "Send Your Message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    send: "Send Message",
    submitted: "Message Submitted",
  },
  footer: {
    tagline:
      "Let's connect and build something great together!\nI'm always open to new opportunities and exciting challenges.",
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
    tagline: "Desenvolvedor Frontend | TypeScript | React | Vue.js",
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
    education: "Formação",
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
      { name: "Inglês", level: "B1 (Leitura Técnica & Comunicação Profissional)" },
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
  },
  footer: {
    tagline:
      "Vamos nos conectar e construir algo incrível juntos!\nEstou sempre aberto a novas oportunidades e desafios.",
    rightsReserved: "Todos os direitos reservados.",
  }
}

export const dictionary: Record<Locale, UIStrings> = { en, pt }