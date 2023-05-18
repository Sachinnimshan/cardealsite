import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_LIGHT,
  PRIMARY_BLACK,
} from "../../themes/common";

export const SelectBoxContainer = styled("select")`
  border-radius: 5px;
  padding: 0.75rem;
  cursor: pointer;
  flex: 1;
  border: 2px solid ${BG_COLOR};
  font-size: 15px;
  color: ${FONT_DARK};
  padding-right: 1rem;
  appearance: none;
  display: flex;
  background-image: url("/images/downdown.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  background-size: 2rem;
  &:focus {
    outline: none;
    border: 2px solid ${FONT_LIGHT};
  }
  &::after {
    font-size: 1rem;
  }
`;
