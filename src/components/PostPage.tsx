import {Post} from "@/domain/post";
import Head from "next/head";
import PostDisplay from "@/components/PostDisplay";
import React from "react";
import {AuthorInfo} from "@/domain/author";

export type Props = {
    post: Post | null;
    success: Boolean;
}

export default function PostPage({success, post}: Props) {
    if (!success || post == undefined) {
        return (
            <div>
                <Head>
                    <title>Not found</title>
                </Head>
                <p>404</p>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>{`${post.info.title} | ${AuthorInfo.fullName}`}</title>
                {
                    post.info.canonicalLink !== null &&
                    <link rel={"canonical"} href={post.info.canonicalLink}/>
                }
                <meta name={"description"} content={post.info.teaser}/>
            </Head>

            <PostDisplay post={post}/>
        </div>
    )
}