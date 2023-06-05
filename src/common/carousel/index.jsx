import React, { useEffect, useState } from "react";
import {
  CarouselBody,
  CarouselContainer,
  CarouselWrapper,
  MainContainer,
} from "./carousel.styled";
import SlideButtons from "../slidebtn";

const Carousel = ({ children, ...props }) => {
  const [infiniteLoop, setInfiniteLoop] = useState(true);
  const [showCount, setShowCount] = useState(6);
  const [length, setLength] = useState(children.length);
  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop ? showCount : 0
  );
  const [touchPosition, setTouchPosition] = useState(null);
  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > showCount
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const handleNext = () => {
    if (isRepeating || currentIndex < length - showCount) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (isRepeating || currentIndex > 0) {
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

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < showCount; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < showCount; index++) {
      output.push(children[index]);
    }
    return output;
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + showCount) {
        setTransitionEnabled(false);
        setCurrentIndex(showCount);
      }
    }
  };

  const showNextBtn = () => isRepeating || currentIndex < length - showCount;
  const showPrevBtn = () => (isRepeating || currentIndex) > 0;

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > showCount);
  }, [children, infiniteLoop, showCount]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === showCount || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, showCount, length]);

  return (
    <MainContainer>
      <CarouselContainer>
        <CarouselBody
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <CarouselWrapper
            currentIndex={currentIndex}
            showCount={props.mobile ? 2 : showCount}
            onTransitionEnd={() => handleTransitionEnd()}
            style={{
              transition: !transitionEnabled ? "none" : undefined,
            }}
          >
            {length > showCount && isRepeating && renderExtraPrev()}
            {children}
            {length > showCount && isRepeating && renderExtraNext()}
          </CarouselWrapper>
        </CarouselBody>
      </CarouselContainer>
      <SlideButtons
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
        alignX="center"
        position="absolute"
        top="30%"
        alignX="space-between"
        width="100%"
        showNext={showNextBtn}
        showPrevious={showPrevBtn}
        size={props.mobile ? "1rem" : "1.5rem"}
      />
    </MainContainer>
  );
};

export default Carousel;
