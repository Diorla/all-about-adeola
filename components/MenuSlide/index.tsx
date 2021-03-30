import React from "react";
import { SlideDown, SlideUp } from "./Slide";

export interface MenuSlideProps {
  hidden?: boolean;
  children: React.ReactNode;
}

const MenuSlide = ({ hidden, children }: MenuSlideProps) => {
  if (hidden) return <SlideUp>{children}</SlideUp>;
  return <SlideDown>{children}</SlideDown>;
};

export default MenuSlide;
