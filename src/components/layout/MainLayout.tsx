import { FC, PropsWithChildren } from "react"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex w-full ">
        <div className="fixed inset-0 flex justify-center sm:px-8 lg:px-20">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
        <div className="relative flex w-full flex-col sm:px-8 lg:px-20">
            {children}
        </div>
    </div>
}

export default MainLayout