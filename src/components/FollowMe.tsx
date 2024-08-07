import { FC } from "react"
import { StyledA } from "./mdx"
import { GITHUB, LINKEDIN, MY_EMAIL } from "@/constant"
import Image from "next/image"
import GithubMark from "./svg/GithubMark"
import LinkedIn from "./svg/LinkedIn"
import Email from "./svg/Email"

const FollowMe: FC<{ col?: boolean }> = ({ col = true }) => {
    return <div className={`flex flex-row ${col ? "md:flex-col" : ""} ${col ? "md:gap-2" : ""} gap-6`}>
        <div><a href={LINKEDIN}><LinkedIn className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></a></div>
        <div><a href={GITHUB}><GithubMark className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></a></div>
        <div><a href={`mailto:${MY_EMAIL}`}><span><Email className="fill-zinc-600 hover:fill-blue-300 cursor-pointer" /></span></a></div>
        {/* <StyledA href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</StyledA> */}
        <div><StyledA href="/assets/Peter_CV.pdf" target="_blank"><span >c.v.</span></StyledA></div>
    </div>
}

export default FollowMe
