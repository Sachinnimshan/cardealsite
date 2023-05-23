import styled from "@emotion/styled";
import { BG_COLOR, FONT_DARK, FONT_SECONDARY, PRIMARY_WHITE } from "../../themes/common";

export const InputContainer = styled("input")`
  background-color: ${PRIMARY_WHITE};
  border-radius: 5px;
  font-size: 15px;
  color: ${FONT_DARK};
  padding: 0.75rem;
  display: flex;
  flex: 1;
  cursor: pointer;
  border: 2px solid ${BG_COLOR};
  &:focus {
    outline: none;
  }
`;
