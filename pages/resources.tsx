import Layout from "../components/layout";
import Weblink from "../components/weblink";
import Contact from "../components/contact";
import Placeholder from "../components/placeholder";
import "isomorphic-fetch";
import { useEffect, useState } from "react";

interface link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

export default () => {
  const [api, setApi] = useState(null);
  useEffect(() => {
    fetch("/api/websites")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setApi(myJson);
      });
    return () => null;
  }, []);
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
          {api ? (
            <div>
              {api
                .sort((a, b) => (a.title < b.title ? -1 : 1))
                .map((website: link, idx: number) => (
                  <Weblink {...website} key={idx} />
                ))}
            </div>
          ) : (
            <div>
              {[1, 2, 3, 4, 5].map((item) => (
                <Placeholder key={item} />
              ))}
            </div>
          )}
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
