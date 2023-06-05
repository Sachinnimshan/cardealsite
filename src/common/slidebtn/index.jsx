import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, IconWrapper } from "../../icons";
import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";

function SlideButtons(props) {
  return (
    <FlexContainer
      gap={1}
      width={props.width}
      alignY="center"
      alignX={props.alignX}
      position={props.position}
      top={props.top}
    >
      {props.showPrevious && (
        <IconWrapper
          onClick={props.onClickPrevious}
          size={props.size}
          padding="1rem"
          shadow
          radius
          color={SECONDARY_BLACK}
          bgrColor={PRIMARY_WHITE}
          hoverColor={PRIMARY_ORANGE}
          className="slideControlBtn"
          id="left"
        >
          <ArrowLeftIcon />
        </IconWrapper>
      )}
      {props.showNext && (
        <IconWrapper
          onClick={props.onClickNext}
          size={props.size}
          padding="1rem"
          shadow
          radius
          color={SECONDARY_BLACK}
          bgrColor={PRIMARY_WHITE}
          hoverColor={PRIMARY_ORANGE}
          className="slideControlBtn"
          id="right"
        >
          <ArrowRightIcon />
        </IconWrapper>
      )}
    </FlexContainer>
  );
}

export default SlideButtons;
