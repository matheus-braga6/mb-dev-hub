import type { LocalizedText } from "@/i18n/config"

export type ProjectType = "personal" | "professional"
export interface Project {
  id: string
  title: string
  description: LocalizedText
  image: string
  technologies: string[]
  type: ProjectType
  repoUrl?: string
  demoUrl?: string
}