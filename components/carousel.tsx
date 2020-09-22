import React, { ReactNode } from "react";
import Slider from "react-slick";
export interface CarouselProps {
  children: ReactNode;
  /**
   * The container for the entire carousel.
   */
}

const Carousel = ({ children }: CarouselProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: 320,
    arrows: false,
    className: "carousel",
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
