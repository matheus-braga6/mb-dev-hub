export type SkillCategory = "frontend" | "tools" | "design"

export interface Skill {
  id: number
  name: string
  category: SkillCategory
  icon: string
}