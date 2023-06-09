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
  BG_COLOR,
  BG_COLOR_BLUE,
  BORDER_COLOR,
  FONT_LIGHT,
  FONT_SECONDARY,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import BreadCrumbs from "../sectioncommons/BreadCrumbs";
import ConditionTabs from "../sectioncommons/ConditionTabs";
import Button from "../../common/button";
import { useState } from "react";
import { useEffect } from "react";

function MainSearch(props) {
  const [showFilter, setShowFilter] = useState(true);
  const handleShowFilter = () => setShowFilter(!showFilter);

  useEffect(() => {
    if (props.mobile) {
      setShowFilter(false);
    }
    return () => {
      setShowFilter(true);
    };
  }, [props.mobile]);
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : "2rem 4rem"}
      bgrColor={BG_COLOR_BLUE}
      gap={1}
      direction="column"
      position="relative"
    >
      <BreadCrumbs title="Search" mobile={props.mobile} />
      {showFilter && (
        <FlexContainer direction="column" gap={1}>
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

          {!props.mobile && (
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
          )}
        </FlexContainer>
      )}

      <FlexContainer
        flexwrap
        gap={1}
        bgrColor={BG_COLOR_BLUE}
        alignX="space-between"
        borderTop={BORDER_COLOR}
        alignY={!props.mobile && "center"}
        direction={props.mobile && "column"}
        flexwrap
      >
        {props.mobile && (
          <Button
            text={props.mobile && showFilter ? "Clear Filters" : "Filter"}
            border
            small
            onClick={handleShowFilter}
          />
        )}
        <ConditionTabs
          padding={props.mobile ? "0.5rem" : "1rem"}
          size={0.25}
          color={SECONDARY_BLACK}
          activeTop
          showCount
        />
        <FlexContainer
          gap={1}
          alignX={props.mobile ? "end" : "space-between"}
          flex={props.mobile}
        >
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
