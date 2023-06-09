import React from "react";
import Button from "../../common/button";
import { vehicleBrands } from "../../common/data";
import { FlexContainer } from "../../themes/Layouts.styled";
import SelectBox from "../../common/select";
import { SearchIcon } from "../../icons";
import { BG_COLOR, PRIMARY_WHITE, WEIGHT_500 } from "../../themes/common";
import ConditionTabs from "../sectioncommons/ConditionTabs";
import ButtonLink from '../../common/link';

function SearchBox(props) {
  return (
    <FlexContainer direction="column" radius>
      <ConditionTabs
        padding="1rem 2rem"
        size={0.2}
        color={PRIMARY_WHITE}
        weight={WEIGHT_500}
      />
      <FlexContainer
        flex
        flexwrap={props.mobile}
        gap={props.mobile ? 0.5 : 0.25}
        padding="1.75rem"
        bgrColor={BG_COLOR}
        radius
        alignY={!props.mobile && "center"}
        direction={props.mobile && "column"}
      >
        <SelectBox data={vehicleBrands} />
        <SelectBox data={vehicleBrands} />
        <SelectBox data={vehicleBrands} />
        <ButtonLink to="/search">
          <Button
            text={props.mobile && "Search"}
            textColor={PRIMARY_WHITE}
            textSize="16px"
            iconSize="18px"
            hover
            icon={<SearchIcon />}
          />
        </ButtonLink>
      </FlexContainer>
    </FlexContainer>
  );
}

export default SearchBox;
