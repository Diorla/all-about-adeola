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
`;

const RevealedDiv = styled(HiddenDiv)`
  animation: ${fadeIn} 2s ease 0.5s 1 forwards;
`;

export interface BounceProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: BounceProps) {
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
