import { Header } from "@/components/layout/Header"
import { HeroSection } from "./components/layout/HeroSection"
import { ProjectsSection } from "./components/layout/ProjectsSection"
import { AboutSection } from "./components/layout/AboutSection"
import { SkillsSection } from "./components/layout/SkillsSection"
import { CertificationSection } from "./components/layout/CertificationSection"
import { ContactSection } from "./components/layout/ContactSection"
import { Footer } from "./components/layout/Footer"
import { BackToTop } from "./components/layout/BackToTop"

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <CertificationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App