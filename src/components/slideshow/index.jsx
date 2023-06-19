import React, { useEffect } from "react";
import { useState } from "react";
import SlideButtons from "../../common/slidebtn";
import {
  CarouselBody,
  CarouselContainer,
  CarouselWrapper,
  MainCarouselContainer,
} from "./slideshow.styled";

function SlideShow({ children, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children?.length);

  useEffect(() => {
    setLength(children?.length);
  }, [children]);

  return (
    <MainCarouselContainer>
      <CarouselContainer>
        <CarouselBody>
          <CarouselWrapper
            currentIndex={currentIndex}
            showCount={props.showCount}
            //onTransitionEnd={() => handleTransitionEnd()}
          >
            {children}
          </CarouselWrapper>
        </CarouselBody>
      </CarouselContainer>
      <SlideButtons showNext showPrevious {...props} />
    </MainCarouselContainer>
  );
}

export default SlideShow;
