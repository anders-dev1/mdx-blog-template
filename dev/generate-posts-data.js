import fs from "fs";
import {serialize} from "next-mdx-remote/serialize";
import {remarkCodeHike} from "@code-hike/mdx";
import path from "path";
import {blogDir, getSrcDirectoryPath, guidesDir, postsDir} from "./getSrcDirectoryPath.js";

async function getFontMatter(filePath) {
    const fileContent = fs.readFileSync(filePath);
    const serialized = await serialize(fileContent, {
        mdxOptions: {
            remarkPlugins: [
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

    return serialized.frontmatter;
}

async function getPostInfoFromDir(postDir) {
    const postFiles = await fs.promises.readdir(postDir);

    return await Promise.all(postFiles.map(async e => {
        const fontMatter = await getFontMatter(`${postDir}${e}`);
        return {fontMatter, id: e.substring(0, e.indexOf(".mdx"))};
    }));
}

function writePostDataToJson(postData, filepath) {
    const postsJson = JSON.stringify(postData);
    fs.writeFile(filepath, postsJson, (err) => {
        if (err !== null) {
            console.log(err);
        }
    });
}

export async function generatePostsData() {
    const srcDirectory = getSrcDirectoryPath(process.cwd());

    const blogPosts = await getPostInfoFromDir(blogDir);
    writePostDataToJson(blogPosts, `${srcDirectory}\\posts\\blog-posts-data.json`);

    const guidePosts = await getPostInfoFromDir(guidesDir);
    writePostDataToJson(guidePosts, `${srcDirectory}\\posts\\guides-post-data.json`);
}