import Link from "next/link";
import styled from "styled-components";
import animation from "../../theme/animation";
import { StyledLink } from "./Link";
import styles from "./styles";

const { highlight } = styles;

export const StyledHighlight = styled(StyledLink)`
  background: ${highlight.backgroundColor};
  border-radius: ${highlight.borderRadius};
  text-align: ${highlight.textAlign};
  color: ${highlight.color};
  transition: ${animation.transition};
  &:hover {
    background: ${highlight.hoverColor};
    text-decoration: ${highlight.textDecoration};
  }
`;

export default ({ href, title }: { href: string; title: string }) => (
  <Link href={href}>
    <StyledHighlight>{title}</StyledHighlight>
  </Link>
);
