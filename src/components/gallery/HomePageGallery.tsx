import Image from "next/image";
import { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import style from "@styles/home.module.css";
import { useRouter } from "next/router";
import useImageOnLoad from "./useImageOnLoad";

const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };

const DisplayImage: FC<{ pic: string }> = ({ pic }) => {
    const router = useRouter();
    const imgOnClick = useCallback(() => {
        router.push("/gallery");
    }, [router]);
    const [loaded, onLoad] = useImageOnLoad();

    return (
        <div
            className={`${style.emblaSlide} grow-0 shrink-0 cursor-pointer`}
            onClick={imgOnClick}
        >
            <Image
                className={`h-64 w-64 object-cover rounded-lg ring-1 ${
                    loaded ? "ring-1 ring-zinc-400/25 visible" : "invisible"
                }`}
                src={pic}
                width={480}
                height={480}
                alt="pictures in gallery"
                onLoad={onLoad}
            />
            {/* <Image
            className="h-64 w-64 object-cover rounded-lg ring-1 ring-zinc-400/5 rounded-lg opacity-80 hover:opacity-100 transition duration-300"
            src={pic} width={480} height={480} alt="pictures in gallery" /> */}
        </div>
    );
};

const DisplayImageMobile: FC<{ pic: string }> = ({ pic }) => {
    const router = useRouter();
    const imgOnClick = useCallback(() => {
        router.push("/gallery");
    }, [router]);

    return (
        <div
            className={`${style.emblaSlide} grow-0 shrink-0 cursor-pointer`}
            onClick={imgOnClick}
        >
            <Image
                className="h-64 w-64 object-cover rounded-lg ring-1 ring-zinc-400/5 rounded-lg"
                src={pic}
                width={480}
                height={480}
                alt="pictures in gallery"
            />
        </div>
    );
};

const HomePageGallery: FC<{ pictures: string[] }> = ({ pictures }) => {
    const [emblaRef] = useEmblaCarousel(OPTIONS as any);

    return (
        <>
            {/* <div
                className={`${style.emblaContainer} overflow-x-scroll flex gap-2 lg:hidden`}
            >
                {pictures?.map((pic, index) => {
                    return (
                        <DisplayImageMobile pic={pic} key={`${pic}_${index}`} />
                    );
                })}
            </div> */}
            <div ref={emblaRef}>
                {/* <div className={`${style.emblaContainer} gap-2 hidden lg:flex`}> */}
                <div className={`${style.emblaContainer} gap-2 flex`}>
                    {pictures?.map((pic, index) => {
                        return (
                            <DisplayImage pic={pic} key={`${pic}_${index}`} />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomePageGallery;
