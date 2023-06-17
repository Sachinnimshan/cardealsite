import React from "react";
import { FlexContainer } from "../../themes/Layouts.styled";
import Tabs from "../../common/tab";
import {
  BG_COLOR_BLUE,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_WHITE,
} from "../../themes/common";
import SectionHeader from "../sectioncommons/SectionHeader";
import SlideShow from "../slideshow";
import CarCard from "../cards/CarCard";
import Carousel from "../slideshow/Carousel";
function Popular(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      bgrColor={BG_COLOR_BLUE}
      direction="column"
    >
      <SectionHeader
        title=" Popular Makes"
        alignX="space-between"
        mobile={props.mobile}
      >
        <Tabs data={props.data} bgrColor={PRIMARY_WHITE} />
      </SectionHeader>
      <Carousel>
        {props.carData?.map((item, index) => (
          <CarCard data={item} key={index} shrink="0"  />
        ))}
      </Carousel>
    </FlexContainer>
  );
}

export default Popular;
