import styled from "@emotion/styled";
import { BORDER_RADIUS, FONT_DARK } from "../../themes/common";

export const InputContainer = styled("input")`
  font-size: 14px;
  color: ${FONT_DARK};
  padding: 0.75rem 0;
  display: flex;
  width: 100%;
  cursor: pointer;
  border-radius: ${BORDER_RADIUS};
  border: none;
  &:focus {
    outline: none;
  }
`;
