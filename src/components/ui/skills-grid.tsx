import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Skill } from "@/types/skills"

interface SkillsGridProps {
  items: Skill[]
}

export function SkillsGrid({ items }: SkillsGridProps) {
  return (
    <div className="grid gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map(skill => (
        <Card
          key={skill.id}
          className="aspect-square group flex flex-col justify-around items-center gap-4 p-4 bg-blue700 border-blue600 transition-colors hover:border-accent"
        >
          <img
            loading="lazy"
            src={skill.icon}
            alt={skill.name}
            className="
              h-40 w-40 
              object-contain 
              transition-transform duration-300
              group-hover:scale-105
            "
            width={160}
            height={160}
          />

          <CardContent className="p-0 flex flex-col items-center">
            <p className="text-xl font-medium text-center transition-colors group-hover:text-accent">{skill.name}</p>
            <Badge 
              variant="secondary" 
              className="
                h-8! mt-3 
                capitalize 
                rounded-md 
                bg-accent
                text-blue900
                lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
              "
            >
              {skill.category}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
