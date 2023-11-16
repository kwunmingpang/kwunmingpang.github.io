import Image from "next/image"
import { FC } from "react"

const DisplayGalleryItem: FC<{ pictureSource: string; handleOpen: any; setModalImage: any; }> = ({ pictureSource, handleOpen, setModalImage }) => {
    const itemOnClick = () => {
        setModalImage(pictureSource)
        handleOpen()
    }
    return <div className="relative cursor-pointer" onClick={itemOnClick}>
        <Image className="h-full w-auto object-cover rounded-lg ring-1 ring-zinc-400/5" src={pictureSource} width={720} height={480} alt="pictures in gallery" quality={25} priority={false} loading='lazy' />
        <div className="inset-0 absolute blur overflow-hidden bg-blue-300/25 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </div>
}

export default DisplayGalleryItem
