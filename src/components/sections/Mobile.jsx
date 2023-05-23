import React from "react";
import Button from "../../common/button";
import { CommonLayout } from "../../common/Layouts.styled";
import { AppleIcon, CheckIcon, IconWrapper, PlaystoreIcon } from "../../icons";
import { MobileAppImg } from "../../images";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../themes/common";
import { SectionTitle } from "../../themes/typography";
import {
  MobileApp,
  MobileAppItem,
  MobileAppProsItem,
  MobileBanner,
  MobileBannerColumn,
} from "./sections.styled";

function Mobile(props) {
  return (
    <CommonLayout
      mobile={props.mobile}
      display="flex"
      gap="1rem"
      flexwrap
      alignHorizontal="space-between"
    >
        <MobileBanner bgrColor={PRIMARY_ORANGE} mobile={props.mobile}>
          <MobileBannerColumn>
            <SectionTitle color={PRIMARY_WHITE}>
              Download <br />
              our app
            </SectionTitle>
            <MobileAppItem>
              <IconWrapper size="1.5rem" color={PRIMARY_ORANGE}>
                <AppleIcon />
              </IconWrapper>
              <span>For iOS</span>
            </MobileAppItem>
            <MobileAppItem>
              <IconWrapper size="1.5em" color={PRIMARY_ORANGE}>
                <PlaystoreIcon />
              </IconWrapper>
              <span>For Android</span>
            </MobileAppItem>
          </MobileBannerColumn>
          <MobileApp src={MobileAppImg} />
        </MobileBanner>
        <MobileBanner mobile={props.mobile}>
          <MobileBannerColumn>
            <SectionTitle color={PRIMARY_WHITE}>
              How to buy <br />a car?
            </SectionTitle>
            <Button
              text="Read more"
              bgrColor="transparent"
              hoverBgColor={PRIMARY_ORANGE}
              border={`2px solid ${PRIMARY_ORANGE}`}
              maxWidth
            />
          </MobileBannerColumn>
          <MobileBannerColumn>
            {props.data?.map((item, index) => (
              <MobileAppProsItem key={index}>
                <IconWrapper color={PRIMARY_ORANGE}>
                  <CheckIcon />
                </IconWrapper>
                {item}
              </MobileAppProsItem>
            ))}
          </MobileBannerColumn>
        </MobileBanner>
    </CommonLayout>
  );
}

export default Mobile;
