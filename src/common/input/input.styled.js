import styled from "@emotion/styled";
import { BG_COLOR, BORDER_RADIUS, FONT_DARK, FONT_SECONDARY, PRIMARY_WHITE } from "../../themes/common";

export const InputContainer = styled("input")`
  background-color: ${PRIMARY_WHITE};
  border-radius: ${BORDER_RADIUS};
  font-size: 15px;
  color: ${FONT_DARK};
  padding: 1rem 1.5rem;
  display: flex;
  flex: 1;
  cursor: pointer;
  border: 2px solid ${BG_COLOR};
  &:focus {
    outline: none;
  }
`;
