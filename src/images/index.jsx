import styled from "@emotion/styled";
import { BORDER_RADIUS } from "../themes/common";

export const SiteLogoImg = "/images/site-logo.png";
export const HomeImg = "/images/car-silver.png";
export const SiteLogoDark = "/images/site-logo-dark.png";
export const MobileAppImg = "/images/phone.png";
export const HistoryImg = "/images/history.png";
export const EmilyImg = "/images/emily.jpg";

export const SiteLogo = styled("img")`
  max-width: 175px;
  height: fit-content;
`;

export const VehicleHistoryImage = styled("img")`
  max-width: 150px;
`;

export const ContactImage = styled("img")`
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
`;

export const MobileApp = styled("img")`
  max-height: ${(props) => (props.mobile ? "200px" : "300px")};
`;

export const CarDetailsImage = styled("img")`
  max-width: 800px;
  border-radius: ${BORDER_RADIUS};
  width: 100%;
`;