import { FC } from "react";

const Footer: FC = () => {
    return <footer className="mt-12 flex-none">
        <div className="sm:px-8 border-t border-zinc-700/50">
            <div className="mx-auto w-full max-w-7xl lg:px-8 py-6 flex">
                <span></span>
                <p className="ml-auto text-sm text-zinc-500">
                    © 2023 KwunMing Pang. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
}

export default Footer