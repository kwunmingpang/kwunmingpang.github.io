import { FC } from "react";

const Footer: FC = () => {
    return <footer className="mt-12 flex-none">
        <div className="sm:px-8 border-t border-zinc-700/50">
            <div className="mx-auto w-full max-w-7xl lg:px-8 px-4 py-6 flex">
                <span></span>
                <div className="ml-auto text-sm text-zinc-500 text-right flex flex-col">
                    <p>© 2023 All rights reserved, KwunMing Pang. </p>
                    <p>Powered by Next js</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer