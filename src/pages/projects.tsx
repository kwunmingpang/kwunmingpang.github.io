import ViewMore from "@/components/ViewMore"
import GeneralContainer from "@/components/layout/GeneralContainer"
import { StyledH1, StyledH2, StyledH3, StyledP } from "@/components/mdx"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import path from "path"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import { FC, PropsWithChildren } from "react"

import { MDXRemote } from "next-mdx-remote";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import { PDFReader, VideoPlayer } from "@/components/mdx";
import FollowMe from "@/components/FollowMe";
import Image from "next/image";
import { format, parse } from "date-fns"

const Divider: FC = () => <span className="absolute top-0 w-full inset-x-1-bottom-px h-px 
    bg-gradient-to-r from-blue-300/60 from-blue-300/20"></span>

const Container: FC<PropsWithChildren> = ({ children }) => <div className="mt-4 w-full relative">{children}</div>

const DateDisplay: FC<{ date: string; }> = ({ date }) => <div className="">
    <time dateTime={date}>
        <span className="text-base text-zinc-400/90">{format(parse(date, "yyyy-MM", new Date()), "MMM, yyyy")}</span>
    </time>
</div>

const Header: FC<{ date: string; title: string; }> = ({ date, title }) => {
    return <>
        <h3 className="text-2xl font-bold">{title}</h3>
        <DateDisplay date={date} />
        <span className="mb-4 inset-x-1-bottom-px h-px p-1"></span>
    </>
}

const Projects = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <GeneralContainer>
        <Head>
            <title>Projects | Peter Pang</title>
        </Head>
        <StyledH1>Projects outside work and study</StyledH1>

        <div className="mt-4 w-full relative">
            {/* @ts-ignore */}
            <MDXRemote {...source} components={{
                ...genericBlogComponents,
                NextImage: Image,
                Divider,
                Container,
                ViewMore,
                Header
            }} />
        </div>
        {/* <div className="mt-4 w-full relative">
            <span className="absolute top-0 w-full inset-x-1-bottom-px h-px 
                bg-gradient-to-r from-blue-300/60 from-blue-300/20"></span>
            <StyledH3>Flash Card Web App</StyledH3>
            <ViewMore link="" topic="Flash card app details" />
        </div> */}
    </GeneralContainer>
}

export default Projects

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const currentPath = path.join('./static-contents', ("Project.mdx") as string)

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