import Layout from "../../components/layout";
import getPostData from "../../lib/getPostData";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import { PostData } from "../../lib/CONSTANTS";

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="article">
        <h1>{postData.title}</h1>
        <div className="date">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="content"
        />
        <div className="bottom">
          <Link href="/journal">
            <a>Back to journal</a>
          </Link>
        </div>
      </article>
      <style>{`
        /*I need global so it will affect rendered .md files*/
        .article h1 {
          text-align: center;
          font-weight: bold;
          font-size: 24px;
        }
        .article {
          padding: 8px;
          font-family: Roboto, Arial;
        }
        .article .date {
          text-align: center;
        }
        .article .content p {
          margin-bottom: 8px;
          line-height: 24px;
        }
        .article .content ul {
          margin: 8px;
        }
        .article .content li {
          list-style: inside;
        }
        .article .bottom {
          text-align: end;
        }
      `}</style>
    </Layout>
  );
}
type Params = {
  params: {
    id: string;
  };
};
export const getServerSideProps = async ({ params }: Params) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
