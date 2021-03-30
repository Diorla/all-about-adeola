import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
`;
const SlideUp = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  transform-origin: top;
  background-color: teal;
  transform: scaleY(1);
  transform-origin: top;
  z-index: 1000;
  color: white;
  animation: ${slideUp} 0.6s ease 0.2s 1 forwards;
`;

export { slideUp, SlideUp as default}