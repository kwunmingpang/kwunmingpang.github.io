import { FC, PropsWithChildren } from "react";

export const styledP: FC<PropsWithChildren> = ({ children, ...rest }) => <p className="mb-5 text-slate-300/75" {...rest}>{children}</p>
export const styledH1: FC<PropsWithChildren> = ({ children, ...rest }) => <h1 className="mt-12 mb-6 text-4xl font-bold" {...rest}>{children}</h1>
export const styledH2: FC<PropsWithChildren> = ({ children, ...rest }) => <h2 className="mt-10 mb-6 text-3xl font-bold" {...rest}>{children}</h2>
export const styledH3: FC<PropsWithChildren> = ({ children, ...rest }) => <h3 className="mt-8 mb-6 text-2xl font-bold" {...rest}>{children}</h3>
export const TestComponent: FC<{ text: string }> = ({ text }) => {
    return <div>
        <button className="border px-4 py-1 rounded-md" onClick={() => console.log(text)}>
            {text}
        </button>
    </div>
}