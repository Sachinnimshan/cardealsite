import React from "react";
import { SiteLogo, SiteLogoImg } from "../../images";
import { FooterColumn, FooterDescription } from "./footer.styled";
import {
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  SECONDARY_BLACK,
  WEIGHT_600,
} from "../../themes/common";
import SocialMediaIcons from "../../common/social";
import { FlexContainer } from "../../common/Layouts.styled";
import { TextView } from "../../themes/typography";

function Footer(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      bgrColor={SECONDARY_BLACK}
      direction="column"
      alignX="center"
      gap={2}
    >
      <FlexContainer flex flexwrap alignX="space-between" gap={3}>
        <FooterColumn>
          <SiteLogo src={SiteLogoImg} alt="Vehica Logo" />
          <FooterDescription color={FONT_SECONDARY}>
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </FooterDescription>
        </FooterColumn>

        <FooterColumn>
          <TextView size={1} weight={WEIGHT_600} color={PRIMARY_ORANGE}>
            (123) 456-78901
          </TextView>
          <TextView color={FONT_SECONDARY} size={0.01}>
            support@vehica.com <br /> West 12th Street <br /> New York, NY, USA
          </TextView>
        </FooterColumn>
      </FlexContainer>
      <FlexContainer gap={1} alignY="center" flexwrap>
        <TextView size={0.01} color={FONT_SECONDARY}>
          Copyright © 2023 | Design & Developed by Sachin Nimshan
        </TextView>
        <SocialMediaIcons color={SECONDARY_BLACK} bgrColor={FONT_SECONDARY} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Footer;
