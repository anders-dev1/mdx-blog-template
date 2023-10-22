import Link from "next/link";
import React from "react";
import {PostSearchModel} from "@/domain/post";
import {generatePostSubUrl} from "@/utils/postUrl";

interface Props {
    post: PostSearchModel;
}

export default function PostItem({post}: Props){
    return (
        <Link href={generatePostSubUrl(post)} className={"surface-container block rounded-lg p-4 drop-shadow-md hover:scale-105 group"}>
            <p className={"body-small outline-text"}>{post.info.stringDate}</p>
            <p className={"headline-small on-secondary-container-text mt-1"}>{post.info.title}</p>
            <p className={"body-large on-secondary-container-text mt-2"}>{post.info.teaser}</p>
            <div className={"mt-4 flex items-center"}>
                <div className={"flex items-center"}>
                    <p className={"body-small on-secondary-container-text font-bold group-hover:text-[--md-sys-color-primary]"}>Read more</p>
                    <svg className={"fill-[--md-sys-color-on-surface] ml-1 group-hover:fill-[--md-sys-color-primary]"} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 -960 960 960"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg>
                </div>
            </div>
        </Link>
    );
}