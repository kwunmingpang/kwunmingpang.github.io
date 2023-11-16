import { DEFAULT_CATEGORY } from "@/constant";
import { FC } from "react";

const DisplayBlogCategory: FC<{ groupKey: string; index: number }> = ({ groupKey, index }) => {
    if (DEFAULT_CATEGORY == groupKey) return <></>
    return <div className="mt-6 mb-1">
        {index != 0 && <div className="border-t border-zinc-200/25"></div>}
        <h6 className="font-bold text-2xl mt-1">
            {groupKey}
        </h6>
    </div>
}

export default DisplayBlogCategory