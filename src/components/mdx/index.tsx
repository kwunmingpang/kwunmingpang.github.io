import Link from "next/link";
import { FC, PropsWithChildren } from "react";

export const StyledP: FC<PropsWithChildren> = ({ children, ...rest }) => <p className="mb-5 text-slate-300/75" {...rest}>{children}</p>
export const StyledH1: FC<PropsWithChildren> = ({ children, ...rest }) => <h1 className="mt-12 mb-6 text-4xl font-bold" {...rest}>{children}</h1>
export const StyledH2: FC<PropsWithChildren> = ({ children, ...rest }) => <h2 className="mt-10 mb-6 text-3xl font-bold" {...rest}>{children}</h2>
export const StyledH3: FC<PropsWithChildren> = ({ children, ...rest }) => <h3 className="mt-8 mb-6 text-2xl font-bold" {...rest}>{children}</h3>
export const TestComponent: FC<{ text: string }> = ({ text }) => {
    return <div>
        <button className="border px-4 py-1 rounded-md" onClick={() => console.log(text)}>
            {text}
        </button>
    </div>
}
export const StyledA: FC<PropsWithChildren & { href: string }> = ({ children, href, ...rest }) => <Link href={href ?? ""} className="text-blue-300/75 hover:text-blue-300 font-semi-bold" {...rest}>
    {children}
</Link>
export const StyledStrong: FC<PropsWithChildren> = ({ children, ...rest }) => <strong className="text-blue-300/75 font-bold" {...rest}>{children}</strong>