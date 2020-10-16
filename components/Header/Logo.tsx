import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import { StyledLink } from "./Link";
import styles from "./styles";

const { logo } = styles;

export const StyledLogo = styled(StyledLink)`
  font-family: ${logo.fontFamily};
  font-size: ${logo.fontSize};
  margin: ${logo.margin};
  padding: ${logo.padding};
  &:hover {
    text-decoration: ${logo.textDecoration};
  }
`;

export default ({ href, title }: { href: string; title: string }) => (
  <Link href={href}>
    <StyledLogo>{title}</StyledLogo>
  </Link>
);
