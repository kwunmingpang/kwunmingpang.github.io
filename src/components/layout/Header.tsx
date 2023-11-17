import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren, useMemo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

type MenuItemProps = {
    link: string;
    text: string;
} & PropsWithChildren;

const MenuItem: FC<MenuItemProps> = ({ text, link }) => {
    const pathname = usePathname();
    const active = useMemo(() => pathname === link, [pathname]);
    return (
        <Link href={link}>
            <li
                className={`px-3.5 py-2.5 capitalize font-medium text-sm relative hover:text-blue-300 ${
                    active ? "text-blue-300/80" : ""
                }`}
            >
                {text}
                {active && (
                    <span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-300/20 
                via-blue-300/60 from-blue-300/20"
                    ></span>
                )}
            </li>
        </Link>
    );
};

const withOnClose =
    (Component: FC<MenuItemProps>) =>
    (props: MenuItemProps & { onClick: () => void }) => {
        const { onClick, ...rest } = props;
        return (
            <span onClick={onClick}>
                <Component {...rest} />
            </span>
        );
    };

const MobileMenuItem = withOnClose(MenuItem);

const menu: MenuItemProps[] = [
    {
        text: "home",
        link: "/",
    },
    {
        text: "about",
        link: "/about",
    },
    {
        text: "blog",
        link: "/blog",
    },
    {
        text: "gallery",
        link: "/gallery",
    },
    {
        text: "projects",
        link: "/projects",
    },
];

const MobileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex md:hidden grow">
            <span className="ml-auto mr-8 text-zinc-200" onClick={handleClick}>
                <MenuIcon />
            </span>
            <Popper
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                placement="bottom-start"
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom-start"
                                    ? "left top"
                                    : "left bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <nav>
                                    <ul className="flex flex-col p-3 text-sm font-medium shadow-lg shadow-zinc-800/5 bg-zinc-800/90 text-zinc-200 z-10">
                                        {menu.map((item) => (
                                            <MobileMenuItem
                                                {...item}
                                                key={`item_${item.text}`}
                                                onClick={handleClose}
                                            />
                                        ))}
                                    </ul>
                                </nav>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

const Header: FC = () => {
    return (
        <header className="flex mt-6 mb-4">
            <div className="mx-auto md:flex hidden">
                <nav className="mx-auto flex pointer-events-auto">
                    <ul
                        className="flex rounded-full px-3 text-sm font-medium shadow-lg 
                shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10"
                    >
                        {menu.map((item) => (
                            <MenuItem {...item} key={`item_${item.text}`} />
                        ))}
                    </ul>
                </nav>
            </div>
            <MobileMenu />
        </header>
    );
};

export default Header;
