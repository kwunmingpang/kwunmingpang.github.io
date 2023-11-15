/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    distDir: process.env.DIST_DIR
}

export default nextConfig
