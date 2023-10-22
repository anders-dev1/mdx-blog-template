import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import getPost from "@/utils/getPost";
import {PostType} from "@/domain/post";
import React from "react";
import {generatePostSubUrl} from "@/utils/postUrl";
import {PostSearcher} from "@/pages/api/searchposts";
import PostPage from "@/components/PostPage";

export default function GuidePage({success, post}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <PostPage post={post} success={success}/>
}

export async function getStaticPaths() {
    const posts = await PostSearcher.search("", PostType.Guide);
    const paths = posts.map(e => generatePostSubUrl(e));
    return {paths: paths, fallback: "blocking"}
}

export async function getStaticProps(ctx: GetStaticPropsContext<{ slug: string }>) {
    const {slug} = ctx.params!;

    const result = await getPost(`${slug}.mdx`, PostType.Guide);

    return {
        props: {
            success: result.success,
            post: result.post || null
        }
    }
}