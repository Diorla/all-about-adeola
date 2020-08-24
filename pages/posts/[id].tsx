import Layout from "../../components/layout";
import { getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import { GetServerSideProps } from "next";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div className="date">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="content"
        />
        <div className="bottom">
          <Link href="/blogs">
            <a>Back</a>
          </Link>
        </div>
      </article>
      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: bold;
          font-size: 24px;
        }
        article {
          padding: 8px;
          font-family: Roboto, Arial;
        }
        .date {
          text-align: center;
        }
        .content p {
          margin-bottom: 8px;
          line-height: 24px;
        }
        .content ul {
          margin: 8px;
        }
        .content .content li {
          margin: 8px;
          list-style: inside;
        }
        .bottom {
          text-align: end;
        }
      `}</style>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postData = await getPostData(context.params.id);
  return {
    props: {
      postData,
    },
  };
};
