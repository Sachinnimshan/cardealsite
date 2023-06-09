import React from "react";
import { FlexContainer } from '../../themes/Layouts.styled';
import { TextView } from "../../themes/typography";
import { ArrowRightIcon, DashIcon, IconWrapper } from "../../icons";
import { FONT_LIGHT, FONT_SECONDARY, PRIMARY_ORANGE, SECONDARY_BLACK, SECONDARY_ORANGE } from "../../themes/common";

function BreadCrumbs(props) {
  return (
    <FlexContainer flex gap={1} alignY="center" >
      <TextView size={0.05} nowrap color={FONT_SECONDARY}>
        Home page
      </TextView>
      <IconWrapper color={FONT_SECONDARY}>
        <DashIcon />
      </IconWrapper>
      {props?.title && (
        <TextView color={PRIMARY_ORANGE} size={0.05} nowrap overflowX>
          {props?.title}
        </TextView>
      )}
    </FlexContainer>
  );
}

export default BreadCrumbs;
