import styled from "styled-components";
import Layout from "../components/Layout";
/**
 * //TODO: Add tools page
 * This will include things like image converter
 */
const Main = styled.div`
  position: fixed;
  bottom: 30vh;
  color: white;
  & > h1 {
    font-size: 48px;
    line-height: 28px;
    margin-bottom: 8px;
  }
  & > p {
    font-size: 18px;
    margin-left: 48px;
  }
`;

export default function Home() {
  return (
    <Layout active="home" title="Ade Adeola - Home">
      <Main>
        <h1>Web developer</h1>
        <p>Design, Develop, Create something beautiful</p>
      </Main>
    </Layout>
  );
}
