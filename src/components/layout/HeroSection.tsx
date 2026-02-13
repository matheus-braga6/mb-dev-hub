import { Container } from "./Container"
import { Button } from "@/components/ui/button"
import { SocialIconButton } from "../ui/social-icon-button"
import { GitHubFillIcon } from "@/assets/icons/GitHubFillIcon"
import { LinkedinBoxFillIcon } from "@/assets/icons/LinkedinBoxFillIcon"
import { MailFillIcon } from "@/assets/icons/MailFillIcon"
import { WhatsAppFillIcon } from "@/assets/icons/WhatsAppFillIcon"
import { motion } from "motion/react"
import { heroContentVariants, heroImageVariants, heroLineVariants } from "@/lib/animations/hero"

export function HeroSection () {
  return (
    <section 
      className="
        bg-blue-gradient 
        min-h-svh
        pt-32 sm:pt-28
        flex items-center 
      ">
      <Container>
        <div className="
          w-full mx-auto pb-10
          flex lg:flex-row md:justify-between flex-col-reverse items-center 
          gap-16 md:gap-24 lg:gap-28"
        >
          <motion.div
            className="max-w-xl"
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-[clamp(2.5rem,4.5vw,4.9rem)] font-bold leading-none">
              Hi, I&apos;m<br />Matheus Braga
            </h1>

            <span className="mt-4 block text-sm md:text-base">
              Frontend Developer | React | Vue
            </span>

            <motion.div
              className="mt-8 border-b-4 border-accent"
              variants={heroLineVariants}
              initial="hidden"
              animate="visible"
              style={{ originX: 0 }}
            />

            <p className="mt-8 text-sm md:text-base leading-relaxed">
              I’m a frontend developer focused on building scalable, accessible,
              and high-quality user interfaces using modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button 
                  asChild 
                  className="
                    w-28 h-12
                    bg-blue700 hover:bg-blue600
                    transition-colors
                  "
                >
                  <a 
                    className="cursor-pointer"
                    href="#projects" 
                  >
                    My Projects
                  </a>
                </Button>

              
                <Button 
                  asChild 
                  className="
                    h-12
                    hover:bg-blue700 border-blue600
                    transition-colors
                  " 
                  variant="outline"
                >
                  <a
                    className="hover:cursor-pointer"
                    href="./resume.pdf"
                    download
                  >
                    Download Resume
                  </a>
                </Button>
            </div>

            <div className="mt-4 flex gap-4">
              <SocialIconButton
                href="mailto:mbdevelopment.dev@gmail.com" 
                ariaLabel="Email"
                external={false}
              >
                <MailFillIcon className="h-6 w-6" />
              </SocialIconButton>

              <SocialIconButton
                href="https://www.linkedin.com/in/matheus-braga6/" 
                ariaLabel="LinkedIn"
              >
                <LinkedinBoxFillIcon className="h-6 w-6" />
              </SocialIconButton>

              <SocialIconButton
                href="https://github.com/matheus-braga6" 
                ariaLabel="GitHub"
              >
                <GitHubFillIcon className="h-6 w-6" />
              </SocialIconButton>

              <SocialIconButton 
                href="https://wa.me/+5544999546644" 
                ariaLabel="WhatsApp"
              >
                <WhatsAppFillIcon className="h-6 w-6" />
              </SocialIconButton>
            </div>
          </motion.div>

          <motion.div
            className="relative inline-block"
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              fetchPriority="high"
              src="./matheus.webp"
              alt="Matheus Braga"
              width={420}
              height={420}
              decoding="async"
              loading="eager"
              className="
                relative z-10 
                w-[clamp(300px,26vw,420px)]
                aspect-square
                rounded-2xl 
                object-cover
              "
            />
            <div
              className="absolute inset-4 rounded-2xl blur-xl bg-accent"
            ></div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}