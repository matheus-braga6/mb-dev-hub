import type { Variants } from "motion/react"

const easeOutCubic: [number, number, number, number] = [0.25, 0.8, 0.25, 1]

export const heroContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: easeOutCubic
    }
  }
}

export const heroLineVariants: Variants = {
  hidden: {
    scaleX: 0
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: easeOutCubic,
      delay: 0.4
    }
  }
}

export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: easeOutCubic,
      delay: 0.1
    }
  }
}