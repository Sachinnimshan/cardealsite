import styled from "@emotion/styled";
import {
  BG_COLOR,
  BG_COLOR_BLUE,
  FONT_DARK,
  FONT_LIGHT,
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_500,
} from "../../themes/common";

export const FeaturedContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
`;

export const FeatureCardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

/////////////////////////////////////////////////Popular/////////////////////////////////////////////////////

export const PopularContainer = styled("div")`
  background-color: ${BG_COLOR_BLUE};
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
`;

/////////////////////////////////////////////////Service/////////////////////////////////////////////////////

export const ServiceContainer = styled("div")`
  background-color: ${PRIMARY_WHITE};
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceColumnContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: calc(2rem + 1vw);
  margin: calc(2rem + 5vw) 0;
`;

export const ServiceColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ServiceTitle = styled("span")`
  font-size: calc(1rem + 0.5vw);
  font-weight: ${WEIGHT_500};
  color: ${PRIMARY_BLACK};
`;

export const ServiceMessage = styled("p")`
  font-size: 15px;
  font-weight: ${WEIGHT_400};
  color: ${FONT_DARK};
  text-align: center;
  max-width: 400px;
  line-height: 1.75rem;
`;

/////////////////////////////////////////////////Mobile/////////////////////////////////////////////////////

export const MobileContainer = styled("div")`
  display: flex;
  background-color: ${PRIMARY_WHITE};
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
`;

export const MobileBanner = styled("div")`
  display: flex;
  justify-content: ${(props) => props.mobile ? "center" : "space-between"};
  background-color: ${(props) => props.bgrColor || SECONDARY_BLACK};
  border-radius: 1rem;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 1;
  align-items: center;
  max-height: fit-content;
  padding: 2rem 3rem;
`;

export const MobileBannerColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileApp = styled("img")`
  max-height: 300px;
`;

export const MobileAppItem = styled("div")`
  border-radius: 2rem;
  background-color: ${PRIMARY_WHITE};
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 150px;
  padding: 0.75rem 1rem;
`;

export const MobileAppProsItem = styled("div")`
  display: flex;
  align-items: center;
  color: ${FONT_SECONDARY};
  gap: 1rem;
`;

/////////////////////////////////////////////////Newsletter/////////////////////////////////////////////////////

export const NewsLetterContainer = styled("div")`
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${PRIMARY_WHITE};
  border-top: 1px solid ${BG_COLOR};
  flex: 1;
`;

export const NewsLetterRow = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
