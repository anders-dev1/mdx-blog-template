import NavbarLightSwitch from "@/components/navbar/NavbarLightSwitch";
import Divider from "@/components/Divider";
import React, {useState} from "react";
import {maxWidthClass} from "@/utils/styling";
import NavbarLink from "@/components/navbar/NavbarLink";
import NavbarHome from "@/components/navbar/NavbarHome";
import {AuthorInfo} from "@/domain/author";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className={"h-14"}/>
            <div className={`fixed top-0 w-full bg-[--md-sys-color-surface] z-50 pt-2 ${maxWidthClass}`}>

                {/* Mobile */}
                <div className={"sm:hidden mx-2 mb-2"}>
                    <div className={"flex"}>
                        <NavbarHome/>
                        <button className={"ml-auto rounded"} onClick={toggleMobileMenu}>
                            {
                                mobileMenuOpen &&
                                <svg
                                    className={"fill-[--md-sys-color-on-surface]"}
                                    xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960"
                                    width="32">
                                    <path
                                        d="M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z"/>
                                </svg>
                            }
                            {
                                !mobileMenuOpen &&
                                <svg
                                    className={"fill-[--md-sys-color-on-surface]"}
                                    xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960"
                                    width="32">
                                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                                </svg>
                            }
                        </button>
                    </div>
                    {
                        mobileMenuOpen &&
                        <div className={"flex"}>
                            <div className={"flex-col space-y-4 mt-4 ml-10"}>
                                <NavbarContent isMobile={true} onClick={toggleMobileMenu}/>
                            </div>
                        </div>
                    }
                </div>

                {/* Desktop */}
                <div className={"max-sm:hidden mx-2 mb-2 flex flex-row items-center gap-2"}>
                    <NavbarHome/>
                    <NavbarContent isMobile={false} onClick={() => {
                    }}/>
                </div>

                <Divider className={"on-surface-text"}/>
            </div>
        </>
    )
}

type LinkClickedCallback = () => void;
type NavbarContentProps = {
    isMobile: boolean,
    onClick: LinkClickedCallback
}

function NavbarContent({isMobile, onClick}: NavbarContentProps) {
    let textClass = "on-surface-text ";
    textClass += isMobile ? "title-large" : "title-medium";

    return (
        <>
            <NavbarLink href={"/blog"} onClick={onClick}><p className={textClass}>Blog</p></NavbarLink>
            <NavbarLink href={"/guides"} onClick={onClick}><p className={textClass}>Guides</p></NavbarLink>
            <div className={"flex items-center ml-auto"}>
                <NavbarLink href={AuthorInfo.linkedInUrl}>
                    <svg className={"fill-[--md-sys-color-on-surface]"}
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </NavbarLink>
                <NavbarLink href={AuthorInfo.mediumUrl}>
                    <svg
                        className={"fill-[--md-sys-color-on-surface]"}
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                    </svg>
                </NavbarLink>
                <div className={"ml-0 p-0 h-4 border-l border-solid border-[--md-sys-color-outline-variant]"}/>
                <NavbarLightSwitch/>
            </div>
        </>
    );
}