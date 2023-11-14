import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import createMDX from '@next/mdx'

const withMDX = createMDX(
    {
        options: {
            remarkPlugins: [remarkMath],
            // remarkPlugins: [],
            rehypePlugins: [rehypeKatex],
            // rehypePlugins: [],
        },
    }
)

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    // distDir: "/docs"
}

// module.exports = withMDX(nextConfig)
export default withMDX(nextConfig)
