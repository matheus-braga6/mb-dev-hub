declare module "merrygo-carousel" {
  export interface MerryGoOptions {
    gallery: HTMLElement
    galleryInner: HTMLElement
    thumbs?: HTMLElement[]
    prevBtn?: HTMLElement | null
    nextBtn?: HTMLElement | null
    pagination?: HTMLElement | null
    gap?: number
    orientation?: "horizontal" | "vertical"
    enableDrag?: boolean
    infinityLoop?: boolean
    slidesToScroll?: number
    slidesVisible?: number
    autoplay?: boolean
    breakpoints?: Record<
      number,
      Partial<MerryGoOptions>
    >
  }

  export default class MerryGo {
    constructor(options: MerryGoOptions)
  }
}
