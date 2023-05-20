import React from "react";
import { SiteLogo, SiteLogoImg } from "../../images";
import {
  CopyRights,
  FooterColumn,
  FooterContainer,
  FooterDescription,
  FooterText,
  FooterTop,
} from "./footer.styled";
import { FONT_SECONDARY, PRIMARY_ORANGE, SECONDARY_BLACK, WEIGHT_600 } from "../../themes/common";
import SocialMediaIcons from "../../common/social";

function Footer(props) {
  return (
    <FooterContainer mobile={props.mobile}>
      <FooterTop>
        <FooterColumn>
          <SiteLogo src={SiteLogoImg} />
          <FooterDescription color={FONT_SECONDARY}>
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </FooterDescription>
        </FooterColumn>

        <FooterColumn>
          <FooterText size="22px" weight={WEIGHT_600} color={PRIMARY_ORANGE}>
            (123) 456-78901
          </FooterText>
          <FooterText size="16px">
            support@vehica.com <br /> West 12th Street <br /> New York, NY, USA
          </FooterText>
        </FooterColumn>
      </FooterTop>
      <CopyRights>
        <FooterText>
          Copyright © 2023 | Design & Developed by Sachin Nimshan
        </FooterText>
        <SocialMediaIcons color={SECONDARY_BLACK} bgrColor={FONT_SECONDARY}/>
      </CopyRights>
    </FooterContainer>
  );
}

export default Footer;
