import Weblink from "../components/weblink";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import React, { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import styled from "styled-components";

interface Link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

const CreditLink = styled.a`
  color: #b2dfdb;
  font-weight: 500;
`;

const Subtitle = styled.span`
  color: white;
  font-size: 15px;
`;

export default ({ resources }: { resources: Link[] }) => {
  const [search, setSearch] = useState("");
  return (
    <Layout active="resources">
      <main>
        <section>
          <h1>Credits</h1>
          <div>
            Icons from{" "}
            <CreditLink
              href="https://pixabay.com/users/creativemagic-480360/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3227459"
              target="_blank"
              rel="noreferrer"
            >
              React-icons
            </CreditLink>
          </div>
          <div>
            Background image by{" "}
            <CreditLink
              href="https://pixabay.com/users/chenspec-7784448/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6010961"
              target="_blank"
              rel="noreferrer"
            >
              chenspec
            </CreditLink>{" "}
            from{" "}
            <CreditLink
              href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6010961"
              target="_blank"
              rel="noreferrer"
            >
              Pixabay
            </CreditLink>
          </div>
        </section>
        <section>
          <h1>
            Resources
            <Subtitle>
              Below are some of the important links to sites that I find helpful
            </Subtitle>
          </h1>
          <div className="search-input">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Filter"
            />
          </div>
          <div className="resources">
            {resources &&
              resources
                .filter((link) =>
                  link.tags
                    .join(" ")
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .sort((a: Link, b: Link) => (a.title < b.title ? -1 : 1))
                .map((website: Link, idx: number) => (
                  <Weblink {...website} key={website.title} delay={idx * 0.1} />
                ))}
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          flex: 1;
          padding: 8px;
          color: white;
        }
        main input {
          background: black;
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
        .search-input {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .search-input > input {
          min-width: 280px;
        }
        .resources {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
        @media screen and (max-width: 600px) {
          .resources {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media screen and (min-width: 1024px) {
          .resources {
            grid-template-columns: repeat(3, 1fr);
          }
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
