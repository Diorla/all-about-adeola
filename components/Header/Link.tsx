import Link from "next/link";
import styled from "styled-components";
import styles from "./styles";

const { link } = styles;

export const StyledLink = styled.a`
  color: ${link.color};
  cursor: ${link.cursor};
  margin: ${link.margin};
  padding: ${link.padding};
`;

export default ({ href, title }: { href: string; title: string }) => (
  <Link href={href}>
    <StyledLink>{title}</StyledLink>
  </Link>
);
