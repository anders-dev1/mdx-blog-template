import path from "path";
import fs from "fs";

export const blogDir = `${postsDir()}blog\\`
export const guidesDir = `${postsDir()}guides\\`;

export function postsDir() {
    return `${getSrcDirectoryPath(process.cwd())}\\posts\\`;
}

export function getSrcDirectoryPath(currentPath) {
    // Check if the current directory contains a "src" directory
    const srcPath = path.join(currentPath, 'src');
    if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
        return srcPath;
    }

    // If we reach the root directory, return null (src not found)
    const parentPath = path.dirname(currentPath);
    if (parentPath === currentPath) {
        return null;
    }

    // Recursively search in the parent directory
    return getSrcDirectoryPath(parentPath);
}