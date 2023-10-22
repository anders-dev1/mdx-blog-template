import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/dist/client/image";
import {AuthorInfo} from "@/domain/author";

type LinkClickedCallback = () => void;

interface Props {
    onClick?: LinkClickedCallback
}

export default function NavbarHome({onClick}: Props) {
    const route = useRouter();
    const isActive = route.asPath == "/";

    return (
        <Link className={"group px-3 w-fit block"} href={"/"} onClick={onClick}>
            <div className={"flex items-center"}>
                <Image
                    className={"w-8 h-8 rounded-full mr-1"}
                    src={"https://placekitten.com/32/32"}
                    alt={"A cat."}
                    width={32}
                    height={32}
                />
                <p className={`group-hover:bg-[--md-sys-color-secondary-container] rounded-3xl py-2 px-1 title-medium on-surface-text ${isActive ? 'underline underline-offset-4' : ''}`}>
                    {AuthorInfo.fullName}</p>
            </div>
        </Link>
    )
}