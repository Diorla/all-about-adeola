import {
  FaCodepen,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => (
  <div className="footer">
    <div className="copyright">
      <div>Ade Adeola</div>
      <div>&copy; {new Date().getFullYear()}</div>
    </div>
    <div className="links">
      <div className="social">
        <a
          href="https://medium.com/@adedotster/"
          target="_blank"
          rel="noreferrer"
          className="medium"
          title="blogs"
        >
          <FaMedium />
        </a>
        <a
          href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.adeolaade.com%2Fabout%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=dihorla&tw_p=followbutton/"
          target="_blank"
          rel="noreferrer"
          className="twitter"
          title="follow me"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/ade-adeola/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
          title="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/Diorla/"
          target="_blank"
          rel="noreferrer"
          className="github"
          title="repositories"
        >
          <FaGithub />
        </a>
        <a
          href="https://codepen.io/Diorla/"
          target="_blank"
          rel="noreferrer"
          className="codepen"
          title="ui collections"
        >
          <FaCodepen />
        </a>
      </div>
      <div>
        <a
          href="https://components.adeolaade.com"
          target="_blank"
          rel="noreferrer"
        >
          web components
        </a>
      </div>
    </div>
    <div className="intro">
      <div>
        Made with <span>❤</span>
      </div>
      <div>React (Next-js)</div>
      <div>Typescript</div>
      <div>Hosted on Vercel</div>
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        flex-direction: row;
        background: linear-gradient(6deg, #fff 30%, #eee 70%);
      }
      @media screen and (max-width: 496px) {
        .footer {
          flex-direction: column;
          justify-content: space-evenly;
        }
        .footer > div {
          align-items: center;
          margin: 0;
        }
      }
      .footer > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
        margin: 16px;
        padding: 16px;
      }
      a {
        display: flex;
        align-items: center;
        padding: 2px;
        transition: 0.2s linear;
      }
      .social a:hover {
        text-decoration: none;
        box-shadow: 0 0 4px;
      }
      .medium {
        color: #00ab6c;
      }
      .twitter {
        color: #1da1f2;
      }
      .linkedin {
        color: #0077b5;
      }
      .github {
        color: #333;
      }
      .codepen {
        color: #ae63e4;
      }
      span {
        color: red;
      }
      .links div {
        flex: 1;
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Footer;
