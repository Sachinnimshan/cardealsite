import React from "react";
import { EmailIcon, IconWrapper, PhoneIcon } from "../../icons";
import {
  BORDER_COLOR,
  FONT_SECONDARY,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_600,
} from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";
import { TextView } from "../../themes/typography";
import {
  CardContainer,
  TeamCardContainer,
  TeamCardImage,
  TeamMemberIconContainer,
} from "./cards.styled";

function TeamCard({ data, ...props }) {
  return (
    <TeamCardContainer shrink={props.shrink} id="teamMemberCard" margin={props.margin}>
      <FlexContainer position="relative">
        <TeamCardImage src={data?.image} />
        <TeamMemberIconContainer>
          <IconWrapper
            bgrColor={PRIMARY_ORANGE}
            size="1.75rem"
            color={PRIMARY_WHITE}
            padding
            radius
          >
            <PhoneIcon />
          </IconWrapper>
          <IconWrapper
            bgrColor={PRIMARY_ORANGE}
            size="1.75rem"
            color={PRIMARY_WHITE}
            padding
            radius
          >
            <EmailIcon />
          </IconWrapper>
        </TeamMemberIconContainer>
      </FlexContainer>
      <FlexContainer
        bgrColor={PRIMARY_WHITE}
        padding="2rem"
        direction="column"
        gap={1}
      >
        <FlexContainer direction="column" gap={0.25}>
          <TextView size={0.5} weight={WEIGHT_600}>
            {data.name}
          </TextView>
          <TextView size={0.05} color={FONT_SECONDARY}>
            {data.title}
          </TextView>
        </FlexContainer>
        <FlexContainer
          direction="column"
          gap={0.25}
          borderTop={BORDER_COLOR}
          padding="1rem 0 0 0"
        >
          <TextView size={0.05} color={PRIMARY_ORANGE}>
            {data.email}
          </TextView>
          <TextView size={0.05} color={FONT_SECONDARY}>
            {data.mobile}
          </TextView>
        </FlexContainer>
      </FlexContainer>
    </TeamCardContainer>
  );
}

export default TeamCard;
