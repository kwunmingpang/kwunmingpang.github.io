import { FC, PropsWithChildren } from "react"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex w-full overflow-x-hidden">
        <div className="fixed inset-0 flex justify-center sm:px-8 lg:px-20 xl:px-44 -z-10">
            <div className="w-full ring-1 bg-zinc-800/50 ring-zinc-200/10 pb-16"></div>
        </div>
        <div className="relative flex w-full flex-col sm:px-8 lg:px-20 xl:px-44">
            {children}
        </div>
    </div>
}

export default MainLayout