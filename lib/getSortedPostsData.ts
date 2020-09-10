import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postsDirectory, MatterResult } from "./CONSTANTS";


/**
 * The function loads all the .md files inside postsDirectory, reads each file to get the dates and then return the list, sorted based on the date
 */
export default function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult: MatterResult = matter(fileContents);


    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
