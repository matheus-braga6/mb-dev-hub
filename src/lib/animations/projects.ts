import type { Variants } from "motion/react"

const easeOutCubic: [number, number, number, number] = [0.25, 0.8, 0.25, 1]

export const projectsTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: easeOutCubic
    }
  }
}

export const projectsContainerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 2.5,
      ease: easeOutCubic
    }
  }
}