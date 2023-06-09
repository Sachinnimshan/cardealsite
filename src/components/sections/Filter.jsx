import React from "react";
import { vehicleBrands } from "../../common/data";
import SelectBox from "../../common/select";
import { DoubleArrowIcon, IconWrapper } from "../../icons";
import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";
import { TextView } from "../../themes/typography";

function Filter(props) {
  return (
    <FlexContainer direction="column">
      <FlexContainer gap={0.5} direction="column">
        <FlexContainer gap={0.5} flexwrap>
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
        </FlexContainer>
        <FlexContainer gap={0.5} flexwrap>
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer flex gap={1} alignX="flex-end" padding="0.5rem 0">
        <TextView
          color={SECONDARY_BLACK}
          size={0.1}
          hoverColor={PRIMARY_ORANGE}
        >
          Clear All
        </TextView>
        <FlexContainer gap={0.5} alignY="center">
          <IconWrapper color={PRIMARY_ORANGE} size="1.25rem">
            <DoubleArrowIcon />
          </IconWrapper>
          <TextView
            color={SECONDARY_BLACK}
            size={0.1}
            hoverColor={PRIMARY_ORANGE}
          >
            More Filters
          </TextView>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Filter;
