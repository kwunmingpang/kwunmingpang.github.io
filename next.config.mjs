/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    distDir: process.env.DIST_DIR,
    images: {
        disableStaticImages: true,
        unoptimized: true
    },
}

export default nextConfig
