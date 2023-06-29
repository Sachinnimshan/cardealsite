import React from "react";
import Button from "../../common/button";
import { FlexContainer } from "../../themes/Layouts.styled";
import { AppleIcon, CheckIcon, IconWrapper, PlaystoreIcon } from "../../icons";
import { MobileApp, MobileAppImg } from "../../images";
import {
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";

function Mobile(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      alignX="center"
      direction={props.mobile && "column"}
      flexwrap
      gap={2}
    >
      <FlexContainer
        bgrColor={PRIMARY_ORANGE}
        padding="2rem"
        radius
        flex
        alignX={props.mobile ? "center" : "space-between"}
        gap={1}
        flexwrap
        position="relative"
      >
        <FlexContainer direction="column" gap={1} >
          <TextView color={PRIMARY_WHITE} weight={WEIGHT_700} size={2}>
            Download {!props.mobile && <br />}
            our app
          </TextView>
          <FlexContainer
            padding="0.75rem"
            alignY="center"
            gap={0.5}
            bgrColor={PRIMARY_WHITE}
            radius
          >
            <IconWrapper color={PRIMARY_ORANGE} size="1.5rem">
              <AppleIcon />
            </IconWrapper>
            <TextView color={SECONDARY_BLACK} size={0.1} nowrap>
              For iOS
            </TextView>
          </FlexContainer>
          <FlexContainer
            padding="0.75rem"
            alignY="center"
            gap={0.5}
            bgrColor={PRIMARY_WHITE}
            radius
          >
            <IconWrapper color={PRIMARY_ORANGE} size="1.5rem">
              <PlaystoreIcon />
            </IconWrapper>
            <TextView color={SECONDARY_BLACK} size={0.1} nowrap>
              For Android
            </TextView>
          </FlexContainer>
        </FlexContainer>
        <MobileApp src={MobileAppImg} mobile={props.mobile} />
      </FlexContainer>

      <FlexContainer
        bgrColor={SECONDARY_BLACK}
        padding="2rem"
        radius
        flex
        flexwrap
        alignX={props.mobile && "center"}
        gap={2}
      >
        <FlexContainer direction="column" gap={1}>
          <TextView color={PRIMARY_WHITE} weight={WEIGHT_700} size={2}>
            How to buy {!props.mobile && <br />}a car?
          </TextView>
          <Button
            text="Read more"
            bgrColor="transparent"
            border
            hoverBgColor={PRIMARY_ORANGE}
            flex="0"
          />
        </FlexContainer>
        <FlexContainer direction="column" gap={0.5} alignX="center">
          {props.data?.map((item, index) => (
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
      </FlexContainer>
    </FlexContainer>
  );
}

export default Mobile;
