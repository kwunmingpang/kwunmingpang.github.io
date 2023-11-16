import Link from "next/link";
import { FC } from "react"
import { StyledA } from "./mdx";

const ViewMore: FC<{ topic: string; link: string }> = ({ topic, link }) => {
    return <div>
        <StyledA href={link}><button className="">View More {topic} &gt;</button></StyledA>
    </div>
}

export default ViewMore