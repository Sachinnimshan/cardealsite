import React, { useEffect } from "react";
import { useState } from "react";
import SlideButtons from "../../common/slidebtn";
import {
  CarouselBody,
  CarouselWrapper,
  CarouselContainer,
} from "./slideshow.styled";

function SlideShow({ children, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children?.length);

  useEffect(() => {
    setLength(children?.length);
  }, [children]);

  return (
    <CarouselContainer>
      <CarouselBody>
        <CarouselWrapper id="carouselDiv">{children}</CarouselWrapper>
      </CarouselBody>
      {props.showControlls && <SlideButtons showNext showPrevious {...props} />}
    </CarouselContainer>
  );
}

export default SlideShow;
