import React from "react";
import { carData } from "../../common/data";
import SlideShow from "../../common/slideshow";
import Tabs from "../../common/tab";
import { PRIMARY_WHITE } from "../../themes/common";
import { SectionHeader, SectionTitle } from "../../themes/typography";
import { PopularContainer } from "./sections.styled";

function Popular(props) {
  return (
    <PopularContainer mobile={props.mobile}>
      <SectionHeader>
        <SectionTitle>Popular Makes</SectionTitle>
        <Tabs data={props.data} bgrColor={PRIMARY_WHITE} />
      </SectionHeader>
      <SlideShow data={carData} mobile={props.mobile} />
    </PopularContainer>
  );
}

export default Popular;
