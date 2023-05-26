import styled from "@emotion/styled";
import {
  BG_COLOR,
  BG_COLOR_BLUE,
  BORDER_RADIUS,
  FONT_DARK,
  FONT_LIGHT,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
} from "../../themes/common";

export const SelectBoxContainer = styled("select")`
  border-radius: ${BORDER_RADIUS};
  padding: 1rem;
  cursor: pointer;
  flex: 1;
  border: 1px solid ${BG_COLOR};
  font-size: 14px;
  color: ${FONT_DARK};
  padding-right: 1rem;
  background-color: ${PRIMARY_WHITE};
  appearance: none;
  display: flex;
  background-image: url("/images/downdown.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  background-size: 2rem;
  &:focus {
    outline: none;
    border: 1px solid ${PRIMARY_ORANGE};
  }
  &::after {
    font-size: 1rem;
  }
`;


