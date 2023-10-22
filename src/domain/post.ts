import {MDXRemoteSerializeResult} from "next-mdx-remote";

export type Post = {
    fileName: string,
    mdx: MDXRemoteSerializeResult,
    info: PostInfo,
    postType: PostType
}

export type PostInfo = {
    title: string
    stringDate: string,
    teaser: string,
    canonicalLink: string | null
}

export type PostSearchModel = {
    id: string,
    type: PostType,
    info: PostInfo
}

export enum PostType {
    Blog,
    Guide
}