interface iconProps {
  href: string;
  icon: string;
  brandColour: string;
  title?: string;
}

const Icon = (props: iconProps) => (
  <li>
    <a href={props.href} target="_blank" rel="noreferrer" title={props.title}>
      <i className={`fab ${props.icon}`} aria-hidden="true"></i>
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
      a .fab {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
        line-height: calc(30px - 3px);
        font-size: 21px;
        background: linear-gradient(0deg, #ccc, #fff);
        color: ${props.brandColour};
        transition: 0.5s;
      }
      li a:hover .fab {
        color: #eee;
        background: ${props.brandColour};
      }
    `}</style>
  </li>
);

const FacebookIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-facebook" brandColour="#3b5998" />
);
const TwitterIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-twitter" brandColour="#1da1f2" />
);
const GithubIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-github" brandColour="#333" />
);
const InstagramIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-instagram" brandColour="#e4405f" />
);
const CodepenIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-codepen" brandColour="#ae63e4" />
);
const LinkedinIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-linkedin" brandColour="#0077b5" />
);
const SlackIcon = (props: { href: string; title?: string }) => (
  <Icon href={props.href} icon="fa-slack" brandColour="#6ecadc" />
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
