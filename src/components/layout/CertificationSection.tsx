import { useEffect, useRef } from "react"
import { Container } from "./Container"
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon"
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon"
import MerryGo from "merrygo-carousel"
import { certifications } from "@/data/certifications"
import { motion } from "framer-motion"
import { certificationsTitleVariants, certificationsContainerVariants} from "@/lib/animations/certifications"

export function CertificationSection () {
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const galleryInnerRef = useRef<HTMLDivElement | null>(null)
  const galleryArrowNextRef = useRef<HTMLDivElement | null>(null)
  const galleryArrowPrevRef = useRef<HTMLDivElement | null>(null)
  const galleryPaginationRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!galleryRef.current || !galleryInnerRef.current) return

    new MerryGo({
      gallery: galleryRef.current,
      galleryInner: galleryInnerRef.current,
      gap: 16,
      prevBtn: galleryArrowPrevRef.current,
      nextBtn: galleryArrowNextRef.current,
      pagination: galleryPaginationRef.current,
      breakpoints: {
        0: { slidesVisible: 1 },
        900: { slidesVisible: 2 }
      }
    })
  }, [])

  return (
    <section id="certifications" className="py-12 bg-blue900">
      <Container>
        <motion.h2 
          className="text-4xl font-bold mb-16 uppercase text-center"
          variants={certificationsTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Learning & Certifications
        </motion.h2>

        <motion.div
          variants={certificationsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full relative px-8 w900:px-12 pb-12">
            <div ref={galleryRef} className="certifications w-full overflow-hidden select-none">
              <div 
                ref={galleryInnerRef} 
                className="
                  certifications__inner 
                  w-full flex 
                  transition-transform duration-400 ease-[ease]
                  gap-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.link}
                    target="_blank"
                    className="
                      box-border 
                      shrink-0 
                      w-full
                      w900:w-[calc((100%-16px)/2)]
                    "
                  >
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-cover"
                      width={600}
                      height={382}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div 
              ref={galleryArrowPrevRef} 
              className="
                certifications__arrow certifications__arrow--prev
                w-7 h-7 w900:w-10 w900:h-10
                absolute top-[42%] translate-y-[-50%] left-0
                flex items-center justify-center
                rounded-full cursor-pointer
                bg-slate-50 hover:bg-slate-400 transition-colors
              "
            >
              <ArrowLeftIcon className="w-5 h-5 w900:w-6 w900:h-6 text-slate-950"/>
            </div>

            <div 
              ref={galleryArrowNextRef} 
              className="
                certifications__arrow certifications__arrow--next
                w-7 h-7 w900:w-10 w900:h-10
                absolute top-[42%] translate-y-[-50%] right-0
                flex items-center justify-center
                rounded-full cursor-pointer
                bg-slate-50 hover:bg-slate-400 transition-colors
              "
            >
              <ArrowRightIcon className="w-5 h-5 w900:w-6 w900:h-6 text-slate-950"/>
            </div>

            <div 
              ref={galleryPaginationRef}
              className="
                w-max
                h-7
                absolute bottom-0 left-[50%] translate-x-[-50%]
                flex justify-center items-center gap-2
                py-2 px-4
                bg-slate-50
                rounded-[40px]
              "
            ></div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}