import { BLOG_DATE_DISPLAY_FORMAT, BLOG_DATE_FORMAT, DEFAULT_CATEGORY } from "@/constant";
import { BlogType, MetaDataType } from "@/model/BlogType";
import { format, parse } from "date-fns";
import _ from "lodash";
import Link from "next/link";
import { FC, Fragment, useCallback, useMemo } from "react";

const DisplayBlogItem: FC<{ item: MetaDataType[]; readmore?: boolean }> = ({ item, readmore = false }) => {
    if (!item) return <></>
    return <ul>
        {
            item.map((blog, _index) => {
                const { title, date, abstract } = blog
                return <li key={`${blog.title}_${blog.date}`} className="">
                    <Link href={`/blog/${blog.link ?? ""}`} className="my-4 rounded-lg hover:bg-zinc-500/25 p-2 md:p-3 flex w-full">
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
                            {abstract && readmore && <div>
                                <button className="py-1 px-3 rounded-lg hover:text-slate-200 text-zinc-400/80
                                    hover:ring-zinc-200/5 hover:bg-blue-200/30 hover:ring-1">
                                    Read More
                                </button>
                            </div>}
                        </div>
                    </Link>
                </li>
            }
            )
        }
    </ul>
}

export default DisplayBlogItem