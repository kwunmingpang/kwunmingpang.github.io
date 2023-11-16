import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import style from "@styles/home.module.css"

const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }

const HomePageGallery: FC<{ pictures: string[] }> = ({ pictures }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS as any)

    return <div ref={emblaRef}>
        <div className={`${style.emblaContainer} flex gap-2`}>
            {
                pictures?.map((pic, index) => {
                    return <Link href={"/gallery"} key={`${pic}_${index}`} className={`${style.emblaSlide} grow-0 shrink-0`}>
                        <Image
                            className="h-64 w-64 object-cover rounded-lg ring-1 ring-zinc-400/5 rounded-lg opacity-80 hover:opacity-100 transition duration-300"
                            src={pic} width={480} height={480} alt="pictures in gallery"
                            quality={25} priority={false} loading='lazy' />
                    </Link>
                })
            }
        </div>
    </div>
    // return <div className="flex gap-6 w-screen -ml-32 overflow-hidden">
    //     {
    //         pictures?.map((pic, index) => {
    //             return <Link href={"/gallery"} key={`${pic}_${index}`}>
    //                 <Image
    //                     className="h-64 w-64 object-cover rounded-lg ring-1 ring-zinc-400/5 rounded-lg opacity-80 hover:opacity-100 transition duration-300"
    //                     src={pic} width={480} height={480} alt="pictures in gallery"
    //                     quality={25} priority={false} loading='lazy' />
    //             </Link>
    //         })
    //     }
    // </div>
}

export default HomePageGallery
