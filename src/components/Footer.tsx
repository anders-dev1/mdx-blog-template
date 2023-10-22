import Divider from "@/components/Divider";
import React from "react";
import {maxWidthClass} from "@/utils/styling";
import {AuthorInfo} from "@/domain/author";

export default function Footer() {
    return (
        <footer className={`mt-auto ${maxWidthClass}`}>
            <div className={"mt-12"}>
                <Divider/>
                <div className={"flex min-h-full text-center h-14"}>
                    <div className={"py-2 px-5 min-w-full flex flex-row items-center"}>
                        <p className={"outline-text"}>© 2023 {AuthorInfo.fullName}. All rights reserved.</p>
                        <a id={"csconsentlink"} className={"outline-text hover:underline cursor-pointer ml-auto"}>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}