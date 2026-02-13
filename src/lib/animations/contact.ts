import type { Variants } from "motion/react"

export const contactContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn"
    }
  }
}
