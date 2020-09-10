import Link from "next/link";
import Date from "./date";
import { Post } from "../lib/CONSTANTS";

const addHash = (str: string) => `${str}`;

export default function journal({ id, date, title, tags }: Post) {
  return <li key={id}>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>{title}</a>
    </Link>
    <div>
      <Date dateString={date} />
    </div>
    <div>
      {tags.map(addHash).map((item: string, idx: number) => (
        <span key={idx} className="tag">
          {item}
        </span>
      ))}
    </div>
    <style jsx>{`
      li {
        margin-bottom: 24px;
      }`
    }</style>
  </li>
}