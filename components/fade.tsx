import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Waypoint } from "react-waypoint";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const HiddenDiv = styled.div`
  transition: 2s linear;
  opacity: 0;
  transform: translateY(20px);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const RevealedDiv = styled(HiddenDiv)`
  animation: ${fadeIn} 2s ease 0.2s 1 forwards;
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
