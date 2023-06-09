import React from "react";
import { IconWrapper } from "../../icons";
import { WEIGHT_500 } from "../../themes/common";
import { TextView } from "../../themes/typography";
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
      small={props.small}
      flex={props.flex}
      onClick={props.onClick}
    >
      {props.icon && (
        <IconWrapper size={props.iconSize}>{props.icon}</IconWrapper>
      )}
      {props.text && props.text}
    </ButtonContainer>
  );
}

export default Button;
