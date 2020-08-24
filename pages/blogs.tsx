import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const addHash = (str: string) => `${str}`;

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <main>
        <section className="intro">
          <div>
            So, I have decided to catalogue my unique experiences with the hope
            that I can preserve and revisit them. - Aug, 2020.
          </div>
        </section>
        <section className="blogs">
          <h2>Journals</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title, tags }) => (
              <li className="" key={id}>
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
              </li>
            ))}
          </ul>
        </section>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex: 1;
          background: rgba(0, 0, 0, 0.015);
          flex-direction: column;
        }
        h2 {
          font-size: 48px;
        }
        .intro {
          padding: 8px;
          width: 95%;
          margin: 0 auto;
          border-radius: 4px;
          max-width: 640px;
        }
        .blogs {
          flex: 1;
          padding: 8px;
        }
        .tag {
          margin: 4px;
          font-size: 14px;
          font-style: italic;
        }
        li {
          margin-bottom: 24px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
