import React from "react";
import styled from "styled-components";
import Fade from "./fade";

interface HighlightProps {
  name: string;
  link: string;
  img: string;
  description: string;
}

const StyledDiv = styled.div<{ img: string }>`
  width: max(320px, min(100%, 720px));
  width: clamp(320px, 100%, 720px);
  height: 480px;
  box-shadow: 0 0 6px;
  background-image: ${(props) => "url(" + props.img + ")"};
  background-size: cover;
  background-position: center;
`;

const ContentDiv = styled.div`
  display: flex;
  background: #008080e6;
  color: white;
  opacity: 0;
  transition: 0.2s linear;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  transform: translateY(-20px);
  text-align: center;
  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledLink = styled.div`
  margin-bottom: 32px;
`;
const Highlight = ({ name, link, img, description }: HighlightProps) => (
  <Fade>
    <StyledDiv img={img}>
      <ContentDiv>{description}</ContentDiv>
    </StyledDiv>
    <StyledLink>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </StyledLink>
  </Fade>
);

export default Highlight;
