import React from "react";
import { service } from "../../common/data";
import { IconWrapper } from "../../icons";
import { SectionTitle } from "../../themes/typography";
import {
  ServiceColumn,
  ServiceColumnContainer,
  ServiceContainer,
  ServiceMessage,
  ServiceTitle,
} from "./sections.styled";

function Service(props) {
  return (
    <ServiceContainer mobile={props.mobile}>
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
    </ServiceContainer>
  );
}

export default Service;
