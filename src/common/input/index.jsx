import React from "react";
import { InputContainer } from "./input.styled";
import { FlexContainer } from "../../themes/Layouts.styled";
import { IconWrapper } from "../../icons";
import {
  BORDER_COLOR,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
} from "../../themes/common";

function Input(props) {
  return (
    <FlexContainer
      bgrColor={PRIMARY_WHITE}
      gap={1}
      radius
      border={BORDER_COLOR}
      padding="0.25rem 1rem"
      flex
    >
      <InputContainer placeholder={props.placeholder} />
      <IconWrapper size="1.25rem" color={SECONDARY_BLACK}>
        {props.icon}
      </IconWrapper>
    </FlexContainer>
  );
}

export default Input;
