import React from "react";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_SECONDARY,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_600,
} from "../../themes/common";
import { CarCardContainer, CarCardImage } from "./cards.styled";
import formatCurrency from "../../utils/currency";
import { TextView } from "../../themes/typography";
import { FlexContainer } from "../../common/Layouts.styled";

function CarCard(props) {
  return (
    <CarCardContainer mobile={props.mobile} to={`/cars/${props?.id}`}>
      <CarCardImage src={props.images} />
      <FlexContainer
        direction="column"
        bgrColor={SECONDARY_BLACK}
        padding="1rem"
        gap={0.5}
      >
        <TextView size={0.1} color={PRIMARY_WHITE} align="left">
          {props.title.substr(0, 28)}{props.title.length >= 28 && `...`}
        </TextView>
        <TextView weight={WEIGHT_600} color={PRIMARY_WHITE} size={0.25}>
          {formatCurrency(props.price)}
        </TextView>
        <FlexContainer
          flex
          gap={2}
          padding="1rem 0 0 0"
          border={FONT_DARK}
          padding="1rem 0 0 0"
        >
          <TextView
            bgrColor={PRIMARY_ORANGE}
            color={PRIMARY_WHITE}
            padding="2px 10px"
            radius
            size={0.01}
          >
            {props.year}
          </TextView>
          <TextView color={FONT_SECONDARY} size={0.01}>
            {props.transmission}
          </TextView>
          <TextView color={FONT_SECONDARY} size={0.01}>
            {props.fuel}
          </TextView>
        </FlexContainer>
      </FlexContainer>
    </CarCardContainer>
  );
}

export default CarCard;
