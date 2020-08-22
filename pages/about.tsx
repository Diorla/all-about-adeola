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
            <li>
              Hi! I am Adeola, a software engineer based in Ibadan, Nigeria.
            </li>
            <li>
              I enjoy programming and creating things for the web or mobile
              devices.
            </li>
            <li>I'm committed to creating great experience through my work.</li>
          </ul>
        </div>
      </div>
      <div className="section two">
        <ul>
          <li>Mobile first developer</li>
          <li>Responsive design</li>
          <li>Mobile app with react-native</li>
          <li>Keen attention to details</li>
          <li>Cross browser</li>
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
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Electron.js</li>
          </ul>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
          <ul>
            <li>Adobe XD</li>
            <li>Blender</li>
            <li>Inkscape</li>
            <li>LINQ</li>
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
          background: lavender;
        }
        .one > div:first-of-type {
          max-width: 260px;
          margin: auto;
        }
        .two {
          height: 180px;
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
      `}</style>
    </main>
  </Layout>
);
