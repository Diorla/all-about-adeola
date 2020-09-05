import Layout from "../components/layout";
import Weblink from "../components/weblink";
import Contact from "../components/contact";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { useEffect, useState } from "react";

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
          <h2>Credits</h2>
          <div>
            Icons are sourced from{" "}
            <a href="https://fontawesome.com/">Fontawesome</a>{" "}
          </div>
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
          <h2>
            Below are some of the important links to sites that I find helpful
          </h2>
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
        h2 {
          text-align: center;
          font-size: 24px;
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
