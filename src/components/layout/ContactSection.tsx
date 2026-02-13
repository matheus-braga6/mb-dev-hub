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
            Send Your Message
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
              <Label htmlFor="name" className="text-base">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
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
              <Label htmlFor="email" className="text-base">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
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
              <Label htmlFor="message" className="text-base">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
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
                "Message Submitted"
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  )
}