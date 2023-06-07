import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { BORDER_RADIUS, PRIMARY_ORANGE, TRANSITION } from "../themes/common";

export const SiteLogoImg = "/images/site-logo.png";
export const HomeImg = "/images/car-silver.png";
export const SiteLogoDark = "/images/site-logo-dark.png";
export const MobileAppImg = "/images/phone.png";
export const HistoryImg = "/images/history.png";
export const EmilyImg = "/images/emily.jpg";
export const AppBannerImg = "/images/mycar_sidebar.png";

export const SiteLogo = styled("img")`
  max-width: ${(props) => (props.mobile ? "150px" : "180px")};
  height: fit-content;
`;

export const CarType = styled("img")`
  max-width: ${(props) => (props.mobile ? "2rem" : "3rem")};
`;

export const CarLogo = styled("img")`
  max-width: calc(100px + 2vw);
  /* filter: grayscale(100%);
  cursor: pointer;
  opacity: 0.75;
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  } */
`;

export const VehicleHistoryImage = styled("img")`
  max-height: 200px;
`;

export const ContactImage = styled("img")`
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
`;

export const MobileApp = styled("img")`
  max-height: ${(props) => (props.mobile ? "200px" : "300px")};
`;

export const SlideAnimation = keyframes`
 from {
    top: -100%;
  }
  to {
    top: 0%;
  }
  `;

export const CarDetailsImage = styled("img")`
  max-width: ${(props) => props.maxWidth };
  border-radius: ${(props) =>
    (props.topRadius && "0.5rem 0.5rem 0 0") || BORDER_RADIUS};
  width: ${(props) => props.imageWidth || "100%"};
  max-height: ${(props) => props.small && "200px"};
  height: ${(props) => props.height};
  cursor: pointer;
  object-fit: cover;
  opacity: ${(props) => (props.fade ? 0.25 : 1)};
  border: ${(props) => props.border && "2px solid transparent"};
  border: ${(props) => props.active && `2px solid ${PRIMARY_ORANGE}`};
  transition: ${TRANSITION};
  animation-name: ${SlideAnimation};
  animation-duration: 4s;
  transform: ${(props) => props.scaleUp && `scale(1.25)`};
  &:hover {
    opacity: ${(props) => props.hover && 1};
    transition: all ease-in-out 0.3s;
    transform: ${(props) => props.zoom && `scale(1.05)`};
    overflow: ${(props) => props.overflowHide && "hidden"};
  }
`;

export const HomeBanner = styled("img")`
  max-width: calc(150px + 23vw);
  width: 100%;
  display: flex;
  position: absolute;
  bottom: -17%;
`;

export const AppBanner = styled("img")`
  display: flex;
  height: fit-content;
  max-width: 225px;
`;
