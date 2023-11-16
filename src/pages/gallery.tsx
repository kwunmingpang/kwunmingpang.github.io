import DisplayGallery from "@/components/gallery/DisplayGallery"
import { StyledH1 } from "@/components/mdx"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import fs from "fs"
import Head from "next/head"

const GALLERY = "/assets/gallery"
const GALLERY_PATH = `./public${GALLERY}`

const Gallery = ({ pictures }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <div className="py-12">
        <Head>
            <title>Gallery | Peter Pang</title>
        </Head>
        <StyledH1>Gallery</StyledH1>
        <DisplayGallery pictures={pictures} />
    </div>
}

export default Gallery

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const pictures = fs.readdirSync(GALLERY_PATH)
    console.log(pictures)

    return {
        props: {
            pictures: pictures.map(pic => `${GALLERY}/${pic}`)
        },
    };
}
