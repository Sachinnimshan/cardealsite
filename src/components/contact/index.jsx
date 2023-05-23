import React from "react";
import Button from "../../common/button";
import Input from "../../common/input";
import { CommonLayout, FlexContainer } from "../../common/Layouts.styled";
import {
  BG_COLOR_BLUE,
  SECONDARY_BLACK,
  WEIGHT_600,
} from "../../themes/common";
import { TextView } from "../../themes/typography";

function ContactForm(props) {
  return (
    <FlexContainer
      mobile={props.mobile}
      bgrColor={BG_COLOR_BLUE}
      direction="column"
      gap={1}
      padding="1.5rem"
      margin="1rem 0"
      radius
    >
      <TextView color={SECONDARY_BLACK} weight={WEIGHT_600} size={0.3}>
        Send Message
      </TextView>
      <FlexContainer alignX="space-between" flexwrap gap={1}>
        <Input placeholder="Name" />
        <Input placeholder="Email*" />
        <Input placeholder="Phone" />
      </FlexContainer>
      <Input placeholder="Message*" />
      <Button text="Send" />
    </FlexContainer>
  );
}

export default ContactForm;
