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
    <div>&copy; {new Date().getFullYear()} Adeola Ade</div>
    <div>
      <a href="#top" id="goTop">
        Top
      </a>
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        background: #333;
        color: white;
        justify-content: space-evenly;
        height: 52px;
        align-items: center;
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
    `}</style>
  </div>
);
