import React from "react";
import { FlexContainer } from "../../common/Layouts.styled";
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
      <FlexContainer flex direction="column" gap={2}>
        <TextView size={2} weight={WEIGHT_700} color={SECONDARY_BLACK}>
          Popular Makes
        </TextView>
        <Tabs data={props.data} bgrColor={PRIMARY_WHITE} />
      </FlexContainer>
      <SlideShow data={props.carData} mobile={props.mobile} />
    </FlexContainer>
  );
}

export default Popular;
