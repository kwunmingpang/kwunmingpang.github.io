import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { genericBlogComponents } from "@/constant/blog";

export default function Home({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="w-full flex h-full p-8 flex-col md:flex-row">
            <div className="md:w-8/12 p-4">
                {/* @ts-ignore */}
                <MDXRemote {...source} components={genericBlogComponents}/>
            </div>
            <div className="md:w-4/12 p-4">
                <div>
                    <div>follow me on</div>
                    <div>Linkedin</div>
                    <div>Git</div>
                    <p>Work experience</p>
                    Download cv
                </div>
            </div>
        </div>
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

    const mdxSource = await serialize(source);

    return {
        props: {
            source: mdxSource,
        },
    };
}
