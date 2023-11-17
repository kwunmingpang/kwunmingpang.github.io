import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='h-full antialiased dark overflow-x-hidden'>
            <Head />
            <body className='flex h-full bg-black font-mono'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}