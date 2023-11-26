import Image from "next/image"
import { useCallback, useState } from "react"
import Modal from '@mui/material/Modal';
import DisplayGalleryItem from "./DisplayGalleryItem";
import Fade from '@mui/material/Fade';
import GridContainer from "../layout/GridContainer";

// add image meta data (yaml) later to give tags etc. to images
const DisplayGallery = ({ pictures = [] }: { pictures: string[] }) => {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState("")
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open])
    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [open])
    const setModalImage = useCallback((source: string) => {
        setImage(source)
    }, [image])

    return <GridContainer>
        {[...pictures].map((pic, index) => {
            return <DisplayGalleryItem pictureSource={pic} key={`${pic}_${index}`} handleOpen={handleOpen} setModalImage={setModalImage} />
        })}
        <Modal
            open={open}
            onClose={handleClose}
            disableEnforceFocus
            disableAutoFocus
            disableRestoreFocus
        >
            <Fade in={open} >
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-auto flex justify-center flex-col"
                    onClick={handleClose}>
                    <div className="flex flex-col items-center m-4">
                        <Image src={image} width={1080} height={720} alt="focus image" className="object-contain h-[80vh] w-auto" />
                    </div>
                </div>
            </Fade>
        </Modal>
    </GridContainer>
}

export default DisplayGallery
