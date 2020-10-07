import Layout from "../components/layout";
import Contact from "../components/contact";
import {
  SiAdobexd,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGnubash,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiWire,
} from "react-icons/si";
import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  color: ${(props) => props.color};
  margin-right: 4px;
  display: flex;
  align-items: center;
`;
export default () => (
  <Layout>
    <main>
      <div className="section one">
        <div>
          <img src="avatar.jpg" alt="Ade Adeola" />
        </div>
        <div>
          <ul>
            <li>Hi! I am Adeola, a software engineer based in Nigeria.</li>
            <li>
              I enjoy programming and creating things for the web or mobile
              devices.
            </li>
            <li>I'm committed to creating great experience through my work.</li>
            <li>
              Local Time:{" "}
              {new Date().toLocaleTimeString("en-GB", {
                timeZone: "Africa/Lagos",
              })}
            </li>
          </ul>
        </div>
      </div>
      <div className="section two">
        <ul>
          <li>Mobile first developer</li>
          <li>Responsive design</li>
          <li>Keen attention to details</li>
          <li>Curious and a critical thinker</li>
          <li>Cross browser tested website</li>
          <li>Clean code and best practices</li>
        </ul>
      </div>
      <div className="section three">
        <h1>Tools</h1>
        <div>
          <ul>
            <li>
              <Icon color="#e65327">
                <SiHtml5 />
              </Icon>
              HTML5
            </li>
            <li>
              <Icon color="#498bda">
                <SiCss3 />
              </Icon>
              CSS
            </li>
            <li>
              <Icon color="#ffcb2c">
                <SiFirebase />
              </Icon>
              Firebase
            </li>
            <li>
              <Icon color="#f0db4f">
                <SiJavascript />
              </Icon>
              Javascript
            </li>
            <li>
              <Icon color="#0074c1">
                <SiTypescript />
              </Icon>
              Typescript
            </li>
            <li>
              <Icon color="#4a96ab">
                <SiReact />
              </Icon>
              React-js
            </li>
            <li>
              <Icon color="#61dafb">
                <SiReact />
              </Icon>
              React-native
            </li>
            <li>
              <Icon color="#450135">
                <SiAdobexd />
              </Icon>
              Adobe XD
            </li>
            <li>
              <Icon color="">
                <SiWire />
              </Icon>
              Wireframe
            </li>
            <li>
              <Icon color="#f54d27">
                <SiGit />
              </Icon>
              Git
            </li>
            <li>
              <Icon color="#283037">
                <SiGnubash />
              </Icon>
              Bash
            </li>
            <li>
              <Icon color="#efc62b">
                <SiGooglechrome />
              </Icon>
              Chrome DevTools
            </li>
          </ul>
          {/* <ul>
            <li>Material-ui</li>
            <li>Semantic-ui</li>
            <li>Boostrap</li>
            <li>Antd</li>
          </ul>
          <ul>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Expressjs</li>
            <li>AWS</li>
          </ul>
          <ul>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Electron.js</li>
            <li>Typescript</li>
          </ul>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
          <ul>
            <li>Wireframe</li>
            <li>Adobe XD</li>
            <li>Blender</li>
            <li>Inkscape</li>
          </ul>
          <ul></ul> */}
        </div>
        <Contact />
      </div>
      <style jsx>{`
        .section {
          display: flex;
        }
        .one {
          width: 100%;
          flex-wrap: wrap;
          margin: 20px 0;
        }
        .one div {
          display: flex;
          flex: 1;
          align-items: center;
          padding: 4px;
          min-width: 240px;
        }
        .one img {
          height: 240px;
          border-radius: 4px;
          padding: 8px;
          box-shadow: 0 0 4px -1px black;
        }
        .one > div {
          justify-content: space-around;
        }
        .one ul {
          font-family: "Baloo Tamma 2", cursive;
        }
        .two {
          height: 210px;
          align-items: center;
          justify-content: space-around;
          font-family: cursive;
          clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
        }
        .three {
          flex-direction: column;
        }
        .three > div {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          font-weight: 500;
        }
        .three ul {
          width: 150px;
          text-align: center;
          margin: 4px;
          border-bottom: 1px solid teal;
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        .three li {
          margin: 16px;
          display: flex;
          align-items: center;
        }
        .three h1 {
          font-weight: bold;
          border-bottom: 1px solid teal;
        }
        .two {
          background: linear-gradient(218deg, #e0f2f1, #008080);
          background-size: 400% 400%;
          animation: backgroundAnimation 20s ease infinite;
        }
        @keyframes backgroundAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        img {
          animation: imgRotation 40s linear infinite;
        }
        @keyframes imgRotation {
          0% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </main>
  </Layout>
);
