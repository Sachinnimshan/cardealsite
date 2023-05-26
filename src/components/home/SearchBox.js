import React, { useState } from "react";
import Button from "../../common/button";
import { vehicleBrands } from "../../common/data";
import { FlexContainer } from "../../common/Layouts.styled";
import ConditionTabs from "../../common/sectioncommons/ConditionTabs";
import SelectBox from "../../common/select";
import { BG_COLOR, PRIMARY_BLACK, PRIMARY_ORANGE, SECONDARY_BLACK, WEIGHT_500 } from "../../themes/common";
import {
  HomeSearchBody,
  HomeSearchContainer,
  HomeSearchHeader,
  HomeSearchRow,
  HomeSearchTab,
  SearchCount,
} from "./home.styled";

function SearchBox() {
  const tabs = ["All", "New", "Used"];
  const [activeTab, setActiveTab] = useState(0);
  const handleSelectTab = (index) => {
    setActiveTab(index);
  };
  return (
    <FlexContainer bgrColor={BG_COLOR} direction="column" radius>
      <ConditionTabs
        padding="1rem 2rem"
        size={0.1}
        color={SECONDARY_BLACK}
        activeBottom
        weight={WEIGHT_500}
      />
      {/* <HomeSearchHeader>
        {tabs?.map((tab, index) => (
          <HomeSearchTab
            active={activeTab === index}
            onClick={() => handleSelectTab(index)}
            key={index}
          >
            {tab}
          </HomeSearchTab>
        ))}
      </HomeSearchHeader> */}

      <HomeSearchBody>
        <SelectBox data={vehicleBrands} />
        <HomeSearchRow>
          <SelectBox data={vehicleBrands} />
          <SelectBox data={vehicleBrands} />
        </HomeSearchRow>
        <HomeSearchRow>
          <Button
            text="Advanced Search"
            bgrColor="transparent"
            color={PRIMARY_BLACK}
            hover
            hoverColor={PRIMARY_ORANGE}
            border={`2px solid transparent`}
            hoverBorder={`2px solid ${PRIMARY_ORANGE}`}
          />
          <Button text="Search" hover />
        </HomeSearchRow>
        <SearchCount>We found 71 listings for you.</SearchCount>
      </HomeSearchBody>
    </FlexContainer>
  );
}

export default SearchBox;
