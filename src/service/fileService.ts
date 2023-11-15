import { CONTENT_PATH, MDX_FILE_NAME } from "@/constant"
import { FrontMatterType } from "@/model"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"
import { defer, firstValueFrom, forkJoin, map, switchMap } from "rxjs"

export const getBlogMetaDatas = () => {
    const directory = fs.readdirSync(CONTENT_PATH)

    const blogMetas = forkJoin(directory.map(file =>
        defer(() => new Promise<Buffer>((resolve, reject) => fs.readFile(path.join(CONTENT_PATH, file),
            (err, data) => err ? reject(err) : resolve(data))))
            .pipe(switchMap((source) => serialize<any, FrontMatterType>(source, {
                parseFrontmatter: true
            })),
                map(parsed => ({ ...parsed.frontmatter, link: file.replace(MDX_FILE_NAME, "$1") }))
            )
    ))

    return blogMetas
}
