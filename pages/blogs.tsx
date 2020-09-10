import { GetStaticProps } from "next";
import Layout from "../components/layout";
import getSortedPostsData from "../lib/getSortedPostsData";
import Journal from "../components/journal";
import { Post } from "../lib/CONSTANTS";

const addHash = (str: string) => `${str}`;

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <Layout>
      <main>
        <section className="intro">
          <div>
            So, I have decided to catalogue new stuff that I have just learnt. - Aug, 2020.
          </div>
        </section>
        <section className="blogs">
          <h2>Journals</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title, tags }: Post) => (
              <Journal id={id} key={id} date={date} title={title} tags={tags} />
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
