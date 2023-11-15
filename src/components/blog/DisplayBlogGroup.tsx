import { BLOG_DATE_DISPLAY_FORMAT, BLOG_DATE_FORMAT, DEFAULT_CATEGORY } from "@/constant";
import { BlogType, MetaDataType } from "@/model/BlogType";
import { format, parse } from "date-fns";
import _ from "lodash";
import Link from "next/link";
import { FC, Fragment, useCallback, useMemo } from "react";

const DisplayBlogCategory: FC<{ groupKey: string; index: number }> = ({ groupKey, index }) => {
    if (DEFAULT_CATEGORY == groupKey) return <></>
    return <div className="mt-6 mb-1">
        {index != 0 && <div className="border-t border-zinc-200/25"></div>}
        <h6 className="font-bold text-2xl mt-1">
            {groupKey}
        </h6>
    </div>
}

const DisplayBlogItem: FC<{ item: MetaDataType[] }> = ({ item }) => {
    if (!item) return <></>
    return <ul>
        {
            item.map((blog, _index) => {
                const { title, date, abstract } = blog
                return <li key={`${blog.title}_${blog.date}`} className="my-4 rounded-lg hover:bg-zinc-500/25 p-2">
                    <Link href={`/blog/${blog.link ?? ""}`} className="flex w-full">
                        <div className="flex gap-1 flex-col">
                            <time className="text-base text-zinc-400">
                                {format(parse(date, BLOG_DATE_FORMAT, new Date()), BLOG_DATE_DISPLAY_FORMAT)}
                            </time>
                            <h6 className="text-xl font-medium">
                                {title}
                            </h6>
                            {abstract && <p className="font-thin text-zinc-400/80">
                                {abstract}
                            </p>}
                        </div>
                    </Link>
                </li>
            }
            )
        }
    </ul>
}

const DisplayBlogGroup: FC<BlogType> = ({ blogGroups }) => {
    return <div className=" lg:w-8/12 mx-auto">
        {
            blogGroups?.map((group, index) => {
                console.log("group", group)
                const { key, item } = group
                return <Fragment key={group.key}>
                    <DisplayBlogCategory groupKey={key} index={index} />
                    <DisplayBlogItem item={item} />
                </Fragment>
            })
        }
    </div>
}

export default DisplayBlogGroup
