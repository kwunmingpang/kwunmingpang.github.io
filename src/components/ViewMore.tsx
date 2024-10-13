import Link from "next/link";
import { FC } from "react"
import { StyledA } from "./mdx";

const ViewMore: FC<{ topic: string; link: string; newTab: boolean }> = ({ topic, link, newTab = false }) => {
    return <div>
        <StyledA href={link} target={newTab ? "_blank" : undefined}><button className="">View More {topic} &gt;</button></StyledA>
    </div>
}

export default ViewMore