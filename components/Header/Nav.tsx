import React from "react";
import styled from "styled-components";
import styles from "./styles";

const { main } = styles;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: ${main.breakpoint}) {
    width: 100%;
  }
`;

export default ({ children }: { children: React.ReactNode }) => (
  <StyledNav>{children}</StyledNav>
);
