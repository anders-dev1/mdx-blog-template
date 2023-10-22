import filepathToMdx from "@/utils/filepathToMdx";
import extractPostInfo from "@/utils/frontmatterExtractor";
import {Post, PostType} from "@/domain/post";
import {getPostDir} from "@/utils/postDirs";

type GetPostResult = {
    success: boolean,
    post?: Post
}

export default async function getPost(postFileName: string, postType: PostType): Promise<GetPostResult> {
    let mdxFilepath = `${getPostDir(postType)}${postFileName}`;

    try {
        const mdx = await filepathToMdx(mdxFilepath);
        const info = extractPostInfo(mdx);

        return {success: true, post: {fileName: postFileName, mdx, info, postType}};
    } catch (error) {
        console.log(error);
        return {success: false, post: undefined}
    }
}
