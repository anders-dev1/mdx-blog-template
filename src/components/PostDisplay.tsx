import {CH} from "@code-hike/mdx/components";
import React from "react";
import Divider from "@/components/Divider";
import {MDXRemote} from "next-mdx-remote";
import {Post} from "@/domain/post";
import BlogImage from "@/components/BlogImage";

const components = {
    CH,
    h1: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
        <h1 className={"post-h1"} {...props} />
    ),
    h2: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
        <h2 className={"post-h2 on-surface-text secondary-text mt-8"} {...props} />
    ),
    h3: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
        <h3 className={"post-h3 on-surface-text secondary-text mt-8"} {...props} />
    ),
    p: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
        <p className={"post-p on-surface-text mt-2"} {...props} />
    ),
    a: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
        <a className={"post-p on-surface-text mt-2 primary-text hover:underline"} {...props} />
    ),
    ol: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
        <ol className={"post-p on-surface-text mt-2 list-decimal list-inside"} {...props}></ol>
    ),
    ul: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
        <ul className={"post-p on-surface-text mt-2 list-disc list-inside"} {...props}></ul>
    ),
    li: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
        <li className={"pt-2"} {...props}></li>
    ),
    BlogImage: (props: { src: string, sub: string, alt: string, width: number, height: number }) => (
        <BlogImage src={props.src} sub={props.sub} alt={props.alt} width={props.width} height={props.height}/>
    ),
    code: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
        <code className={"code"} {...props} />
    )
}

type Props = {
    post: Post
}

export default function PostDisplay({post}: Props) {

    return (
        <div className={"mt-4 flex w-full align-middle justify-center"}>
            <div className={"min-w-full"}>
            <h1 className={"post-h1 primary-text mt-4"}>{post.info.title}</h1>
            <p className={"body-medium outline-text text-right"}>{post.info.stringDate}</p>
            <Divider className={"mt-2 mb-8"}/>
            <MDXRemote {...post.mdx} components={components}/>
            </div>
        </div>
    )
}