import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  // fetch the files names
  return fs.readdirSync(postsDirectory)
}
// This is an example of what a fields will look like
// [
//   'title',
//   'date',
//   'slug',
//   'author',
//   'content',
//   'ogImage',
//   'coverImage',
// ]
/**
 * Reads and return the process content of a file
 * @param slug The name of the target fileq
 * @param fields Don't know yet
 */
export function getPostBySlug(slug: string, fields: string[] = []) {
  // remove .md from filename
  const realSlug = slug.replace(/\.md$/, '')
  // e.g. a/b/c/d.md
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  // get the content of the file as utf8 strings
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // process it with gray-matter
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}