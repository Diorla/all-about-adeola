import Layout from "../components/layout";
import Product from "../components/product";
import Contact from "../components/contact";

const works = [
  {
    name: "Weblink",
    link: "https://www.weblinkio.web.app",
    img: "works/ade.png",
    description:
      "Fugiat sit commodo esse nostrud adipisicing. Amet exercitation id id commodo veniam consectetur ad labore ullamco enim. Dolor labore quis et consequat qui. Commodo cupidatat minim nisi excepteur deserunt dolore voluptate quis ut labore. Quis nulla mollit exercitation fugiat aliqua.",
  },
  {
    name: "Hera",
    link: "https://www.hera.web.app",
    img: "works/products.jpg",
    description:
      "Commodo nostrud ea mollit irure labore proident sunt officia dolor ut eiusmod sint cillum deserunt. Eu veniam deserunt ullamco ex minim excepteur Lorem. Cillum mollit id minim duis est veniam occaecat cupidatat qui enim pariatur magna.",
  },
  {
    name: "Weblink",
    link: "https://www.weblinkio.web.app",
    img: "works/weblink.jpg",
    description:
      "Non dolor tempor veniam laborum irure do amet et proident duis cupidatat. Id sit irure nostrud quis labore veniam ipsum deserunt eu aliqua in nulla proident. Nisi mollit occaecat velit sunt eiusmod aliqua veniam anim qui pariatur incididunt non. Et labore ad eu laboris nostrud ipsum elit. Anim pariatur nisi pariatur excepteur proident enim incididunt dolor mollit. Deserunt voluptate proident sint et nisi. Commodo do commodo ea Lorem aliqua ad mollit.",
  },
];

export default () => (
  <Layout>
    <h2>These are some of the projets that I have worked on</h2>
    <main>
      {works.map((item, idx) => (
        <Product {...item} key={idx} />
      ))}
    </main>
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
