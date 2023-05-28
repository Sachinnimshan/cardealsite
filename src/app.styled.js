import styled from "@emotion/styled";

export const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const AppContent = styled("div")`
  margin-top: ${(props) => props.marginTop && "3rem"};
`;
