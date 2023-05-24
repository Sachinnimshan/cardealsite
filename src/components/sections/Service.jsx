import React from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import { IconWrapper } from "../../icons";
import {
  FONT_LIGHT,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_600,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";

function Service(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      direction="column"
      gap={2}
      alignY="center"
      alignX="center"
    >
      <TextView size={2} weight={WEIGHT_700} color={SECONDARY_BLACK}>
        Why choose us ?
      </TextView>
      <FlexContainer gap={3} margin="3rem 0" alignX="center" flexwrap flex>
        {props.data?.map((item, index) => (
          <FlexContainer
            key={index}
            direction="column"
            alignY="center"
            gap={2}
            flex
          >
            <IconWrapper
              size="2rem"
              color={item?.color}
              bgrColor={item?.bgrColor}
              padding="1rem"
              radius
            >
              {item?.icon}
            </IconWrapper>
            <TextView size={0.4} weight={WEIGHT_600} color={SECONDARY_BLACK}>
              {item?.title}
            </TextView>
            <TextView size={0.01} weight={WEIGHT_400} color={FONT_LIGHT}>
              {item?.description}
            </TextView>
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Service;
