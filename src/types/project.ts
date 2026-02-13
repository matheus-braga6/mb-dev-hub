export type ProjectType = "personal" | "professional"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  type: ProjectType
  repoUrl?: string
  demoUrl?: string
}