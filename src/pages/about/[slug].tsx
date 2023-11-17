import fs from "fs";
import path from "path";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import "katex/dist/katex.min.css";
import Head from "next/head";
import { FC, PropsWithChildren, useMemo } from "react";
import { FrontMatterType } from "@/model";
import { MDX_FILE_NAME } from "@/constant";
import blogStlye from "@styles/blog.module.css";
import { genericBlogComponents } from "@/constant/blog";
import { PDFReader, StyledA, StyledP, VideoPlayer } from "@/components/mdx";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const BreadCrumbsProvider: FC<PropsWithChildren & { title: string }> = ({
    title,
}) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" separator={<span className="text-slate-300/75">›</span>}>
            <StyledA href="/about">about</StyledA>
            <p className="text-slate-300/75">{title}</p>
        </Breadcrumbs>
    );
};

const components = {
    ...genericBlogComponents,
    NextImage: Image,
    VideoPlayer,
    Breadcrumbs: BreadCrumbsProvider,
};

export default function Test({
    source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { title, date, abstract } = useMemo(
        () => source?.frontmatter,
        [source]
    );

    return (
        <div
            className={`${blogStlye.blog} flex flex-col md:w-10/12 lg:w-8/12 mx-auto`}
        >
            <Head>
                <title>About | {title}</title>
            </Head>
            <div className="">
                {/* @ts-ignore */}
                <MDXRemote {...source} components={components} />
            </div>
        </div>
    );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    // @ts-ignore
    const { slug } = ctx.params;

    const currentPath = path.join("./about", (slug + ".mdx") as string);

    if (!fs.existsSync(currentPath))
        return {
            notFound: true,
        };

    const source = fs.readFileSync(currentPath, "utf8");

    const mdxSource = await serialize<any, FrontMatterType>(source, {
        parseFrontmatter: true,
    });

    return {
        props: {
            source: mdxSource,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync("./about");

    console.log(files);
    return {
        paths: [
            ...files.map((file) => ({
                params: {
                    slug: file.replace(MDX_FILE_NAME, "$1"),
                },
            })),
        ],
        fallback: false,
    };
}
