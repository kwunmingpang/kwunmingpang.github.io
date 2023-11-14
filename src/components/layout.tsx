import { MDXProvider } from '@mdx-js/react';
import { Inter } from 'next/font/google'
import '../app/globals.css'
import 'katex/dist/katex.min.css'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children, ...props }: LayoutProps) {
    return (
        <div className='p-4'>
            {children}
        </div>
    )
}
