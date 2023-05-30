import React from "react";
import { FlexContainer } from "../Layouts.styled";
import { TextView } from "../../themes/typography";
import { ArrowRightIcon, IconWrapper } from "../../icons";
import { FONT_SECONDARY, PADDING_DESKTOP, PADDING_MOBILE, PRIMARY_ORANGE, PRIMARY_WHITE } from "../../themes/common";

function BreadCrumbs(props) {
  return (
    <FlexContainer
      flex
      gap={1}
      alignY="center"
    >
      <TextView size={0.05}>Home page</TextView>
      <IconWrapper color={FONT_SECONDARY}>
        <ArrowRightIcon />
      </IconWrapper>
      {props?.title && (
        <TextView
          color={PRIMARY_ORANGE}
          size={0.05}
        >
          {props?.title}
        </TextView>
      )}
    </FlexContainer>
  );
}

export default BreadCrumbs;
