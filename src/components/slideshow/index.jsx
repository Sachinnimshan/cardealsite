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
  const [touchPosition, setTouchPosition] = useState(null);
  const [infiniteLoop, setInfiniteLoop] = useState(true);

  const handleNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrevious();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length);
    } else if (currentIndex === length + props.showCount) {
      setCurrentIndex(props.showCount);
    }
  };
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
      <SlideButtons
        showNext
        showPrevious
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
        {...props}
      />
    </MainCarouselContainer>
  );
}

export default SlideShow;
