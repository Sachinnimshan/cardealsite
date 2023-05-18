import React, { useState } from "react";
import { FONT_DARK, FONT_LIGHT } from "../../themes/common";
import { Tab, TabContainer, TabText } from "./tab.styled";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(false);

  const handleChangeTab = (index) => setActiveTab(index);

  return (
    <TabContainer>
      {props.data?.map((item, index) => (
        <Tab
          key={index}
          onClick={() => handleChangeTab(index)}
          active={activeTab === index}
        >
          <TabText active={activeTab === index} color={FONT_DARK}>{item}</TabText>
          <TabText fontSize="12px" active={activeTab === index} color={FONT_LIGHT}>
            12 Listings
          </TabText>
        </Tab>
      ))}
    </TabContainer>
  );
}

export default Tabs;
