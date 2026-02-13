import type { Variants } from "motion/react"

const easeOutCubic: [number, number, number, number] = [0.25, 0.8, 0.25, 1]

export const skillsTitleVariants: Variants = {
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

export const skillsContainerVariants: Variants = {
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

export const skillsTabContent: Variants = {
  initial: { 
    opacity: 0,
    y: 10 
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}