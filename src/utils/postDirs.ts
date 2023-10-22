import {PostType} from "@/domain/post";

export function getPostDir(postType: PostType): string {
    switch (postType) {
        case PostType.Blog:
            return blogDir;
        case PostType.Guide:
            return guidesDir;
        default:
            return "";
    }
}

export const postsDir = "./src/posts/";
export const blogDir = `${postsDir}blog/`;
export const guidesDir = `${postsDir}guides/`;