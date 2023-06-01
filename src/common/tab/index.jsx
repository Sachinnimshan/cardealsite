import React, { useState } from "react";
import { FONT_DARK, FONT_LIGHT } from "../../themes/common";
import { Tab, TabContainer, TabText } from "./tab.styled";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (index) => setActiveTab(index);

  return (
    <TabContainer>
      {props.data?.map((item, index) => (
        <Tab
          key={index}
          onClick={() => handleChangeTab(index)}
          active={activeTab === index}
          bgrColor={props.bgrColor}
        >
          <TabText
            active={activeTab === index}
            color={FONT_DARK}
            fontSize="14px"
          >
            {item}
          </TabText>
          {props.count && (
            <TabText
              fontSize="12px"
              active={activeTab === index}
              color={FONT_LIGHT}
            >
              12 Listings
            </TabText>
          )}
        </Tab>
      ))}
    </TabContainer>
  );
}

export default Tabs;
