import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SlideButtons from "../../common/slidebtn";
import {
  MainContainer,
  Slides,
  SlideShowContainer,
  SlideShowWrapper,
} from "./slideshow.styled";

function Carousel({ children, ...props }) {
  const [length, setLength] = useState(children.length);
  const slider = document.getElementById("carouselslider");
  const slideItems = document.getElementById("carouselslides");
  const carItem = document.querySelector(".carcard");

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <MainContainer>
      <SlideShowContainer id="carouselslider" className="carouselslider">
        <SlideShowWrapper id="carouselwrapper" className="carouselwrapper">
          <Slides id="carouselslides" className="carouselslides">
            {children}
          </Slides>
        </SlideShowWrapper>
      </SlideShowContainer>
      <SlideButtons showNext showPrevious {...props} />
    </MainContainer>
  );
}

export default Carousel;
