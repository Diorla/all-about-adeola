import Link from 'next/link';


export default () => <div className="header">
  <Link href="/"><a className="logo">Adeola Ade</a></Link>
  <ul className="nav">
    <li>
      <Link href="/about"><a>About</a></Link>
    </li>
    <li>
      <Link href="/blogs"><a>Articles</a></Link>
    </li>
    <li>
      <Link href="/works"><a>Works</a></Link>
    </li>
    <li>
      <Link href="/resources"><a>Resources</a></Link>
    </li>
    <li className="highlight">
      <Link href="#contact"><a>Hire Me</a></Link>
      {/**On each page, there will a div#contact that will contain links to social(facebook, twitter, email) and a form so that user can contact me
       * ON top of it, it will say  "Thank you for your interest!"
      */}
    </li>
  </ul>
  <style jsx>{`
    .header {
      display: flex;
      flex: 1;
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
    }
    .nav li {
      margin: 4px;
      padding: 4px;
    }
    .header a {
      color: black;
    }
    .logo {
      font-family: 'Oleo Script', cursive;
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