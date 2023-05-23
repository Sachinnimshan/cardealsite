import React from "react";
import {
  FONT_SECONDARY,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_600,
} from "../../themes/common";
import {
  CarCardContainer,
  CarCardImage,
  CarCardInfo,
  CarCardInfoBottom,
  CarCardText,
} from "./cards.styled";
import { Link } from "react-router-dom";

function CarCard(props) {
  return (
    <CarCardContainer mobile={props.mobile} to={`/cars/${props?.id}`}>
      <CarCardImage src={props.images} />
      <CarCardInfo>
        <CarCardText>{props.title}</CarCardText>
        <CarCardText
          weight={WEIGHT_600}
          color={PRIMARY_WHITE}
          size="calc(1rem + 0.2vw)"
        >
          {props.price}
        </CarCardText>
        <CarCardInfoBottom>
          <CarCardText bgrColor={PRIMARY_ORANGE} padding="2px 10px" size="14px">
            {props.year}
          </CarCardText>
          <CarCardText size="14px" color={FONT_SECONDARY}>
            {props.transmission}
          </CarCardText>
          <CarCardText size="14px" color={FONT_SECONDARY}>
            {props.fuel}
          </CarCardText>
        </CarCardInfoBottom>
      </CarCardInfo>
    </CarCardContainer>
  );
}

export default CarCard;
