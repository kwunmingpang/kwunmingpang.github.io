import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import { PDFReader, VideoPlayer } from "@/components/mdx";
import FollowMe from "@/components/FollowMe";

export default function About({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>About | Peter Pang</title>
            </Head>
            <div className="w-full flex h-full md:p-4 flex-col md:flex-row">
                <div className="lg:w-8/12 p-4 mx-auto">
                    {/* @ts-ignore */}
                    <MDXRemote {...source} components={{ ...genericBlogComponents, PDFReader, VideoPlayer, FollowMe }} />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const currentPath = path.join('./static-contents', ("About.mdx") as string)

    if (!fs.existsSync(currentPath)) return {
        notFound: true
    }

    const source = fs.readFileSync(
        currentPath,
        'utf8'
    );

    const mdxSource = await serialize(source);

    return {
        props: {
            source: mdxSource,
        },
    };
}
