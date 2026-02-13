import type { Project } from "@/types/project"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techColors: Record<string, string> = {
    React: "bg-[#00d8ff] text-black",
    "Vue.js": "bg-[#0c9400] text-white",
    "Nuxt.js": "bg-[#0c1640] text-white",
    TypeScript: "bg-[#00346d] text-white",
    JavaScript: "bg-[#f7df1e] text-black",
    HTML: "bg-[#e44d26] text-white",
    CSS: "bg-[#1172b8] text-white",
    SCSS: "bg-[#d1629b] text-white",
    Twig: "bg-[#bacf29] text-black",
    i18n: "bg-[#3fcece] text-white",
    Pinia: "bg-[#ffcf4c] text-black",
    Docussaurus: "bg-[#44ce64] text-black"
  }

  return (
    <Card className="
      group
      h-full 
      max-w-md sm:max-w-none
      overflow-hidden 
      py-0 
      mx-auto sm:mx-0
      gap-0 
      rounded-2xl 
      bg-gray50 
      border-none"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover object-top
            transition-transform duration-300
            group-hover:scale-105 group-hover:blur-[1px]
          "        
          width={400}
          height={320}
        />

        <div className="
          absolute inset-0
          bg-linear-to-t from-black/70 via-black/20 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        " ></div>

        <div
          className="
            custom-scrollbar
            absolute bottom-0 left-0 right-0
            flex gap-2 overflow-x-auto no-scrollbar p-2
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >          
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className={`shrink-0 rounded-sm ${techColors[tech] || "bg-blue300 text-white"}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <CardHeader className="pb-6 px-0 gap-0">
          <h3 className="text-2xl font-semibold text-blue900">
            {project.title}
          </h3>
        </CardHeader>

        <CardContent className="pt-0 px-0">
          <p className="text-sm text-blue900">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="mt-auto flex gap-3 px-0 pt-6">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-10 px-4 flex items-center justify-center
                rounded-md text-sm font-semibold
                bg-blue900 hover:bg-blue600
                transition-colors
              "
            >
              Repository
            </a>
          )}

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-10 px-4 flex items-center justify-center
              rounded-md text-sm font-semibold
              bg-blue600 hover:bg-blue900
              transition-colors
            "
          >
            Live Demo
          </a>
        </CardFooter>
      </div>
    </Card>
  )
}
