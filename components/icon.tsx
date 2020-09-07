import {
  FaCodepen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
interface iconProps {
  href: string;
  children: React.ReactNode;
  brandColour: string;
  title?: string;
}

const Icon = ({
  href,
  children,
  brandColour,
  title,
}: iconProps): JSX.Element => (
  <li>
    <a href={href} target="_blank" rel="noreferrer" title={title}>
      <i className="icon">{children}</i>
    </a>
    <style jsx>{`
      li {
        list-style: none;
        margin: 2px;
      }
      a {
        display: block;
        position: relative;
        width: 30px;
        height: 30px;
        background-color: #f1f1f1;
        text-align: center;
        border-radius: 50%;
        padding: 2px;
        box-sizing: border-box;
        text-decoration: none;
        box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
        background: linear-gradient(0deg, #ccc, #fff);
        transition: 0.5s;
      }
      a:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }
      a > .icon {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
        line-height: calc(30px - 1.5px);
        font-size: 21px;
        background: linear-gradient(0deg, #ccc, #fff);
        color: ${brandColour};
        transition: 0.5s;
      }
      li a:hover > .icon {
        color: #eee;
        background: ${brandColour};
      }
    `}</style>
  </li>
);

const FacebookIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#3b5998">
    <FaFacebook />
  </Icon>
);
const TwitterIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#1da1f2">
    <FaTwitter />
  </Icon>
);
const GithubIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#333">
    <FaGithub />
  </Icon>
);
const InstagramIcon = (props: {
  href: string;
  title?: string;
}): JSX.Element => (
  <Icon href={props.href} brandColour="#e4405f">
    <FaInstagram />
  </Icon>
);
const CodepenIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#ae63e4">
    <FaCodepen />
  </Icon>
);
const LinkedinIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#0077b5">
    <FaLinkedin />
  </Icon>
);
const SlackIcon = (props: { href: string; title?: string }): JSX.Element => (
  <Icon href={props.href} brandColour="#6ecadc">
    <FaSlack />
  </Icon>
);

export {
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  CodepenIcon,
  LinkedinIcon,
  SlackIcon,
};
export default Icon;
