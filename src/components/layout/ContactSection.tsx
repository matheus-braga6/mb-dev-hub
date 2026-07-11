import { useLanguage } from "@/i18n/LanguageContext"
import { Container } from "@/components/layout/Container"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from '@formspree/react';
import { LoaderLineIcon } from "@/assets/icons/LoaderLineIcon"
import { motion } from "framer-motion"
import { contactContainerVariants } from "@/lib/animations/contact"


export function ContactSection() {
  const { t } = useLanguage()

  const [state, handleSubmit] = useForm("xwvnpvwg");

  return (
    <section id="contact" className="py-12 bg-blue900">
      <Container>
        <motion.div
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-16 uppercase text-center">
            {t.contact.title}
          </h2>
        
          <form 
            onSubmit={handleSubmit}
            className="
              max-w-xl mx-auto 
              flex flex-col gap-6 
              bg-blue800 
              shadow=2xl
              p-6 
              border border-blue600 rounded-3xl
            "
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">{t.contact.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                placeholder={t.contact.namePlaceholder}
                className="
                  h-12
                  bg-blue800
                  border-blue600
                  placeholder:text-slate-500
                  focus-visible:ring-0
                "
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">{t.contact.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="
                  h-12
                  bg-blue800
                  border-blue600
                  placeholder:text-slate-500
                  focus-visible:ring-0
                "
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">{t.contact.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.contact.messagePlaceholder}
                className="
                  bg-blue800
                  border-blue600
                  placeholder:text-slate-500
                  focus-visible:ring-0
                "
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="
                h-12 
                bg-blue700 
                border border-blue600 hover:border-accent 
                hover:text-accent
                transition-colors 
                cursor-pointer 
                flex items-center justify-center
              "
            >
              {state.submitting ? (
                <>
                  <LoaderLineIcon className="size-6 animate-spin" />
                </>
              ) : state.succeeded ? (
                t.contact.submitted
              ) : (
                t.contact.send
              )}
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  )
}