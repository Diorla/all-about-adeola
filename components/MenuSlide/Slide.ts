import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const slideUp = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
`;

const Slide = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  transform-origin: top;
  background-color: teal;
  transform-origin: top;
  z-index: 1000;
  color: white;
`;

const SlideUp = styled(Slide)`
  transform: scaleY(1);
  animation: ${slideUp} 0.6s ease 0.2s 1 forwards;
`;

const SlideDown = styled(Slide)`
  transform: scaleY(0);
  animation: ${slideDown} 0.6s ease 0.2s 1 forwards;
`;

export { slideDown, SlideDown, SlideUp, Slide as default };
