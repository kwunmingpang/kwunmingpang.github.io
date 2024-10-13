import ViewMore from "@/components/ViewMore";
import GeneralContainer from "@/components/layout/GeneralContainer";
import { Divider, StyledH1 } from "@/components/mdx";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { FC, PropsWithChildren } from "react";
import { MDXRemote } from "next-mdx-remote";
import { genericBlogComponents } from "@/constant/blog";
import Head from "next/head";
import Image from "next/image";
import { format, parse } from "date-fns";

const Container: FC<PropsWithChildren> = ({ children }) => (
    <div className="mt-12 w-full relative">
        <Divider />
        {children}
    </div>
);

const DateDisplay: FC<{ date: string }> = ({ date }) => (
    <div className="">
        <time dateTime={date}>
            <span className="text-base text-zinc-400/90">
                {format(parse(date, "yyyy-MM", new Date()), "MMM, yyyy")}
            </span>
        </time>
    </div>
);

const Header: FC<{ date: string; title: string }> = ({ date, title }) => {
    return (
        <>
            <h3 className="text-2xl font-bold pt-1">{title}</h3>
            <DateDisplay date={date} />
            <span className="mb-4 inset-x-1-bottom-px h-px p-1"></span>
        </>
    );
};

const Projects = ({
    source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <GeneralContainer>
            <Head>
                <title>Projects | Peter Pang</title>
            </Head>
            <div className="mt-4 w-full relative">
                <MDXRemote
                    {...source}
                    // @ts-ignore
                    components={{
                        ...genericBlogComponents,
                        NextImage: Image,
                        Divider,
                        Container,
                        ViewMore,
                        Header,
                    }}
                />
            </div>
            {/* <div className="mt-4 w-full relative">
            <span className="absolute top-0 w-full inset-x-1-bottom-px h-px 
                bg-gradient-to-r from-blue-300/60 from-blue-300/20"></span>
            <StyledH3>Flash Card Web App</StyledH3>
            <ViewMore link="" topic="Flash card app details" />
        </div> */}
        </GeneralContainer>
    );
};

export default Projects;

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const currentPath = path.join("./static-contents", "Project.mdx" as string);

    if (!fs.existsSync(currentPath))
        return {
            notFound: true,
        };

    const source = fs.readFileSync(currentPath, "utf8");

    const mdxSource = await serialize(source);

    return {
        props: {
            source: mdxSource,
        },
    };
}
