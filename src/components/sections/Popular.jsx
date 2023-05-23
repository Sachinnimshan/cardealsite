import React from "react";
import { carData } from "../../common/data";
import { CommonLayout } from "../../common/Layouts.styled";
import SlideShow from "../../common/slideshow";
import Tabs from "../../common/tab";
import { BG_COLOR_BLUE, PRIMARY_WHITE } from "../../themes/common";
import { SectionHeader, SectionTitle } from "../../themes/typography";
import { PopularContainer } from "./sections.styled";

function Popular(props) {
  return (
    <CommonLayout mobile={props.mobile} bgrColor={BG_COLOR_BLUE}>
      <SectionHeader>
        <SectionTitle>Popular Makes</SectionTitle>
        <Tabs data={props.data} bgrColor={PRIMARY_WHITE} />
      </SectionHeader>
      <SlideShow data={props.carData} mobile={props.mobile} />
    </CommonLayout>
  );
}

export default Popular;
