import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='h-full antialiased dark'>
            <Head />
            <body className='flex h-full bg-black'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}