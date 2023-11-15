import fs from "fs"
import path from "path"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import Head from "next/head";
import { FC, useMemo } from "react";
import { FrontMatterType } from "@/model";
import { format, parse } from "date-fns";
import { defer, firstValueFrom, forkJoin } from "rxjs";
import { map, switchMap } from "rxjs/operators"
import _ from "lodash"
import { BLOG_DATE_DISPLAY_FORMAT, BLOG_DATE_FORMAT, DEFAULT_CATEGORY, MDX_FILE_NAME } from "@/constant";
import Link from "next/link";
import DisplayBlogGroup from "@/components/blog/DisplayBlogGroup";

const CONTENT_PATH = "./contents"

export default function BlogList({ blogMetas }: InferGetStaticPropsType<typeof getStaticProps>) {

    return <div>
        <DisplayBlogGroup blogGroups={blogMetas} />
    </div>
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const directory = fs.readdirSync(CONTENT_PATH)

    const blogMetas = await firstValueFrom(forkJoin(directory.map(file =>
        defer(() => new Promise<Buffer>((resolve, reject) => fs.readFile(path.join(CONTENT_PATH, file),
            (err, data) => err ? reject(err) : resolve(data))))
            .pipe(switchMap((source) => serialize<any, FrontMatterType>(source, {
                parseFrontmatter: true
            })),
                map(parsed => ({ ...parsed.frontmatter, link: file.replace(MDX_FILE_NAME, "$1") }))
            )
    )))

    const grouped = _(blogMetas)
        .groupBy((blog) => blog.category ?? DEFAULT_CATEGORY)
        .value()

    const sorted = _(grouped).keys().map(key => {
        return {
            key, item: grouped[key].sort((prev, curr) => {
                const prevDate = parse(prev?.date, BLOG_DATE_FORMAT, new Date())
                const currDate = parse(curr?.date, BLOG_DATE_FORMAT, new Date())
                return prevDate > currDate ? 1 : -1
            })
        }
    }).value()

    return {
        props: {
            blogMetas: sorted
        },
    };
}
