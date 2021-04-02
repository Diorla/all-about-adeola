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
  position: fixed;
  height: 100vh;
  top: 0;
  width: 100%;
  transform-origin: top;
  background-color: teal;
  transform-origin: top;
  z-index: 1000;
  color: white;
  @media screen and (max-height: 520px) {
    overflow-y: scroll;
  }
  @media screen and (max-width: 450px) {
    overflow-y: scroll;
  }
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
