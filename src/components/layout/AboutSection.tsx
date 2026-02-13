import { Container } from "./Container"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBoxFillIcon } from "@/assets/icons/CodeBoxFillIcon"
import { WindowFillIcon } from "@/assets/icons/WindowFillIcon"
import { GraduationCapIcon } from "@/assets/icons/GraduationCapIcon"
import { ShakeHandsLineIcon } from "@/assets/icons/ShakeHandsLine"
import { BriefCaseLineIcon } from "@/assets/icons/BriefCaseLineIcon"
import { experiences } from "@/data/experiences"
import { motion } from "motion/react"
import {
  aboutContainerVariants,
  aboutColumnLeftVariants,
  aboutColumnRightVariants,
  aboutCardVariants,
  badgeContainerVariants,
  badgeVariants
} from "@/lib/animations/about"

export function AboutSection () {
  const softSkills: string[] = [
    "Communication",
    "Problem Solving",
    "Teamwork",
    "Ownership",
    "Adaptability",
    "Creativity",
    "Time Management"
  ]

  return (
    <section id="about" className="bg-blue800 py-12 overflow-x-hidden">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-7 md:grid-cols-2"
          variants={aboutContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={aboutColumnLeftVariants} 
            className="p-6 flex flex-col gap-8 bg-blue900 shadow-2xl rounded-3xl border border-blue600"
          >
            <div className="grid lg:grid-cols-2 gap-4">
              <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600 flex-row items-center">
                <CodeBoxFillIcon className="h-12 w-12 shrink-0"/>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold">2+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600 flex-row items-center">
                <WindowFillIcon className="h-12 w-12 shrink-0"/>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold">30+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600">
              <CardHeader className="w-max p-0 gap-0">
                <div className="flex items-center gap-3">
                  <GraduationCapIcon className="h-8 w-8 shrink-0" />
                  <CardTitle>
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      Education
                    </h3>
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <p className="font-medium">
                  Self-Taught Frontend Developer
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  2023 – Present
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600">
              <CardHeader className="p-0 gap-0">
                <div className="flex items-center gap-3">
                  <ShakeHandsLineIcon className="h-8 w-8 shrink-0" />
                  <CardTitle>
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      Soft Skills
                    </h3>
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                >
                  {softSkills.map((skill) => (
                    <motion.div key={skill} variants={badgeVariants}>
                      <Badge variant="secondary" className="h-10 rounded-sm bg-blue700 text-sm border-blue600">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            variants={aboutColumnRightVariants}
            className="p-6 flex flex-col gap-8 bg-blue900 shadow-2xl rounded-3xl border border-blue600"
          > 
            <motion.div variants={aboutCardVariants}>
              <Card className="p-6 gap-4 shadow-md shadow-blue800 h-full rounded-lg border-blue600">
                <CardHeader className="p-0 gap-0">
                  <div className="flex items-center gap-3">
                    <BriefCaseLineIcon className="h-8 w-8 shrink-0" />
                    <CardTitle>
                      <h3 className="text-sm font-semibold uppercase tracking-wider">
                        Experience
                      </h3>
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-4">
                  {experiences.map((exp) => (
                    <article key={`${exp.role}-${exp.period}`}>
                      <h4 className="text-base font-medium">
                        {exp.role}
                      </h4>

                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.company && `${exp.company} · `}
                        {exp.location && `${exp.location} · `}
                        {exp.period}
                      </p>

                      <ul className="list-disc flex flex-col py-4 pl-5 gap-1 text-sm">
                        {exp.responsibilities.map((item) => (
                          <li 
                            key={item}
                            className="text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}