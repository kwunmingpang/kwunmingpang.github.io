import { FC, PropsWithChildren, useEffect, useRef } from "react";
import Prism from "prismjs";

export const StyledCodeBlockPrism: FC<PropsWithChildren> = ({
    children,
    ...rest
}) => {
    return <code {...rest}>{children}</code>;
};
export const StyledPrePrism =
    (language = "language-markdown"): FC<PropsWithChildren> =>
    ({ children, ...rest }) => {
        const preRef = useRef<HTMLPreElement>(null);
        useEffect(() => {
            if (!preRef.current) return;
            Prism.highlightAllUnder(preRef.current, true);
        }, [children]);

        return (
            <pre {...rest} className={language} ref={preRef}>
                {children}
            </pre>
        );
    };
