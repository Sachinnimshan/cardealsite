import styled from "@emotion/styled";
import { PRIMARY_WHITE } from "./themes/common";

export const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY_WHITE};
`;

export const AppContent = styled("div")`
  margin-top: ${(props) => props.marginTop && "3rem"};
`;
