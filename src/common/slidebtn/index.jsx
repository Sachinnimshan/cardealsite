import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, IconWrapper } from "../../icons";
import { PRIMARY_WHITE, SECONDARY_BLACK } from "../../themes/common";
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
      <IconWrapper
        onClick={props.onClickNext}
        size={props.size}
        hoverColor={props.hoverColor}
        padding="1rem"
        shadow
        radius
        color={SECONDARY_BLACK}
        bgrColor={PRIMARY_WHITE}
      >
        <ArrowLeftIcon />
      </IconWrapper>
      <IconWrapper
        onClick={props.onClickPrevious}
        size={props.size}
        hoverColor={props.hoverColor}
        padding="1rem"
        shadow
        radius
        color={SECONDARY_BLACK}
        bgrColor={PRIMARY_WHITE}
      >
        <ArrowRightIcon />
      </IconWrapper>
    </FlexContainer>
  );
}

export default SlideButtons;
