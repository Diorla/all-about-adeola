import React from "react";
import { SlideDown, SlideUp } from "./Slide";
import Container from "./Container";

export interface MenuSlideProps {
  hidden: boolean;
  active: string;
}

const MenuSlide = ({ hidden, active }: MenuSlideProps) => {
  if (hidden)
    return (
      <SlideUp>
        <Container active={active} />
      </SlideUp>
    );
  return (
    <SlideDown>
      <Container active={active} />
    </SlideDown>
  );
};

export default MenuSlide;
