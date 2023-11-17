import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import { StyledH2 } from "@/components/mdx";
import FollowMe from "@/components/FollowMe";
import { getBlogMetaDatas } from "@/service/fileService";
import { firstValueFrom } from "rxjs";
import _ from "lodash";
import DisplayBlogItem from "@/components/blog/DisplayBlogItem";
import ViewMore from "@/components/ViewMore";
import HomePageGallery from "@/components/gallery/HomePageGallery";

export default function Home({ source, displayBlogs, displayGallery }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Peter Pang</title>
            </Head>
            <div className="w-full flex p-4 md:p-8 flex-col md:flex-row ">
                <div className="lg:w-8/12 md:w-10/12 md:p-4 flex flex-col">
                    <span className="my-auto"></span>
                    <div>
                        {/* @ts-ignore */}
                        <MDXRemote {...source} components={genericBlogComponents} />
                    </div>
                    <span className="my-auto"></span>
                </div>
                <div className="lg:w-4/12 md:w-2/12 md:p-4 flex flex-col">
                    <span className="my-auto"></span>
                    <FollowMe />
                    <span className="my-auto"></span>
                </div>
            </div>
            <div className="w-full flex p-4 md:p-10 flex-col mt-4 lg:w-10/12 xl:w-8/12">
                <StyledH2>Gallery: </StyledH2>
                <HomePageGallery pictures={displayGallery} />
                <div className="mt-4"><ViewMore link="/gallery" topic="" /></div>
            </div>
            <div className="w-full flex p-4 md:p-10 flex-col mt-4 lg:w-10/12 xl:w-8/12">
                <StyledH2>Blogs:  </StyledH2>
                <DisplayBlogItem item={displayBlogs} readmore />
                <ViewMore link="/blog" topic="blogs" />
            </div>
        </>
    )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const currentPath = path.join('./static-contents', ("Home.mdx") as string)

    if (!fs.existsSync(currentPath)) return {
        notFound: true
    }

    const source = fs.readFileSync(
        currentPath,
        'utf8'
    );

    const mdxSource = await serialize<any, { blog: string[]; gallery: string[] }>(source, { parseFrontmatter: true });

    console.log(mdxSource.frontmatter)

    const blogMetas = await firstValueFrom(getBlogMetaDatas())
    const displayBlogs = blogMetas.filter(blog => _(mdxSource.frontmatter.blog).includes(blog.link))

    console.log(blogMetas)
    console.log(displayBlogs)

    // const displayGallery = mdxSource.frontmatter.gallery.map(item => `/assets/gallery/${item}`)

    const homeGallery = fs.readdirSync("./public/assets/home")

    const displayGallery = homeGallery.map(item => `/assets/home/${item}`)

    return {
        props: {
            source: mdxSource,
            displayBlogs,
            displayGallery
        },
    };
}
