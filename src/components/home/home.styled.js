import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_500,
} from "../../themes/common";

export const HomeContainer = styled("div")`
  background-color: ${PRIMARY_BLACK};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 90vh;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
`;

export const HomeBanner = styled("img")`
  max-width: calc(150px + 23vw);
  width: 100%;
  display: flex;
  position: absolute;
  bottom: -17%;
`;

export const HomeTop = styled("div")`
  display: flex;
  justify-content: ${(props) => (props.mobile ? "center" : "space-between")};
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: calc(1rem + 2.5vw);
`;

export const HomeTopLeft = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: ${(props) => props.mobile && "center"};
`;

export const HomeBannerText = styled("span")`
  font-size: calc(1rem + 3.5vw);
  color: ${PRIMARY_WHITE};
  font-weight: 700;
  line-height: calc(1rem + 6vw);
  text-align: ${(props) => props.mobile && "center"};
`;

export const AboutUsButton = styled("span")`
  border: 2px solid ${PRIMARY_ORANGE};
  padding: 1rem;
  border-radius: 1rem;
  color: ${PRIMARY_WHITE};
  text-align: center;
  cursor: pointer;
  max-width: 120px;
  &:hover {
    background-color: ${PRIMARY_ORANGE};
  }
`;

export const HomeSearchContainer = styled("div")`
  border-radius: 1rem;
  background-color: ${BG_COLOR};
  max-width: 420px;
  display: flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const HomeSearchBody = styled("div")`
  background-color: ${PRIMARY_WHITE};
  padding: 2rem;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export const HomeSearchHeader = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
`;

export const HomeSearchRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const HomeSearchTab = styled("span")`
  font-size: 16px;
  font-weight: ${WEIGHT_500};
  padding: 1rem 1.5rem;
  color: ${FONT_DARK};
  flex: 1;
  border-bottom: ${(props) =>
    props.active ? `2px solid ${PRIMARY_ORANGE}` : `2px solid ${BG_COLOR}`};
  transition: all ease-in-out 0.3s;
`;

export const SearchCount = styled("span")`
  font-size: 12px;
  font-weight: ${WEIGHT_400};
  color: ${FONT_DARK};
  display: flex;
  align-self: center;
`;

export const CircleShape = styled("div")`
  background-color: ${SECONDARY_BLACK};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  position: absolute;
  top: 5%;
  right: -5%;
  overflow: hidden;
  z-index: 1;
  border-radius: 50%;
`;
