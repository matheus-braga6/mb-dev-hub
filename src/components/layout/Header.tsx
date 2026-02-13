import { Container } from "./Container"
import logo from "@/assets/mb-dev.svg"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { MenuLineIcon } from "@/assets/icons/MenuLineIcon"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"


export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-28 z-50">
      <Container>
        <div className="flex items-center justify-between py-4 h-full">
          <a href="#">
            <img 
              fetchPriority="high"
              src={logo}
              alt="MB Development Logo"
              className="h-20 w-auto shrink-0"
              width={80}
              height={80}
            />
            <span className="sr-only">MB Development</span>
          </a>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#projects"
                  className="hover:bg-blue800"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about" 
                  className="hover:bg-blue800"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#skills"
                  className="hover:bg-blue800"
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#certifications"
                  className="hover:bg-blue800"
                >
                  Learning & Certifications
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contact"
                  className="hover:bg-blue800"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="size-7 p-0! md:hidden" aria-label="Toggle navigation">
                <MenuLineIcon className="size-7 color-white" />
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="left" 
              onCloseAutoFocus={(e) => e.preventDefault()}
              className="
                w-75 p-4
                bg-blue900/90
                backdrop-blur-xs
                border-none
              "
            >
              <nav className="flex flex-col gap-6 mt-10">
                <SheetClose asChild>
                  <a href="#projects" className="text-sm">Projects</a>
                </SheetClose>

                <SheetClose asChild>
                  <a href="#about" className="text-sm">About</a>
                </SheetClose>

                <SheetClose asChild>
                  <a href="#skills" className="text-sm">Skills</a>
                </SheetClose>

                <SheetClose asChild>
                  <a href="#certifications" className="text-sm">Learning & Certifications</a>
                </SheetClose>

                <SheetClose asChild>
                  <a href="#contact" className="text-sm">Contact</a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}