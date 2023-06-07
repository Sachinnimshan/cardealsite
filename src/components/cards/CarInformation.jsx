import React from "react";
import { CircleIcon, IconWrapper, StarIcon } from "../../icons";
import {
  BG_COLOR,
  BG_COLOR_BLUE,
  FONT_DARK,
  FONT_LIGHT,
  FONT_SECONDARY,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_500,
  WEIGHT_600,
} from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";
import { TextView } from "../../themes/typography";
import formatCurrency from "../../utils/currency";

function CarInformation({ data, ...props }) {
  return (
    <FlexContainer
      padding={!props.listView && "1rem"}
      bgrColor={props.bgrColor || SECONDARY_BLACK}
      gap={1}
      flex
      zIndex="1000"
      alignX="space-between"
    >
      <FlexContainer direction="column" gap={0.5}>
        <TextView
          size={props.listView ? 0.5 : 0.1}
          color={props.titleColor || PRIMARY_WHITE}
          nowrap={props.listView}
          weight={props.listView && WEIGHT_600}
        >
          {data.title.substr(0, 28)}
          {data.title.length >= 28 && `...`}
        </TextView>
        {props.listView && (
          <FlexContainer gap={0.25}>
            {data?.techSpecs.slice(0, 4)?.map((item, index) => (
              <TextView nowrap size={0.01} color={FONT_LIGHT} key={index}>
                {item}
                {index !== 4 && `,`}
              </TextView>
            ))}
          </FlexContainer>
        )}
        {!props.listView && (
          <TextView
            weight={WEIGHT_600}
            color={props.priceColor || PRIMARY_WHITE}
            size={0.25}
          >
            {formatCurrency(data?.price)}
          </TextView>
        )}
        <FlexContainer
          padding="1rem 0 0 0"
          borderTop={props.borderTop || FONT_DARK}
          gap={1.5}
          alignY="center"
          flex
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
          <FlexContainer alignY="center" gap={0.25}>
            {props.listView && (
              <IconWrapper color={PRIMARY_ORANGE} size="12px">
                <CircleIcon />
              </IconWrapper>
            )}
            <TextView color={FONT_SECONDARY} size={0.01}>
              {data.transmission}
            </TextView>
          </FlexContainer>
          <FlexContainer alignY="center" gap={0.25}>
            {props.listView && (
              <IconWrapper color={PRIMARY_ORANGE} size="12px">
                <CircleIcon />
              </IconWrapper>
            )}
            <TextView color={FONT_SECONDARY} size={0.01}>
              {data.fuel}
            </TextView>
          </FlexContainer>
        </FlexContainer>
        {props.listView && (
          <FlexContainer alignY="center" gap={0.5}>
            <TextView color={PRIMARY_ORANGE} size={0.01}>
              Location:
            </TextView>
            <FlexContainer flex gap={0.25}>
              {data?.locations?.map((item, index) => (
                <TextView size={0.01}>
                  {item}
                  {index !== data?.locations?.length - 1 && `,`}
                </TextView>
              ))}
            </FlexContainer>
          </FlexContainer>
        )}
      </FlexContainer>
      {props.listView && (
        <FlexContainer
          direction="column"
          gap={0.5}
          alignY="flex-end"
          flex
          alignX="space-between"
        >
          <IconWrapper
            size="2rem"
            color={FONT_DARK}
            hoverBgrColor={BG_COLOR_BLUE}
            padding
            radius
          >
            <StarIcon />
          </IconWrapper>
          <FlexContainer direction="column" alignY="flex-end" gap={0.1}>
            <TextView size={1} color={PRIMARY_ORANGE} weight={WEIGHT_600}>
              {formatCurrency(data.price)}
            </TextView>
            <TextView
              size={0.01}
              color={FONT_LIGHT}
              hoverColor={PRIMARY_ORANGE}
              underline
              nowrap
            >
              Calculate financing
            </TextView>
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
}

export default CarInformation;
