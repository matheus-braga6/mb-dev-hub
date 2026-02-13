import { useState, useRef, useEffect } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"
import { AnimatePresence, motion } from "framer-motion"
import { projectsTitleVariants, projectsContainerVariants } from "@/lib/animations/projects"

function useGridColumns() {
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    function updateColumns() {
      const width = window.innerWidth

      if (width >= 1024) {
        setColumns(3)
      } else if (width >= 640) {
        setColumns(2)
      } else {
        setColumns(1)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)

    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  return columns
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const columns = useGridColumns()
  const initialVisibleCount =
    columns === 1 ? 2 :
    columns === 2 ? 4 :
    3

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, initialVisibleCount)

  function handleToggle() {
    setShowAll((prev) => {
      const next = !prev

      if (prev === true) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 50)
      }

      return next
    })
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 bg-blue900 min-h-screen flex items-center justify-center"
    >
      <Container>
        <motion.h2
          className="text-4xl font-bold mb-16 uppercase text-center"
          variants={projectsTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          variants={projectsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 text-center">
          <Button
            className="h-12 cursor-pointer bg-blue700 hover:bg-blue600 transition-colors"
             onClick={handleToggle}
          >
            {showAll ? "See less" : "See more"}
          </Button>
        </div>
      </Container>
    </section>
  )
}