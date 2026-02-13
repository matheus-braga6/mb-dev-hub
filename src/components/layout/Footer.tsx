import { Container } from "@/components/layout/Container"
import { quickLinks, contactLinks } from "@/data/footer"
import { SocialIconButton } from "../ui/social-icon-button"
import { GitHubFillIcon } from "@/assets/icons/GitHubFillIcon"
import { LinkedinBoxFillIcon } from "@/assets/icons/LinkedinBoxFillIcon"
import { MailFillIcon } from "@/assets/icons/MailFillIcon"
import { WhatsAppFillIcon } from "@/assets/icons/WhatsAppFillIcon"

export function Footer() {
  return (
    <footer className="bg-blue900">
      <div className="w-full bg-blue800 border border-blue600 rounded-t-[50px]">
        <Container>
          <div className="grid gap-7 lg:gap-12 py-16 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Matheus Braga</h3>
              <p className="text-slate-400 text-sm max-w-sm">
                Let’s connect and build something great together.<br />
                I’m always open to new opportunities and exciting challenges.
              </p>

              <div className="flex gap-3 mt-8">
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
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>

              <ul className="space-y-2 text-sm text-slate-400">
                {quickLinks.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                       download={link.download}
                      className="hover:text-slate-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>

              <ul className="space-y-2 text-sm text-slate-400">
                {contactLinks.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="hover:text-slate-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 py-6">
            <p className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Matheus Braga. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}