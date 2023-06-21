import React from "react";
import { SiteLogo, SiteLogoImg } from "../../images";
import {
  BG_COLOR,
  BORDER_COLOR,
  FONT_DARK,
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_600,
  WEIGHT_700,
} from "../../themes/common";
import SocialMediaIcons from "../../common/social";
import { FlexContainer } from "../../themes/Layouts.styled";
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
            color={BG_COLOR}
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
            weight={WEIGHT_700}
            color={PRIMARY_ORANGE}
            align={props.mobile && "center"}
          >
            <TextView color={PRIMARY_WHITE} size={1} weight={WEIGHT_700}>
              (123)
            </TextView>
            456-78901
          </TextView>
          <TextView
            color={BG_COLOR}
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
        borderTop={FONT_DARK}
        padding="2rem 0 0 0"
      >
        <TextView
          size={0.01}
          color={BG_COLOR}
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
