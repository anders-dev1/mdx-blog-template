import {MDXRemoteSerializeResult} from "next-mdx-remote";
import {PostInfo} from "@/domain/post";

export default function extractPostInfo(mdxSource: MDXRemoteSerializeResult): PostInfo {
    return {
        title: mdxSource.frontmatter.title as string || "",
        stringDate: mdxSource.frontmatter.date as string || "",
        teaser: mdxSource.frontmatter.teaser as string || "",
        canonicalLink: mdxSource.frontmatter.canonicalLink as string || null
    }
}