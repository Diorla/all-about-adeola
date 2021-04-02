import React from "react";
import styled from "styled-components";

interface HighlightProps {
  name: string;
  link: string;
  img: string;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background: white;
  margin: 8px;
`;

const Header = styled.a<{ image: string }>`
  background-image: ${({ image }) => "url(" + image + ")"};
  display: inline-flex;
  height: 200px;
  width: 320px;
  display: relative;
  background-position: center;
  background-size: cover;
  transition: 0.4s linear;
  background-blend-mode: multiply;
  &:hover {
    background-color: teal;
  }
`;

const Caption = styled.div`
  height: 60px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bolder;
  color: #004d40;
`;

const Description = styled.div`
  color: #4c4949;
  font-style: italic;
`;

const Temp = styled.div`
  position: absolute;
  background: red;
`;

const Highlight = ({ name, link, img, description }: HighlightProps) => {
  const title = description.length > 30 ? description : "";
  return (
    <Wrapper>
      <Header href={link} target="_blank" rel="noreferrer" image={img}>
        <Temp />
      </Header>
      <Caption title={title}>
        <Title>{name}</Title>
        <Description>
          {description.substr(0, 30)}
          {description.length > 30 && "..."}
        </Description>
      </Caption>
    </Wrapper>
  );
};

export default Highlight;
