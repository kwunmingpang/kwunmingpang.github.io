import fs from "fs"
import path from "path"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import 'katex/dist/katex.min.css'
import Head from "next/head";
import { FC, PropsWithChildren, useMemo } from "react";
import { FrontMatterType } from "@/model";
import { format, parse } from "date-fns";
import { BLOG_DATE_DISPLAY_FORMAT, BLOG_DATE_FORMAT, MDX_FILE_NAME } from "@/constant";
import blogStlye from "@styles/blog.module.css"
import { TestComponent, styledH1, styledH2, styledH3, styledP } from "@components/mdx"
import { genericBlogComponents } from "@/constant/blog"

const BlogHeader: FC<FrontMatterType> = ({ title, date }) => {
    const display = useMemo(() => date ? format(parse(date, BLOG_DATE_FORMAT, new Date()), BLOG_DATE_DISPLAY_FORMAT) : null, [date])
    return <header className="flex flex-col">
        {
            date && <time className="order-first flex items-center text-base text-zinc-400/90" dateTime={date}>
                <span className="">{display}</span>
            </time>
        }
        <div className="my-4">
            <h5 className="text-4xl font-bold">{title}</h5>
        </div>
    </header>
}

const components = { TestComponent, ...genericBlogComponents }

export default function Test({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { title, date, abstract } = useMemo(() => source?.frontmatter, [source])

    return <div className={`${blogStlye.blog} flex flex-col md:w-8/12 mx-auto`}>
        <Head >
            <title>{title}</title>
        </Head>
        <BlogHeader {...source?.frontmatter} />
        <div className="">
            <MDXRemote {...source} components={components} />
        </div>
    </div>
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    // @ts-ignore
    const { slug } = ctx.params;

    const currentPath = path.join('./contents', (slug + '.mdx') as string)

    if (!fs.existsSync(currentPath)) return {
        notFound: true
    }

    const source = fs.readFileSync(
        currentPath,
        'utf8'
    );

    const mdxSource = await serialize<any, FrontMatterType>(source, {
        parseFrontmatter: true, mdxOptions: {
            remarkPlugins: [remarkMath],
            // @ts-ignore
            rehypePlugins: [rehypeKatex],
        }
    });

    return {
        props: {
            source: mdxSource,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync("./contents")

    console.log(files)
    return {
        paths: [...files.map(file => ({
            params: {
                slug: file.replace(MDX_FILE_NAME, "$1")
            }
        }))],
        fallback: false
    }
}
