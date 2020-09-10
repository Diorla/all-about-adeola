import fs from 'fs';
import { postsDirectory } from "./CONSTANTS";

/**
 * Returns all the .md files inside postsDirectory after removing the extensions
 */
export default function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
