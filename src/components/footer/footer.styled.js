import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_LIGHT,
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_400,
} from "../../themes/common";

export const FooterContainer = styled("div")`
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  background-color: ${SECONDARY_BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterTop = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  gap: 2rem;
`;

export const FooterColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterDescription = styled("p")`
  display: flex;
  color: ${BG_COLOR};
  text-align: justify;
  font-size: 14px;
  max-width: 500px;
  line-height: 1.75rem;
`;

export const FooterText = styled("span")`
  color: ${(props) => props.color || BG_COLOR};
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  line-height: 2rem;
  display: flex;
  align-items: center;
`;

export const CopyRights = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
