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
