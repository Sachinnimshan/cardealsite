import React from "react";
import { useState } from "react";
import SlideShow from ".";
import Button from "../../common/button";
import SlideButtons from "../../common/slidebtn";
import { CheckIcon, IconWrapper } from "../../icons";
import {
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_700,
} from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";
import { TextView } from "../../themes/typography";
import TeamCard from "../cards/TeamCard";

function Team(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === props.data?.teamMembers?.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex === 0
        ? props.data?.teamMembers?.length - 1
        : currentIndex - 1
    );
  };

  return (
    <FlexContainer
      bgrColor={PRIMARY_WHITE}
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      flex
    >
      <FlexContainer
        padding={props.mobile ? "1.5rem" : "3rem"}
        bgrColor={PRIMARY_BLACK}
        flex
        radius
        alignX="space-between"
        direction={props.mobile && "column"}
        gap={2}
        overflowX
      >
        {" "}
        <FlexContainer direction="column" gap={2} flex>
          <TextView size={2} weight={WEIGHT_700} color={PRIMARY_WHITE}>
            Our team
          </TextView>
          <FlexContainer direction="column" gap={1}>
            {props.data?.teamInfo?.map((item, index) => (
              <FlexContainer key={index} gap={1} alignY="center">
                <IconWrapper color={PRIMARY_ORANGE}>
                  <CheckIcon />
                </IconWrapper>
                <TextView color={FONT_SECONDARY} size={0.25} nowrap>
                  {item}
                </TextView>
              </FlexContainer>
            ))}
          </FlexContainer>
          <Button text="Learn more" flex="0" />
        </FlexContainer>
        <SlideShow
          currentIndex={currentIndex}
          showCount={props.mobile ? 1 : 3}
          grid="grid"
          slideWrapperName="team-slide-show"
          showControlls
        >
          {props.data?.teamMembers?.map((item, index) => (
            <TeamCard data={item} key={index} shrink="0" />
          ))}
        </SlideShow>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Team;
