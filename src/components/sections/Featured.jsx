import React from "react";
import Button from "../../common/button";
import { FlexContainer } from "../../common/Layouts.styled";
import SocialMediaIcons from "../../common/social";
import Tabs from "../../common/tab";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import CarCard from "../cards/CarCard";

function Featured(props) {
  const tabs = ["New", "Used"];
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      direction="column"
    >
      <FlexContainer alignX="space-between" flexwrap margin="1rem 0">
        <FlexContainer direction="column" gap={1.5} padding="2rem 0">
          <TextView size={0.75} weight={WEIGHT_400} color={PRIMARY_ORANGE}>
            Handy picked
          </TextView>
          <TextView size={2} weight={WEIGHT_700} color={SECONDARY_BLACK}>
            Featured Listings
          </TextView>
        </FlexContainer>
        <Tabs data={tabs} bgrColor={BG_COLOR} />
      </FlexContainer>
      <FlexContainer gap={1} flexwrap>
        {props.data?.slice(0, 7).map((item, index) => (
          <CarCard
            key={index}
            images={item?.images}
            title={item?.title}
            price={item?.price}
            year={item?.year}
            fuel={item?.fuel}
            transmission={item?.transmission}
            mobile={props.mobile}
            id={item?.id}
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
