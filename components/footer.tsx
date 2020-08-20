export default () => (
  <div className="footer">
    <div className="links">
      <a
        href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.adeolaade.com%2Fabout%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=dihorla&tw_p=followbutton"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/ade-adeola"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <a href="gt" target="_blank" rel="noreferrer">
        github
      </a>
      <a href="https://codepen.io/Diorla/" target="_blank" rel="noreferrer">
        Codepen
      </a>
    </div>
    <div className="copyright">
      <span>&copy; </span>
      <span>{new Date().getFullYear()} </span>
      <span>Adeola Ade</span>
    </div>
    <div>
      <a href="#top" onClick={() => window.scrollTo(0, 0)}>
        Top
      </a>
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        background: #333;
        color: white;
        justify-content: space-evenly;
        align-items: center;
        padding: 8px;
        flex-wrap: wrap;
      }
      .footer a {
        color: white;
        margin: 4px;
      }
      .footer > div {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
      }
      .copyright {
        justify-content: center;
      }
      .copyright span {
        margin-right: 4px;
      }
    `}</style>
  </div>
);
