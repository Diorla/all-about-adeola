import Layout from "../components/layout";
import Contact from "../components/contact";

export default () => (
  <Layout>
    <main>
      <div className="section one">
        <div>
          <img src="avatar.jpg" alt="Profile image" />
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
        <h1>Skillset</h1>
        <div>
          <ul>
            <li>HTML</li>
            <li>JSON</li>
            <li>YAML</li>
            <li>LINQ</li>
          </ul>
          <ul>
            <li>CSS</li>
            <li>SCSS</li>
            <li>LESS</li>
            <li>PostCSS</li>
          </ul>
          <ul>
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
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>React-native</li>
            <li>Redux</li>
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
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Bash</li>
            <li>Chrome DevTools</li>
          </ul>
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
          align-items: center;
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
