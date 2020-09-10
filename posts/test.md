---
title: "This is a test"
date: "2020-01-02"
tags:
  - ookan
  - eeji
  - eeta
  - eerin
  - aarun
---

This is the content

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postsDirectory, MatterResult } from "./CONSTANTS";

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
```
