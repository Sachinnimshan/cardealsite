import React from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import SectionHeader from "../../common/sectioncommons/SectionHeader";
import SlideShow from "../../common/slideshow";
import Tabs from "../../common/tab";
import {
  BG_COLOR_BLUE,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
function Popular(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      bgrColor={BG_COLOR_BLUE}
      direction="column"
    >
      <SectionHeader title=" Popular Makes" alignX = "space-between" mobile={props.mobile}>
        <Tabs data={props.data} bgrColor={PRIMARY_WHITE} />
      </SectionHeader>
      <SlideShow data={props.carData} mobile={props.mobile} />
    </FlexContainer>
  );
}

export default Popular;
