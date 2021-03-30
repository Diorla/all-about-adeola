import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Main = styled.div`
  position: fixed;
  bottom: 150px;
  color: white;
  padding: 12px;
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
    <Layout>
      <Main>
        <h1>Web developer</h1>
        <p>Design, Develop, Create something beautiful</p>
      </Main>
    </Layout>
  );
}
