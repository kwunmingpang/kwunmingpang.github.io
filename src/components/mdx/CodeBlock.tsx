import { FC, PropsWithChildren, useEffect, useRef } from "react";
import Prism from "prismjs";

export const CodeBlock: FC<
    PropsWithChildren & { code: string; language?: string }
> = ({ children, code, language = "javascript", ...rest }) => {
    const codeRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (!codeRef.current) return;
        const html = Prism.highlight(
            codeRef.current.innerHTML,
            Prism.languages.javascript,
            "javascript"
        );
        codeRef.current.innerHTML = html;
        // codeRef.current.innerText = html
        // Prism.highlightAll(undefined, () => console.log("callback"))
    }, [code]);

    return (
        <pre
            {...rest}
            className="bg-zinc-600 overflow-x-scroll language-markdown"
        >
            <code {...rest} ref={codeRef}>
                {code}
            </code>
        </pre>
    );
};