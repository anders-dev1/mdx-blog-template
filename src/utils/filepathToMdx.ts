import {remarkCodeHike} from "@code-hike/mdx";
import {MDXRemoteSerializeResult} from "next-mdx-remote";
import fs from "fs";

export default async function filepathToMdx(filePath: string): Promise<MDXRemoteSerializeResult> {
    const fileContents = fs.readFileSync(filePath);

    const { serialize } = await import("next-mdx-remote/serialize");

    return await serialize(fileContents, {
        mdxOptions: {
            remarkPlugins:[
                [remarkCodeHike,
                    {
                        autoImport: false,
                        lineNumbers: true
                    },]
            ],
            useDynamicImport: true
        },
        parseFrontmatter: true
    });
}