import path from 'path';
// The directory of all the journals
export const postsDirectory = path.join(process.cwd(), "posts");


export interface MatterResult {
  content: string;
  isEmpty?: boolean;
  excerpt?: string;
  data: any; // update to contain the following: title, id, date, tags
}

export interface Post {
  id: string;
  date: string;
  title: string;
  tags: string[];
}

export interface PostData {
  title: string;
  date: string;
  contentHtml: string;
}