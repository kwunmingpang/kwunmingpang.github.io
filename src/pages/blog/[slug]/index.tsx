import fs from "fs"
import path from "path"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote';
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import '../../../app/globals.css'
import 'katex/dist/katex.min.css'
import Head from "next/head";
import { FC } from "react";

const TestComponent: FC<{ text: string }> = ({ text }) => {
    return <div>
        <button className="border px-4 py-1 rounded-md" onClick={() => console.log(text)}>
            {text}
        </button>
    </div>
}

export default function Test({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div className="p-10">
        <Head >
            {/* @ts-ignore */}
            <title>{source?.frontmatter?.title}</title>
        </Head>
        <MDXRemote {...source} components={{ TestComponent }} />
    </div>
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    // @ts-ignore
    const { slug } = ctx.params;

    console.log("slug ", slug)

    const currentPath = path.join('./contents', (slug + '.mdx') as string)

    if (!fs.existsSync(currentPath)) return {
        notFound: true
    }

    const source = fs.readFileSync(
        currentPath,
        'utf8'
    );

    const mdxSource = await serialize(source, {
        parseFrontmatter: true, mdxOptions: {
            remarkPlugins: [remarkMath],
            // @ts-ignore
            rehypePlugins: [rehypeKatex],
        }
    });

    console.log("mdxSource", mdxSource)

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
                slug: file.replace(/(.+)\.mdx$/, "$1")
            }
        }))],
        fallback: false
    }
}
