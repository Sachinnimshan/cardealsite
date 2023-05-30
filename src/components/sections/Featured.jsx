import React from "react";
import Button from "../../common/button";
import { FlexContainer } from "../../common/Layouts.styled";
import SectionHeader from "../../common/sectioncommons/SectionHeader";
import SocialMediaIcons from "../../common/social";
import Tabs from "../../common/tab";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
} from "../../themes/common";
import CarCard from "../cards/CarCard";

function Featured(props) {
  const tabs = ["New", "Used"];
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      direction="column"
    >
      <SectionHeader
        subTitle="Handy picked"
        title="Featured Listings"
        mobile={props.mobile}
      >
        <Tabs data={tabs} bgrColor={BG_COLOR} />
      </SectionHeader>
      <FlexContainer gap={1} flexwrap>
        {props.data?.slice(0, 7).map((item, index) => (
          <CarCard
            key={index} data={item} mobile={props.mobile}
           
          />
        ))}
      </FlexContainer>
      <FlexContainer alignX="space-between" flexwrap gap={1} margin="1rem 0">
        <SocialMediaIcons />
        <Button text="View 29 New" bgrColor={PRIMARY_ORANGE} maxWidth />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Featured;
