import { useLanguage } from "@/i18n/LanguageContext"
import { Container } from "@/components/layout/Container"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SkillsGrid } from "@/components/ui/skills-grid"
import { skills } from "@/data/skills"
import { motion } from "framer-motion"
import { skillsTitleVariants, skillsTabContent, skillsContainerVariants } from "@/lib/animations/skills"

export function SkillsSection () {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-12 bg-blue800">
      <Container>
        <motion.h2 
          className="text-4xl font-bold mb-16 uppercase text-center"
          variants={skillsTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.skills.title}
        </motion.h2>

        <motion.div
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Tabs defaultValue="all">
            <TabsList className="mx-auto mb-10 flex flex-wrap w-fit gap-2 group-data-[orientation=horizontal]/tabs:h-auto" variant="line">
              <TabsTrigger 
                value="all" 
                className="
                  h-10
                  cursor-pointer 
                  data-[state=active]:bg-blue900! bg-blue800 hover:bg-blue900!
                  transition-colors
                "
              >
                {t.skills.showAll}
              </TabsTrigger>
              <TabsTrigger 
                value="frontend" 
                className="
                  h-10
                  cursor-pointer 
                  data-[state=active]:bg-blue900! bg-blue800 hover:bg-blue900!
                  transition-colors
                "
              >
                {t.skills.frontend}
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="
                  h-10
                  cursor-pointer 
                  data-[state=active]:bg-blue900! bg-blue800 hover:bg-blue900!
                  transition-colors
                "
              >
                {t.skills.tools}
              </TabsTrigger>
              <TabsTrigger 
                value="design" 
                className="
                  h-10
                  cursor-pointer 
                  data-[state=active]:bg-blue900! bg-blue800 hover:bg-blue900!
                  transition-colors
                "
              >
                {t.skills.design}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <motion.div
                variants={skillsTabContent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SkillsGrid items={skills} />
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend">
              <motion.div
                variants={skillsTabContent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SkillsGrid
                  items={skills.filter(skill => skill.category === "frontend")}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="tools">
              <motion.div
                variants={skillsTabContent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SkillsGrid
                  items={skills.filter(skill => skill.category === "tools")}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="design">
              <motion.div
                variants={skillsTabContent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SkillsGrid
                  items={skills.filter(skill => skill.category === "design")}
                />
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  )
}