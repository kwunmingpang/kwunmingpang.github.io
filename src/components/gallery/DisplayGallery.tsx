import Image from "next/image"
import { useState } from "react"

const galleryList = [
    "/assets/gallery/DSC01676.jpg",
    "/assets/gallery/DSC01677.jpg",
    "/assets/gallery/DSC01683.jpg",
    "/assets/gallery/DSC01709.jpg",
    "/assets/gallery/mmexport1692537938226.jpg"
]


// add image meta data (yaml) later to give tags etc. to images
const DisplayGallery = () => {
    const [open, setOpen] = useState()

    return <div className="grid gap-2 grid-col-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {/* <div>
            <Image src={"/assets/gallery/DSC01676.jpg"} width={720} height={480} alt="pictures in gallery" />
        </div> */}
        {[...galleryList, ...galleryList, ...galleryList].map((pic, index) => {
            return <div key={`${pic}_${index}`} className="relative cursor-pointer">
                <Image className="h-full w-auto object-cover" src={pic} width={720} height={480} alt="pictures in gallery" quality={25} priority={false} loading='lazy' />
                {/* <img src={pic}  /> */}
                {/* <div className="inset-0 absolute blur-sm overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div> */}
                <div className="inset-0 absolute blur overflow-hidden bg-blue-300/25 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </div>
        })}
        {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        </Modal> */}
    </div>
}

export default DisplayGallery
