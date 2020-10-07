import Layout from "../components/layout";
import Highlight from "../components/highlight";
import Contact from "../components/contact";
import styled from "styled-components";

const works = [
  {
    name: "Hera",
    link: "https://hera.adeolaade.com/",
    img: "images/hera.svg",
    description: "Spa and massage demo website",
  },
  {
    name: "Character generator",
    link: "https://github.com/Diorla/character-generator/releases/tag/2.0.1",
    img: "images/chargen.svg",
    description: "Generates random attributes for fictional characters",
  },
  {
    name: "Weblink",
    link: "https://weblinkio.app/",
    img: "images/linker.svg",
    description: "Cross browser, cross platform web bookmarking",
  },
];

const ShowcaseDiv = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export default () => (
  <Layout>
    <h2>These are some of my projects</h2>
    <ShowcaseDiv>
      {works.map((item, idx) => (
        <Highlight key={idx} {...item} />
      ))}
    </ShowcaseDiv>
    <Contact />
    <style jsx>{`
      h2 {
        font-weight: bold;
        text-align: center;
        margin: 24px auto 48px;
        font-style: italic;
      }
      main {
        flex: 1;
        background: linear-gradient(
          rgba(232, 230, 230, 1),
          rgba(232, 230, 230, 0.1)
        );
      }
    `}</style>
  </Layout>
);
