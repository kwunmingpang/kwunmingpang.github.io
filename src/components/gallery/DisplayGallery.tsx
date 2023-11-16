import Image from "next/image"
import { forwardRef, useCallback, useState } from "react"
import Modal from '@mui/material/Modal';
import DisplayGalleryItem from "./DisplayGalleryItem";
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';

const galleryList = [
    "/assets/gallery/DSC01676.jpg",
    "/assets/gallery/DSC01677.jpg",
    "/assets/gallery/DSC01683.jpg",
    "/assets/gallery/DSC01709.jpg",
    "/assets/gallery/mmexport1692537938226.jpg"
]

const Backdrop = forwardRef<HTMLDivElement, { open?: boolean }>(
    (props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    },
);

const CustomModalBackdrop = styled(Backdrop)`
  --tw-blur: blur(32px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

// add image meta data (yaml) later to give tags etc. to images
const DisplayGallery = () => {
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

    return <div className="grid gap-2 grid-col-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {/* <div>
            <Image src={"/assets/gallery/DSC01676.jpg"} width={720} height={480} alt="pictures in gallery" />
        </div> */}
        {[...galleryList, ...galleryList, ...galleryList].map((pic, index) => {
            return <DisplayGalleryItem pictureSource={pic} key={`${pic}_${index}`} handleOpen={handleOpen} setModalImage={setModalImage} />
        })}
        <Modal
            open={open}
            onClose={handleClose}
            disableEnforceFocus
            disableAutoFocus
            disableRestoreFocus
            slots={{ backdrop: CustomModalBackdrop }}
        >
            <Fade in={open} >
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-auto flex justify-center flex-col"
                    onClick={handleClose}>
                    <div className="flex flex-col items-center m-4">
                        {/* <div className="flex w-full">
                            <span className="mx-auto"></span>
                            <span className="lg:mr-36 md:mr-24 sm:mr-12 text-zinc-200/75 text-2xl cursor-pointer font-bold">X</span>
                        </div> */}
                        <Image src={image} width={1080} height={720} alt="focus image" className="object-contain h-[80vh] w-auto" />
                    </div>
                </div>
            </Fade>
        </Modal>
    </div>
}

export default DisplayGallery
