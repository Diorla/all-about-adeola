import Layout from "../components/layout";
import Weblink from "../components/weblink";
import Contact from "../components/contact";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";

interface Link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

export default ({ resources }: { resources: Link[] }) => {
  return (
    <Layout>
      <main>
        <section>
          <h1>Credits</h1>
          <div>
            I got the lovely svg drawings from{" "}
            <a href="https://undraw.co/">undraw</a>
          </div>
          <div>
            For the patterned backgrounds, check out{" "}
            <a href="http://www.heropatterns.com/">Hero patterns</a>
          </div>
        </section>
        <section>
          <h1>
            Resources
            <span>
              Below are some of the important links to sites that I find helpful
            </span>
          </h1>
          <div>
            {resources &&
              resources
                .sort((a: Link, b: Link) => (a.title < b.title ? -1 : 1))
                .map((website: Link, idx: number) => (
                  <Weblink {...website} key={idx} />
                ))}
          </div>
        </section>
        <Contact />
      </main>
      <style jsx>{`
        main {
          flex: 1;
          padding: 8px;
        }
        h1 {
          text-align: center;
          font-size: 24px;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid teal;
          margin-bottom: 16px;
        }
        h1 span {
          font-size: 14px;
          color: #212121;
        }
        section {
          margin-bottom: 24px;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = path.join(process.cwd(), "api/data.json");
  const result = fs.readFileSync(res, "utf8");
  const resources: Link[] = JSON.parse(result);

  return {
    props: {
      resources,
    },
  };
};
