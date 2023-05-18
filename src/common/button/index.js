import React from "react";
import { ButtonContainer } from "./button.styled";

function Button(props) {
  return (
    <ButtonContainer
      bgrColor={props.bgrColor}
      color={props.color}
      hover={props.hover}
      hoverColor={props.hoverColor}
      hoverBgColor={props.hoverBgColor}
      border={props.border}
      hoverBorder={props.hoverBorder}
      maxWidth={props.maxWidth}
    >
      {props.text}
    </ButtonContainer>
  );
}

export default Button;
