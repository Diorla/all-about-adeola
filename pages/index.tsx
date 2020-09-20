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
        <TwitterIcon href="https://twitter.com/_caphie?s=08" />
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
        <FacebookIcon href="https://www.facebook.com/oke.akeem" />
        <TwitterIcon href="https://www.facebook.com/oke.akeem" />
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
          <div>Maintain server and databse</div>
        </section>
        <section className="portfolio">
          <h2>Latest</h2>
          <div className="gallery">
            <a
              href="www.hera-ng.shopify.com"
              title="hera women shopping"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/hera.png" alt="hera" />
              <span>Hera shopping</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1O_F9xEqDOe3QAX_NepnxXZyUs2DwdNt4/view?usp=sharing"
              title="randomly generates character attributes"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/characters.png" alt="characters" />
              <span>Character generator</span>
            </a>
            <a
              href="www.weblinkio.app"
              title="Save all your links"
              target="_blank"
              rel="noreferrer"
            >
              <img src="works/linker.png" alt="weblinkio" />
              <span>Weblinkio</span>
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
            background-color: #e0f2f1;
            background-attachment: fixed;
            background-color: #e0f2f1;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23008080' fill-opacity='0.11' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
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
            text-align: justify;
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
