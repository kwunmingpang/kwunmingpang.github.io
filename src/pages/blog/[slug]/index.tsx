import fs from "fs";
import path from "path";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Head from "next/head";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import { FrontMatterType } from "@/model";
import { format, parse } from "date-fns";
import {
    BLOG_DATE_DISPLAY_FORMAT,
    BLOG_DATE_FORMAT,
    MDX_FILE_NAME,
} from "@/constant";
import blogStlye from "@styles/blog.module.css";
import { StyledA, Reference } from "@components/mdx";
import { genericBlogComponents } from "@/constant/blog";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Image from "next/image";
import { filterHidden } from "@/service/fileService";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs"
import GridContainer from "@/components/layout/GridContainer";
Prism.manual = true;

const BlogHeader: FC<FrontMatterType> = ({ title, date }) => {
    const display = useMemo(
        () =>
            date
                ? format(
                      parse(date, BLOG_DATE_FORMAT, new Date()),
                      BLOG_DATE_DISPLAY_FORMAT
                  )
                : null,
        [date]
    );
    return (
        <header className="flex flex-col">
            {date && (
                <time
                    className="order-first flex items-center text-base text-zinc-400/90"
                    dateTime={date}
                >
                    <span className="">{display}</span>
                </time>
            )}
            <div className="my-4">
                <h5 className="text-4xl font-bold">{title}</h5>
            </div>
        </header>
    );
};

const CustomBreadCrumbs: FC<
    PropsWithChildren & { title: string; category: string | undefined }
> = ({ title, category }) => {
    return (
        <>
            <div className="mb-4 sm:mb-8 hidden sm:block">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator={<span className="text-slate-300/75">›</span>}
                >
                    <StyledA href="/blog">blog</StyledA>
                    {category && (
                        <p className="text-slate-300/75">{category}</p>
                    )}
                    <p className="text-slate-300/75">{title}</p>
                </Breadcrumbs>
            </div>
            <div className="sm:hidden block mb-4 text-xl font-bold">
                <Link href="/blog" className="cursor-pointer text-slate-300/75">
                    <ArrowBackIcon />
                </Link>
            </div>
        </>
    );
};

const components = {
    ...genericBlogComponents,
    NextImage: Image,
    GridContainer,
    Reference
};

export default function Test({
    source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { title, category } = useMemo(() => source?.frontmatter, [source]);

    useEffect(() => {
        Prism.highlightAll();
    }, [source]);

    return (
        <div
            className={`${blogStlye.blog} flex flex-col md:w-10/12 lg:w-8/12 mx-auto`}
        >
            <CustomBreadCrumbs title={title} category={category} />
            <Head>
                <title>Blog | {title}</title>
            </Head>
            <BlogHeader {...source?.frontmatter} />
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

    const currentPath = path.join("./contents", (slug + ".mdx") as string);

    if (!fs.existsSync(currentPath))
        return {
            notFound: true,
        };

    const source = fs.readFileSync(currentPath, "utf8");

    const mdxSource = await serialize<any, FrontMatterType>(source, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [remarkMath],
            // @ts-ignore
            rehypePlugins: [rehypeKatex],
        },
    });

    return {
        props: {
            source: mdxSource,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync("./contents");

    console.log(files);
    return {
        paths: [
            ...files.filter(filterHidden).map((file) => ({
                params: {
                    slug: file.replace(MDX_FILE_NAME, "$1"),
                },
            })),
        ],
        fallback: false,
    };
}
