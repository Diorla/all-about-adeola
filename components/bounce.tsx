import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Waypoint } from "react-waypoint";

const bounceAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const HiddenDiv = styled.div`
  transition: 2s linear;
  transform: scale(0);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const RevealedDiv = styled.div`
  transition: 2s linear;
  transform: scale(0);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  animation: ${bounceAnimation} 2s ease 1s 1 forwards;
`;

export interface BounceProps {
  children: React.ReactNode;
}
export default function Bounce({ children }: BounceProps) {
  const [reveal, setReveal] = useState(false);

  return (
    <Waypoint onEnter={() => setReveal(true)}>
      {reveal ? (
        <RevealedDiv>{children}</RevealedDiv>
      ) : (
        <HiddenDiv>{children}</HiddenDiv>
      )}
    </Waypoint>
  );
}
