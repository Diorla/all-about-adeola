import React from "react";
import styled from "styled-components";
import Bounce from "./bounce";

interface HighlightProps {
  name: string;
  link: string;
  img: string;
  description: string;
}
const StyledDiv = styled.div`
  height: 480px;
  max-width: 720px;
  width: 100%;
  box-shadow: 0 0 6px;
  &:hover > div {
    transform: scale(1);
  }
`;
const BaseDiv = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  height: 480px;
  max-width: 720px;
  width: 100%;
  margin-bottom: 16px;
  position: absolute;
  background-position: center;
  background-size: cover;
`;
const SlideDiv = styled.div`
  height: 480px;
  max-width: 720px;
  width: 100%;
  margin-bottom: 16px;
  position: absolute;
  background: rgba(255, 255, 255, 0.99);
  transform-origin: top;
  transform: scaleY(0);
  transition: 0.3s cubic-bezier(0, 1.3, 1, 0.21);
  padding: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Highlight = ({ name, link, img, description }: HighlightProps) => (
  <Bounce>
    <StyledDiv>
      <BaseDiv img={img}></BaseDiv>
      <SlideDiv>{description}</SlideDiv>
    </StyledDiv>
    <div style={{ marginBottom: 32 }}>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  </Bounce>
);

export default Highlight;
