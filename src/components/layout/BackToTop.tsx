import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="
            size-10
            p-0!
            fixed bottom-6 right-6 z-50 
            flex justify-center items-center
            rounded-full 
            bg-blue600  
            shadow-lg 
            hover:scale-105 
            transition-transform
            rotate-90
            cursor-pointer
          "
        >
          <ArrowLeftIcon className="size-5 color-white" />
        </Button>
      )}
    </>
)
}
