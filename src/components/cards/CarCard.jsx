import React from "react";
import {
  FONT_DARK,
  FONT_SECONDARY,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_600,
} from "../../themes/common";
import { CarCardContainer, FeaturedTag } from "./cards.styled";
import formatCurrency from "../../utils/currency";
import { TextView } from "../../themes/typography";
import { FlexContainer } from "../../common/Layouts.styled";
import CarImage from "./CarImage";

function CarCard({ data, ...props }) {
  return (
    <CarCardContainer
      mobile={props.mobile}
      to={`/cars/${data?.id}`}
      border={props.border}
    >
      {props.featured && <FeaturedTag>Featured</FeaturedTag>}

      <CarImage
        images={data.images}
        small
        zoom
        topRadius
        carId={data?.id}
        cardView
      />
      <FlexContainer
        direction="column"
        bgrColor={props.bgrColor || SECONDARY_BLACK}
        padding="1rem"
        gap={0.5}
        zIndex="1000"
      >
        <TextView
          size={0.1}
          color={props.titleColor || PRIMARY_WHITE}
          align="left"
        >
          {data.title.substr(0, 28)}
          {data.title.length >= 28 && `...`}
        </TextView>
        <TextView
          weight={WEIGHT_600}
          color={props.priceColor || PRIMARY_WHITE}
          size={0.25}
        >
          {formatCurrency(data.price)}
        </TextView>
        <FlexContainer
          flex
          gap={2}
          padding="1rem 0 0 0"
          borderTop={props.borderTop || FONT_DARK}
          padding="1rem 0 0 0"
        >
          <TextView
            bgrColor={PRIMARY_ORANGE}
            color={PRIMARY_WHITE}
            padding="2px 10px"
            radius
            size={0.01}
          >
            {data.year}
          </TextView>
          <TextView color={FONT_SECONDARY} size={0.01}>
            {data.transmission}
          </TextView>
          <TextView color={FONT_SECONDARY} size={0.01}>
            {data.fuel}
          </TextView>
        </FlexContainer>
      </FlexContainer>
    </CarCardContainer>
  );
}

export default CarCard;
