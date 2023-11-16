import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import { PDFReader, VideoPlayer } from "@/components/mdx";
import FollowMe from "@/components/FollowMe";
import Image from "next/image";
import GeneralContainer from "@/components/layout/GeneralContainer";

export default function About({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>About | Peter Pang</title>
            </Head>
            <GeneralContainer>
                {/* @ts-ignore */}
                <MDXRemote {...source} components={{
                    ...genericBlogComponents, PDFReader,
                    VideoPlayer, FollowMe, NextImage: Image
                }} />
            </GeneralContainer>
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
