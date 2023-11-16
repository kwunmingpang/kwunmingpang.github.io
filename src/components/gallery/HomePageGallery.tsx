import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const HomePageGallery: FC<{ pictures: string[] }> = ({ pictures }) => {

    return <div className="flex gap-6 w-screen -ml-32 overflow-hidden">
        {
            pictures?.map((pic, index) => {
                return <Link href={"/gallery"} key={`${pic}_${index}`}>
                    <Image
                        className="h-64 w-64 object-cover rounded-lg ring-1 ring-zinc-400/5 rounded-lg opacity-80 hover:opacity-100 transition duration-300"
                        src={pic} width={480} height={480} alt="pictures in gallery"
                        quality={25} priority={false} loading='lazy' />
                </Link>
            })
        }
    </div>
}

export default HomePageGallery
