import React, {ReactNode} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

type LinkClickedCallback = () => void;

interface Props {
    children: ReactNode
    href?: string,
    onClick?: LinkClickedCallback
}

export default function NavbarLink({children, onClick, href}: Props) {
    const route = useRouter();
    const isActive = route.asPath.startsWith(href ?? "");

    return (
        <Link
            className={`
            py-2 px-3 rounded-3xl w-fit block hover:bg-[--md-sys-color-secondary-container] 
            ${isActive ? 'underline underline-offset-4' : ''}
            `}
            onClick={onClick}
            href={href ?? ""}>
            {children}
        </Link>);
}
