import React, { useState } from "react";
import { TextView } from "../../themes/typography";
import { FlexContainer } from "../../themes/Layouts.styled";
import { Tab } from "./section.styled";
import { FONT_SECONDARY } from "../../themes/common";

function ConditionTabs(props) {
  const tabs = ["All", "New", "Used"];
  const [activeTab, setActiveTab] = useState(0);
  const handleSelectTab = (index) => {
    setActiveTab(index);
  };
  return (
    <FlexContainer alignX="center">
      {tabs?.map((tab, index) => (
        <Tab
          size={props.size}
          color={props.color}
          padding={props.padding}
          activeTop={activeTab === index && props.activeTop}
          active={activeTab === index}
          activeBottom={activeTab === index && props.activeBottom}
          onClick={() => handleSelectTab(index)}
          key={index}
          weight={props.weight}
          hoverColor={props.hoverColor}
        >
          {tab}
          {props.showCount && <TextView size={0.1} color={FONT_SECONDARY}>(100)</TextView>}
        </Tab>
      ))}
    </FlexContainer>
  );
}

export default ConditionTabs;
