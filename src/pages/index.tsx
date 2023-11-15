import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs"
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function Home() {
    return (
        <div className="w-full">
            <div className="bg-slate-700 w-8/12">
                <h1 className="text-2xl font-bold">Hi, I am KwunMing(Peter) </h1>
                <p>
                    asdjlfjalksdjklf  asdjlfjalksdjklfasdjlfjalksdjklfasdjlfjalksdjklfasdjlfjalksdjklf asdjlfjalksdjklf asdjlfjalksdjklf
                </p>
            </div>
        </div>
    )
}

// export async function getStaticProps(ctx: GetStaticPropsContext) {
//     const currentPath = path.join('./static-contents', ("Home.mdx") as string)

//     if (!fs.existsSync(currentPath)) return {
//         notFound: true
//     }

//     const source = fs.readFileSync(
//         currentPath,
//         'utf8'
//     );

//     const mdxSource = await serialize(source);

//     return {
//         props: {
//             source: mdxSource,
//         },
//     };
// }
