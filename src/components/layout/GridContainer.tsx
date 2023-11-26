import { FC, PropsWithChildren } from "react";

const GridContainer: FC<PropsWithChildren> = ({ children }) => (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-3">
        {children}
    </div>
);

export default GridContainer
