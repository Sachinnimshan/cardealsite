import React, { useState, useEffect } from "react";
import SlideButtons from "../../common/slidebtn";
import { MainSlider, SlideWrapper, Slides } from "./slideshow.styled";

function SlideShow({ children, ...props }) {
  const cardWrapper = document?.querySelector(`.${props.slideWrapperName}`);
  const cardWrapperChildren = Array.from(
    cardWrapper?.children.length > 0 && cardWrapper.children
  );
  const widthToScroll =
    cardWrapper?.children.length > 0 && cardWrapper?.children[0].offsetWidth;
  const cardBounding = cardWrapper?.getBoundingClientRect();
  const column = Math.floor(cardWrapper?.offsetWidth / (widthToScroll + 5));
  let currScroll = 0;
  let initPosition = 0;
  let clicked = false;

  const handleNext = () => {
     cardWrapper.scrollLeft += widthToScroll;
  };

  const handlePrevious = () => {
    cardWrapper.scrollLeft -= widthToScroll;
  };

  useEffect(() => {
    if (cardWrapper?.children.length > 0) {
      initPosition = cardWrapper.scrollLeft;
    }
  },[]);

 

  return (
    <MainSlider>
      <SlideWrapper>
        <Slides
          className={props.slideWrapperName}
          showCount={props.showCount}
          grid="grid"
          gap={!props.mobile}
          mobile={props.mobile}
        >
          {children}
        </Slides>
      </SlideWrapper>
      {props.showControlls && (
        <SlideButtons
          showNext
          showPrevious
          onClickNext={handleNext}
          onClickPrevious={handlePrevious}
        />
      )}
    </MainSlider>
  );
}

export default SlideShow;
