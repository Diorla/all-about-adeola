import Link from "next/link";

export default () => (
  <div className="header" id="top">
    <Link href="/">
      <a className="logo">Adeola Ade</a>
    </Link>
    <ul className="nav">
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/blogs">
          <a>Journal</a>
        </Link>
      </li>
      <li>
        <Link href="/works">
          <a>Works</a>
        </Link>
      </li>
      <li>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
      </li>
      <li className="highlight">
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 1000;
        background: white;
      }
      .nav {
        list-style: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
      .nav li {
        margin: 4px;
        padding: 4px;
      }
      .header a {
        color: black;
      }
      .logo {
        font-family: "Oleo Script", cursive;
        font-size: 24px;
      }
      .logo:hover {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.7);
      }
      .highlight {
        background: teal;
        border-radius: 4px;
        text-align: center;
      }
      .highlight:hover {
        background: #009688;
      }
      .highlight a {
        color: white;
      }
      .highlight a:hover {
        text-decoration: none;
      }
      @media screen and (max-width: 496px) {
        .header {
          flex-direction: column;
          justify-content: space-evenly;
        }
      }
    `}</style>
  </div>
);
