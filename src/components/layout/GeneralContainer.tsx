import { FC, PropsWithChildren } from "react"

const GeneralContainer: FC<PropsWithChildren> = ({ children }) => {
    return <div className="w-full flex h-full md:p-4 flex-col md:flex-row">
        <div className="lg:w-8/12 p-4 mx-auto">
            {children}
        </div>
    </div>
}

export default GeneralContainer