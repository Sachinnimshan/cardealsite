import React from "react";
import { SiteLogo, SiteLogoImg } from "../../images";
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
      <FlexContainer
        flex
        flexwrap
        alignX={props.mobile ? "center" : "space-between"}
        gap={3}
      >
        <FlexContainer
          direction="column"
          gap={1}
          alignY={props.mobile && "center"}
        >
          <SiteLogo src={SiteLogoImg} alt="Vehica Logo" />
          <TextView
            color={FONT_SECONDARY}
            maxWidth="300px"
            size={0.01}
            lineHeight={0.25}
            align={props.mobile && "center"}
          >
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </TextView>
        </FlexContainer>

        <FlexContainer direction="column">
          <TextView
            size={1}
            weight={WEIGHT_600}
            color={PRIMARY_ORANGE}
            align={props.mobile && "center"}
          >
            (123) 456-78901
          </TextView>
          <TextView
            color={FONT_SECONDARY}
            size={0.01}
            lineHeight={0.25}
            align={props.mobile && "center"}
          >
            support@vehica.com <br /> West 12th Street <br /> New York, NY, USA
          </TextView>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        gap={1}
        alignY="center"
        flexwrap
        alignX={props.mobile && "center"}
      >
        <TextView
          size={0.01}
          color={FONT_SECONDARY}
          lineHeight={0.5}
          align={props.mobile && "center"}
        >
          Copyright © 2023 | Design & Developed by Sachin Nimshan
        </TextView>
        <SocialMediaIcons color={SECONDARY_BLACK} bgrColor={FONT_SECONDARY} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Footer;
