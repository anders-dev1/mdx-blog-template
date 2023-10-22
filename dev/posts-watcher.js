import fs from "fs";
import {blogDir, guidesDir} from "./getSrcDirectoryPath.js";
import {generatePostsData} from "./generate-posts-data.js";

const directoriesToWatch = [blogDir, guidesDir];

console.log("Post file watcher running!");

let timeout = null;

directoriesToWatch.forEach(directory => {
    fs.watch(directory, (event, filename) => {
        if (event === 'change') {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                // Your code to run after the delay
                await generatePostsData();
                console.log("Post data generated");
            }, 5000);
        }
    });
});