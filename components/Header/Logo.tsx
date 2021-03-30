import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "./Link";
import styles from "./styles";

const { logo } = styles;

export const StyledLogo = styled(StyledLink)`
  font-family: ${logo.fontFamily};
  font-size: 28px;
  margin: ${logo.margin};
  padding: ${logo.padding};
  z-index: 100000;
  position: absolute;
  left: 8px;
  color: white;
  font-weight: bold;
  &:hover {
    text-shadow: 0 0 2px black;
    transform: none;
    font-weight: bolder;
  }
`;

export default () => (
  <Link href="/">
    <StyledLogo>{`<Code />`}</StyledLogo>
  </Link>
);
