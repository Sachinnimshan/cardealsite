import React from "react";
import { vehicleBrands } from "../../common/data";
import Input from "../../common/input";
import { FlexContainer } from "../../themes/Layouts.styled";
import SelectBox from "../../common/select";
import {
  CompareIcon,
  DoubleArrowIcon,
  IconWrapper,
  SearchIcon,
} from "../../icons";
import {
  BG_COLOR_BLUE,
  BORDER_COLOR,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import BreadCrumbs from "../sectioncommons/BreadCrumbs";
import ConditionTabs from "../sectioncommons/ConditionTabs";

function MainSearch(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : "2rem 4rem"}
      bgrColor={BG_COLOR_BLUE}
      gap={1}
      direction="column"
    >
      <BreadCrumbs title="Search" mobile={props.mobile} />
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
      <FlexContainer
        flexwrap
        gap={0.25}
        bgrColor={BG_COLOR_BLUE}
        alignX="space-between"
        borderTop={BORDER_COLOR}
        alignY="center"
      >
        <ConditionTabs
          padding="1rem"
          size={0.25}
          color={SECONDARY_BLACK}
          activeTop
          showCount
        />
        <FlexContainer gap={1} flexwrap alignX="end">
          <FlexContainer gap={0.5} alignY="center">
            <IconWrapper
              color={SECONDARY_BLACK}
              size="1.5rem"
              hoverColor={PRIMARY_ORANGE}
            >
              <CompareIcon />
            </IconWrapper>
            <TextView size={0.25} color={SECONDARY_BLACK}>
              Compare
            </TextView>
          </FlexContainer>
          <Input placeholder="Enter keyword" icon={<SearchIcon />} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default MainSearch;
