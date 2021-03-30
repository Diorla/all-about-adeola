import React from "react";
import styled from "styled-components";
import Morph from "./Morph";

export const Menu = styled.div`
  z-index: 100000;
  position: absolute;
  right: 8px;
`;

export interface MenuControlProps {
  onClick: (e: React.SyntheticEvent) => void;
  hidden: boolean;
}

export default function MenuControl({ onClick, hidden }: MenuControlProps) {
  return (
    <Menu>
      <Morph onClick={onClick} hidden={hidden} />
    </Menu>
  );
}
