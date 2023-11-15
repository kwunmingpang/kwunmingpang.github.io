import { FC } from "react"
import { StyledA } from "./mdx"
import { MY_EMAIL } from "@/constant"
import Image from "next/image"
import GithubMark from "./svg/GithubMark"
import LinkedIn from "./svg/LinkedIn"
import Email from "./svg/Email"

const FollowMe: FC<{ col?: boolean }> = ({ col = true }) => {
    return <div className={`flex flex-row ${col ? "md:flex-col" : ""} ${col ? "md:gap-2" : ""} gap-6`}>
        <a href="https://www.linkedin.com/in/kwun-ming-pang-6443a0181/"><LinkedIn className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></a>
        <a href="https://github.com/kwunmingpang"><GithubMark className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></a>
        <a href={`mailto:${MY_EMAIL}`}><Email className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></a>
        {/* <StyledA href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</StyledA> */}
        <StyledA href="/assets/Peter_CV.pdf" target="_blank"><span >c.v.</span></StyledA>
    </div>
}

export default FollowMe
