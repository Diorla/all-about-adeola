import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Contact from "../components/contact";
import { TwitterIcon, FacebookIcon } from "../components/icon";
import Card from "../components/card";

const reference = [
  {
    name: "Tayo Adedotun",
    image: "clients/tayo.jpg",
    comment:
      "Professional, diligent and talented. I am more than satisfied with work. I remembered when he convinced me to go online, I was pessimistic but now I can truly appreciate the work. Sales is way up, yet I'm doing less work due to automation.",
    links: (
      <>
        <TwitterIcon
          href="https://twitter.com/_caphie?s=08"
          title="Tayo twitter page"
        />
      </>
    ),
  },
  {
    name: "Abdulakeem Oke",
    image: "clients/akeem.jpg",
    comment:
      "As an corp member at UMC, I was happy about my contribution. And the highlight of my time was when I came up with the idea to manage school's data online. This made us one of the 'hip' school and I must say, the website Adeola built for my school was straight out of my imagination, in fact, it was better! The staffs were so impressed with the work, they hired me full time.",
    links: (
      <>
        <FacebookIcon
          href="https://www.facebook.com/oke.akeem"
          title="Akeem facebook page"
        />
        <TwitterIcon
          href="https://www.twitter.com/@kebzor"
          title="Akeem twitter page"
        />
      </>
    ),
  },
];
export default function Home() {
  return (
    <Layout>
      <main>
        <section className="landing">
          <div>Fullstack developer for all your web developing solutions</div>
        </section>
        <section className="intro">
          <h2>How can I help you?</h2>
          <div>Design and create engaging website.</div>
          <div>Create cross platform mobile apps with react-native</div>
          <div>Maintain server and database</div>
        </section>
        <section className="portfolio">
          <h2>Latest</h2>
          <div className="gallery">
            <a
              href="https://hera.adeolaade.com"
              title="hera spa"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/hera.png" alt="hera logo" />
              <span>Hera spa</span>
            </a>
            <a
              href="https://github.com/Diorla/character-generator/releases/tag/2.0.1"
              title="randomly generates character attributes"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/characters.png" alt="char gen logo" />
              <span>Character generator</span>
            </a>
            <a
              href="https://weblinkio.app"
              title="Save all your links"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/linker.png" alt="web link logo " />
              <span>Web link</span>
            </a>
          </div>
        </section>
        <section className="testimony">
          <div>
            <Carousel>
              {reference.map((item, idx) => (
                <Card {...item} key={idx} />
              ))}
            </Carousel>
          </div>
        </section>
        <Contact />
      </main>
      <style jsx>
        {`
          main {
            background-attachment: fixed;
            background-color: #e0f2f1;
            background-image: url("jigsaw.svg");
          }
          section {
            padding: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 200px;
            width: 100%;
          }
          .landing {
            background-image: url(landing.svg);
            background-size: 100% 100%;
            background-color: #e0f2f1;
            background-repeat: no-repeat;
            font-family: helvetica;
            display: flex;
            align-items: flex-start;
            background-position: right;
            background-size: contain;
            height: 60vh;
          }
          .landing div {
            font-size: 24px;
            color: teal;
            padding: 8px;
            background-color: rgba(255, 255, 255, 0.7);
            max-width: 320px;
            margin: 16px;
            border-radius: 8px;
          }
          .intro {
            display: flex;
            flex-direction: column;
            background-color: #e0f2f199;
          }
          h2 {
            font-size: 28px;
            max-width: 480px;
            text-align: center;
            margin: 24px 0 12px;
          }
          .intro div {
            max-width: 720px;
            text-align: center;
          }
          .gallery {
            justify-content: space-evenly;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          img {
            height: 50px;
          }
          .gallery a {
            display: flex;
            text-decoration: none;
            align-items: center;
            color: #004d40;
            text-shadow: 0 0 1px #e0f2f1;
          }
          .gallery a:hover span {
            opacity: 1;
            transition: opacity 0.2s linear;
          }
          .portfolio {
            justify-content: space-evenly;
          }
          .testimony {
            margin-bottom: 24px;
          }
          .testimony > div {
            max-width: 640px;
            display: block;
            min-width: 320px;
            width: 80%;
          }
        `}
      </style>
    </Layout>
  );
}
