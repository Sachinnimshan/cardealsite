import React from "react";
import { FlexContainer } from "../Layouts.styled";
import { TextView } from "../../themes/typography";
import { ArrowRightIcon, IconWrapper } from "../../icons";
import { FONT_SECONDARY, PRIMARY_ORANGE } from "../../themes/common";

function BreadCrumbs(props) {
  return (
    <FlexContainer flex gap={1} alignY="center" margin={props.mobile ? "0 0 1rem 0" : "2rem 0"}>
      <TextView size={0.05}>Home page</TextView>
      <IconWrapper color={FONT_SECONDARY}>
        <ArrowRightIcon />
      </IconWrapper>
      {props?.title && (
        <TextView color={PRIMARY_ORANGE} size={0.05}>
          {props?.title}
        </TextView>
      )}
    </FlexContainer>
  );
}

export default BreadCrumbs;
