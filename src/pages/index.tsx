import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import { StyledA } from "@/components/mdx";
import FollowMe from "@/components/FollowMe";
import { getBlogMetaDatas } from "@/service/fileService";
import { firstValueFrom } from "rxjs";

export default function Home({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Peter Pang</title>
            </Head>
            <div className="w-full flex p-4 md:p-8 flex-col md:flex-row">
                <div className="md:w-8/12 md:p-4 flex flex-col">
                    <span className="my-auto"></span>
                    <div>
                        {/* @ts-ignore */}
                        <MDXRemote {...source} components={genericBlogComponents} />
                    </div>
                    <span className="my-auto"></span>
                </div>
                <div className="md:w-4/12 md:p-4 flex flex-col">
                    <span className="my-auto"></span>
                    <FollowMe />
                    <span className="my-auto"></span>
                </div>
            </div>
            <div className="w-full flex p-4 md:p-10 flex-col">
                <h5>article selection</h5>
                <p>aaa</p>
            </div>
            <div className="w-full flex p-4 md:p-10 flex-col">
                <h5>gallery selection</h5>
                <p>aaa</p>
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

    const mdxSource = await serialize(source, { parseFrontmatter: true });

    console.log(mdxSource.frontmatter)
    
    const blogMetas = await firstValueFrom(getBlogMetaDatas())

    console.log(blogMetas)

    return {
        props: {
            source: mdxSource,
        },
    };
}
