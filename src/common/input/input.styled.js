import styled from "@emotion/styled";
import { BG_COLOR, PRIMARY_WHITE } from "../../themes/common";

export const InputContainer = styled("input")`
  background-color: ${PRIMARY_WHITE};
  border-radius: 5px;
  font-size: 15px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  flex: 1;
  border: 2px solid ${BG_COLOR};
  &:focus {
    outline: none;
  }
`;
