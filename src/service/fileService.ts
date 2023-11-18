import { CONTENT_PATH, MDX_FILE_NAME } from "@/constant";
import { FrontMatterType } from "@/model";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { defer, firstValueFrom, forkJoin, map, switchMap } from "rxjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const mapBlogMeta = (file: string) =>
    defer(
        () =>
            new Promise<Buffer>((resolve, reject) =>
                fs.readFile(path.join(CONTENT_PATH, file), (err, data) =>
                    err ? reject(err) : resolve(data)
                )
            )
    ).pipe(
        switchMap((source) =>
            serialize<any, FrontMatterType>(source, {
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkMath],
                    // @ts-ignore
                    rehypePlugins: [rehypeKatex],
                },
            })
        ),
        map((parsed) => ({
            ...parsed.frontmatter,
            link: file.replace(MDX_FILE_NAME, "$1"),
        }))
    );

const isDev = () => "development" == process.env.NODE_ENV;

export const filterDraft = (isDev: boolean) => (file: string) => {
    if (isDev) return true;
    return !/^draft:.+/.test(file);
};

export const getBlogMetaDatas = () => {
    const directory = fs.readdirSync(CONTENT_PATH);

    const blogMetas = forkJoin(directory.filter(filterDraft(isDev())).map(mapBlogMeta));

    return blogMetas;
};
