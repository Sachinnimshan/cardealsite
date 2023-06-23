import React, { useState, useEffect } from "react";
import SlideButtons from "../../common/slidebtn";
import { CarouselWrapper, CarouselContainer } from "./slideshow.styled";

function SlideShow({ children, ...props }) {
  return (
    <CarouselContainer>
      <CarouselWrapper
        id="carouselDiv"
        currentIndex={props.currentIndex}
        showCount={props.showCount}
        grid={props.grid}
      >
        {children}
      </CarouselWrapper>
      {props.showControlls && <SlideButtons showNext showPrevious {...props} />}
    </CarouselContainer>
  );
}

export default SlideShow;
