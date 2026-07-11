import { useLanguage } from "@/i18n/LanguageContext"
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
import { TranslateLineIcon } from "@/assets/icons/TranslateLineIcon"
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
  const { t, tl } = useLanguage()

  const softSkills = t.about.softSkills

  return (
    <section id="about" className="bg-blue800 py-12 overflow-x-hidden">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-7"
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
                  <p className="text-3xl font-bold">2.5+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.about.yearsOfExperience}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600 flex-row items-center">
                <WindowFillIcon className="h-12 w-12 shrink-0"/>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold">30+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.about.projectsCompleted}
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
                      {t.about.education}
                    </h3>
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <p className="font-medium">
                  {t.about.educationSchool}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.about.educationPeriod}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600">
              <CardHeader className="p-0 gap-0">
                <div className="flex items-center gap-3">
                  <ShakeHandsLineIcon className="h-8 w-8 shrink-0" />
                  <CardTitle>
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      {t.about.softSkillsTitle}
                    </h3>
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                >
                  {softSkills.map((skill, index) => (
                    <motion.div key={index} variants={badgeVariants}>
                      <Badge variant="secondary" className="h-10 rounded-sm bg-blue700 text-sm border-blue600">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <Card className="p-6 gap-4 shadow-md shadow-blue800 h-max rounded-lg border-blue600">
              <CardHeader className="w-max p-0 gap-0">
                <div className="flex items-center gap-3">
                  <TranslateLineIcon className="h-8 w-8 shrink-0" />
                  <CardTitle>
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      {t.about.languagesTitle}
                    </h3>
                  </CardTitle>
                </div>
              </CardHeader>

              {t.about.languages.map((language) => (
                <CardContent key={language.name} className="p-0">
                  <p className="font-medium">{language.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{language.level}</p>
                </CardContent>
              ))}

            </Card>
          </motion.div>

          <motion.div 
            variants={aboutColumnRightVariants}
            className="p-6 flex flex-col gap-8 bg-blue900 shadow-2xl rounded-3xl border border-blue600"
          > 
            <motion.div 
              variants={aboutCardVariants}
              className="h-full"
            >
              <Card className="p-6 gap-4 shadow-md shadow-blue800 h-full rounded-lg border-blue600">
                <CardHeader className="p-0 gap-0">
                  <div className="flex items-center gap-3">
                    <BriefCaseLineIcon className="h-8 w-8 shrink-0" />
                    <CardTitle>
                      <h3 className="text-sm font-semibold uppercase tracking-wider">
                        {t.about.experienceTitle}
                      </h3>
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-4">
                  {experiences.map((exp, index) => (
                    <article 	key={index}>
                      <h4 className="text-base font-medium">
                        {tl(exp.role)}
                      </h4>

                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.company && `${exp.company} · `}
                        {exp.location && `${tl(exp.location)} · `}
                        {tl(exp.period)}
                      </p>

                      <ul className="list-disc flex flex-col py-4 pl-5 gap-1 text-sm">
                        {exp.responsibilities.map((item, idx) => (
                          <li 
                            key={idx}
                            className="text-sm"
                          >
                            {tl(item)}
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