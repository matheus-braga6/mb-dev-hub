import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "merrygo",
    title: "MerryGo Carousel",
    description: {
      en: "A lightweight and high-performance JavaScript carousel library built with vanilla JavaScript. Designed for modern web projects, it focuses on simplicity, flexibility, and smooth interactions. The library is distributed via npm and structured for easy integration, customization, and scalability without relying on external frameworks.",
      pt: "Uma biblioteca de carrossel em JavaScript leve e de alta performance, construída com JavaScript puro. Projetada para projetos web modernos, foca em simplicidade, flexibilidade e interações fluidas. A biblioteca é distribuída via npm e estruturada para fácil integração, personalização e escalabilidade sem depender de frameworks externos.",
    },
    image: "./projects/merrygo.webp",
    technologies: ["JavaScript", "HTML", "CSS"],
    type: "personal",
    repoUrl: "https://github.com/matheus-braga6/merrygo",
    demoUrl: "https://matheus-braga6.github.io/merrygo/",
  },
  {
    id: "increazy-dashboard",
    title: "Increazy Dashboard",
    description: {
      en: "An internal dashboard developed at Increazy, where I was responsible for the front-end implementation. Built with Vue.js and Nuxt.js, the project uses Pinia for state management, i18n for internationalization, TypeScript for type safety, and SCSS for styling, focusing on scalability, maintainability, and a clean developer experience.",
      pt: "Um dashboard interno desenvolvido na Increazy, onde fui responsável pela implementação do front-end. Construído com Vue.js e Nuxt.js, o projeto utiliza Pinia para gerenciamento de estado, i18n para internacionalização, TypeScript para segurança de tipos e SCSS para estilização, focando em escalabilidade, manutenibilidade e uma boa experiência de desenvolvimento.",
    },
    image: "./projects/increazy-dash.webp",
    technologies: ["JavaScript", "TypeScript", "Vue.js", "Nuxt.js", "Pinia", "i18n", "HTML", "SCSS"],
    type: "professional",
    demoUrl: "https://dashboard.increazy.com/",
  },
  {
    id: "ajinomoto-ecommerce",
    title: "Ajinomoto E-commerce",
    description: {
      en: "A full-featured e-commerce platform developed while working at Increazy, where I was responsible for the front-end implementation. The project includes CMS integrations for dynamic content management, a scalable architecture, and a strong focus on performance, usability, and maintainability.",
      pt: "Uma plataforma de e-commerce completa desenvolvida durante meu trabalho na Increazy, onde fui responsável pela implementação do front-end. O projeto inclui integrações com CMS para gerenciamento dinâmico de conteúdo, uma arquitetura escalável e forte foco em performance, usabilidade e manutenibilidade.",
    },
    image: "./projects/ajinomoto.webp",
    technologies: ["JavaScript", "Vue.js", "HTML", "CSS", "Twig"],
    type: "professional",
    demoUrl: "https://loja.ajinomoto.com.br/",
  },
  {
    id: "react-assembly",
    title: "React Assembly: Endgame",
    description: {
      en: "A React-based word guessing game called Assembly: Endgame, built with HTML and CSS. Players use programming languages as lives to guess the correct word and prevent Assembly from taking over the world. The project emphasizes interactive gameplay, responsive design, and a fun, engaging user experience.",
      pt: "Um jogo de adivinhação de palavras em React chamado Assembly: Endgame, construído com HTML e CSS. Os jogadores usam linguagens de programação como vidas para adivinhar a palavra correta e impedir que o Assembly domine o mundo. O projeto enfatiza jogabilidade interativa, design responsivo e uma experiência divertida e envolvente.",
    },
    image: "./projects/assembly-endgame.webp",
    technologies: ["React", "HTML", "CSS"],
    type: "personal",
    repoUrl: "https://github.com/matheus-braga6/react-assembly-endgame",
    demoUrl: "https://matheus-braga6.github.io/react-assembly-endgame/",
  },
  {
    id: "increazy-uikit",
    title: "Increazy UI Kit",
    description: {
      en: "A reusable UI Kit developed at Increazy, built with HTML, CSS, Vanilla JavaScript, and Twig. The project focuses on consistency, scalability, and component reuse, providing a solid foundation for building interfaces across multiple projects.",
      pt: "Um UI Kit reutilizável desenvolvido na Increazy, construído com HTML, CSS, JavaScript puro e Twig. O projeto foca em consistência, escalabilidade e reutilização de componentes, oferecendo uma base sólida para a construção de interfaces em diversos projetos.",
    },
    image: "./projects/increazy-ui.webp",
    technologies: ["HTML", "SCSS", "JavaScript", "Twig", "Docussaurus"],
    type: "professional",
    demoUrl: "https://ui.increazy.com/",
  },
  {
    id: "automizei-lp",
    title: "Automizei Landing Page",
    description: {
      en: "A high-conversion landing page developed for Automizei while working at Increazy, where I was responsible for the front-end implementation. Built using the same technologies as the e-commerce projects, it features CMS integrations, a scalable structure, and a strong focus on performance, clarity, and conversion.",
      pt: "Uma landing page de alta conversão desenvolvida para a Automizei durante meu trabalho na Increazy, onde fui responsável pela implementação do front-end. Construída com as mesmas tecnologias dos projetos de e-commerce, conta com integrações de CMS, uma estrutura escalável e forte foco em performance, clareza e conversão.",
    },
    image: "./projects/automizei.webp",
    technologies: ["JavaScript", "HTML", "CSS", "Twig"],
    type: "professional",
    demoUrl: "https://www.automizei.com/",
  },
  {
    id: "acamargo-ecommerce",
    title: "A. Camargo E-commerce",
    description: {
      en: "A full-featured e-commerce platform developed while working at Increazy, where I was responsible for the front-end implementation. The project includes CMS integrations for dynamic content management, a scalable architecture, and a strong focus on performance, usability, and maintainability.",
      pt: "Uma plataforma de e-commerce completa desenvolvida durante meu trabalho na Increazy, onde fui responsável pela implementação do front-end. O projeto inclui integrações com CMS para gerenciamento dinâmico de conteúdo, uma arquitetura escalável e forte foco em performance, usabilidade e manutenibilidade.",
    },
    image: "./projects/acamargo.webp",
    technologies: ["JavaScript", "Vue.js", "HTML", "CSS", "Twig"],
    type: "professional",
    demoUrl: "https://www.acamargo.com/",
  },
  {
    id: "casa-do-produtor-ecommerce",
    title: "Casa do Produtor E-commerce",
    description: {
      en: "A full-featured e-commerce platform developed while working at Increazy, where I was responsible for the front-end implementation. The project includes CMS integrations for dynamic content management, a scalable architecture, and a strong focus on performance, usability, and maintainability.",
      pt: "Uma plataforma de e-commerce completa desenvolvida durante meu trabalho na Increazy, onde fui responsável pela implementação do front-end. O projeto inclui integrações com CMS para gerenciamento dinâmico de conteúdo, uma arquitetura escalável e forte foco em performance, usabilidade e manutenibilidade.",
    },
    image: "./projects/casa-do-produtor.webp",
    technologies: ["JavaScript", "Vue.js", "HTML", "CSS", "Twig"],
    type: "professional",
    demoUrl: "https://www.casadoprodutor.com.br/",
  },
  {
    id: "react-chef-ai",
    title: "React Chef AI",
    description: {
      en: "A web application developed with React, HTML, and CSS, allowing users to enter ingredients and receive AI-generated recipes. The project emphasizes interactivity, responsive design, and a smooth, user-friendly experience.",
      pt: "Uma aplicação web desenvolvida com React, HTML e CSS, que permite aos usuários inserir ingredientes e receber receitas geradas por IA. O projeto enfatiza interatividade, design responsivo e uma experiência fluida e intuitiva.",
    },
    image: "./projects/chef-ai.webp",
    technologies: ["React", "HTML", "CSS"],
    type: "personal",
    repoUrl: "https://github.com/matheus-braga6/react-chef-ai",
    demoUrl: "https://matheus-braga6.github.io/react-chef-ai/",
  },
  {
    id: "react-tenzies",
    title: "React Tenzies Game",
    description: {
      en: "A dice game built with React, HTML, and CSS, where players aim to match dice combinations. The project emphasizes dynamic interactions, responsive design, and engaging user experience.",
      pt: "Um jogo de dados construído com React, HTML e CSS, no qual os jogadores buscam combinar os dados. O projeto enfatiza interações dinâmicas, design responsivo e uma experiência de usuário envolvente.",
    },
    image: "./projects/tenzies.webp",
    technologies: ["React", "HTML", "CSS"],
    type: "personal",
    repoUrl: "https://github.com/matheus-braga6/react-tenzies-game",
    demoUrl: "https://matheus-braga6.github.io/react-tenzies-game/",
  }
]