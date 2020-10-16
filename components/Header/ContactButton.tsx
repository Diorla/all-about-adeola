import React from "react";
import Link from "next/link";
import styled from "styled-components";
import animation from "../../theme/animation";
import { StyledLink } from "./Link";
import styles from "./styles";

const { contact } = styles;

export const StyledHighlight = styled(StyledLink)`
  background: ${contact.backgroundColor};
  border-radius: ${contact.borderRadius};
  text-align: ${contact.textAlign};
  color: ${contact.color};
  transition: ${animation.transition};
  &:hover {
    background: ${contact.hoverColor};
    text-decoration: ${contact.textDecoration};
  }
`;

export default () => (
  <Link href="#contact">
    <StyledHighlight>Contact</StyledHighlight>
  </Link>
);
