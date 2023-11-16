import Link from "next/link";
import { FC, PropsWithChildren } from "react";

type MenuItemProps = {
    link: string
    text: string
} & PropsWithChildren

const MenuItem: FC<MenuItemProps> = ({ text, link }) => {
    return <Link href={link}>
        <li className="px-3.5 py-2.5 capitalize font-medium text-sm">
            {text}
        </li>
    </Link>
}

const menu: MenuItemProps[] = [
    {
        text: "home",
        link: "/"
    },
    {
        text: "about",
        link: "/about"
    },
    {
        text: "blog",
        link: "/blog"
    },
    {
        text: "gallery",
        link: "/gallery"
    },
    {
        text: "projects",
        link: "/projects"
    },

]

const Header: FC = () => {
    return <header className="flex mt-6 mb-4">
        <div className="mx-auto flex">
            <nav className="mx-auto flex pointer-events-auto">
                <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg 
                shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
                    {
                        menu.map(item =>
                            <MenuItem {...item} key={`item_${item.text}`} />
                        )
                    }
                </ul>
            </nav>
        </div>
    </header>
}

export default Header