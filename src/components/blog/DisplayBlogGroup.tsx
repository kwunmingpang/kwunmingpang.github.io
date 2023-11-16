import { BLOG_DATE_DISPLAY_FORMAT, BLOG_DATE_FORMAT, DEFAULT_CATEGORY } from "@/constant";
import { BlogType, MetaDataType } from "@/model/BlogType";
import { format, parse } from "date-fns";
import _ from "lodash";
import Link from "next/link";
import { FC, Fragment, useCallback, useMemo } from "react";
import DisplayBlogItem from "./DisplayBlogItem";
import DisplayBlogCategory from "./DisplayBlogCategory";

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
