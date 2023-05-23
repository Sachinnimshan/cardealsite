import React from "react";
import { CommonLayout } from "../../common/Layouts.styled";
import { IconWrapper } from "../../icons";
import { SectionTitle } from "../../themes/typography";
import {
  ServiceColumn,
  ServiceColumnContainer,
  ServiceMessage,
  ServiceTitle,
} from "./sections.styled";

function Service(props) {
  return (
    <CommonLayout
      mobile={props.mobile}
      display="flex"
      direction="column"
      gap="2rem"
      alignVertical="center"
    >
        <SectionTitle>Why choose us ?</SectionTitle>
        <ServiceColumnContainer>
          {props.data?.map((item, index) => (
            <ServiceColumn key={index}>
              <IconWrapper
                size="2rem"
                color={item?.color}
                bgrColor={item?.bgrColor}
                padding="1rem"
                radius
              >
                {item?.icon}
              </IconWrapper>
              <ServiceTitle>{item?.title}</ServiceTitle>
              <ServiceMessage>{item?.description}</ServiceMessage>
            </ServiceColumn>
          ))}
        </ServiceColumnContainer>
    </CommonLayout>
  );
}

export default Service;
