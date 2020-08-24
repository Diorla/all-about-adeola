import { CodepenIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "./icon";
export default () => (
  <div className="footer">
    <div className="top">
      <div>
        <span>&copy; </span>
        <span>{new Date().getFullYear()} </span>
        <span>Adeola Ade</span>
      </div>
      <div>
        <a href="#top">Top</a>
      </div>
    </div>
    <div className="middle">
      <TwitterIcon
        href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.adeolaade.com%2Fabout%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=dihorla&tw_p=followbutton"
        title="follow me"
      />
      <LinkedinIcon href="https://www.linkedin.com/in/ade-adeola" />
      <GithubIcon href="https://www.github.com/Diorla" />
      <CodepenIcon href="https://codepen.io/Diorla/" />
    </div>
    <div className="bottom">
      Made with <span> ❤ </span> and React/Nextjs
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #333;
        color: white;
      }
      .footer > div {
        margin: 8px;
        display: flex;
      }
      .top {
        justify-content: space-between;
        flex: 1;
        width: 100%;
        padding: 8px;
      }
      .footer a {
        color: white;
      }
      .footer .bottom {
        display: block;
      }
      .bottom span {
        color: red;
      }
    `}</style>
  </div>
);
