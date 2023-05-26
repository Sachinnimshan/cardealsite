import React from "react";
import Button from "../../common/button";
import CheckBox from "../../common/checkbox";
import Input from "../../common/input";
import { FlexContainer } from "../../common/Layouts.styled";
import { EmailIcon, IconWrapper, LocationIcon, PhoneIcon } from "../../icons";
import { ContactImage, EmilyImg } from "../../images";
import {
  BG_COLOR_BLUE,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  SECONDARY_ORANGE,
  WEIGHT_600,
} from "../../themes/common";
import { TextView } from "../../themes/typography";

function ContactForm(props) {
  return (
    <FlexContainer
      mobile={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      bgrColor={BG_COLOR_BLUE}
      gap={2}
      padding="2rem 1.5rem"
      margin="1rem 0"
      radius
      flexwrap
      alignY="center"
      position="relative"
    >
      <FlexContainer direction="column" gap={1.5}>
        <TextView color={SECONDARY_BLACK} weight={WEIGHT_600} size={1}>
          Send Message
        </TextView>
        <FlexContainer  gap={1} flexwrap>
          <Input placeholder="Name" />
          <Input placeholder="Email*" />
          <Input placeholder="Phone" />
        </FlexContainer>
        <Input placeholder="Message*" />
        <FlexContainer
          alignX="space-between"
          alignY="center"
          gap={2}
          flexwrap
          flex
        >
          <CheckBox />
          <TextView size={0.01} color={SECONDARY_BLACK}>
            I accept the privacy policy
          </TextView>
          <Button text="Send" />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        bgrColor={PRIMARY_WHITE}
        radius
        padding="1.5rem"
        flex
        direction="column"
        gap={1}
      >
        <FlexContainer alignX="space-between" radius>
          <FlexContainer direction="column" gap={0.1}>
            <TextView color={SECONDARY_BLACK} weight={WEIGHT_600} size={0.5}>
              Emily Rees
            </TextView>
            <TextView color={PRIMARY_ORANGE} size={0.1}>
              Customer Advisor
            </TextView>

            <FlexContainer gap={1}>
              <IconWrapper color={PRIMARY_ORANGE}>
                <LocationIcon />
              </IconWrapper>
              <TextView color={SECONDARY_BLACK} size={0.005}>
                70 Washington Street
              </TextView>
            </FlexContainer>
          </FlexContainer>
          <ContactImage src={EmilyImg} />
        </FlexContainer>
        <FlexContainer gap={1}>
          <IconWrapper color={PRIMARY_ORANGE}>
            <EmailIcon />
          </IconWrapper>
          <TextView color={SECONDARY_BLACK} size={0.05}>
            emily@vehica.com
          </TextView>
        </FlexContainer>
        <Button
          text={
            <FlexContainer gap={1} alignY="center" alignX="center">
              <PhoneIcon color={PRIMARY_ORANGE} size="1.25rem" />
              <TextView color={SECONDARY_BLACK} size={0.25}>
                123 *** *** - reveal
              </TextView>
            </FlexContainer>
          }
          border
          bgrColor="transparent"
          hoverBgColor={SECONDARY_ORANGE}
        />
      </FlexContainer>
    </FlexContainer>
  );
}

export default ContactForm;
