import styled from "@emotion/styled";
import { BORDER_RADIUS } from "../themes/common";

export const FlexContainer = styled("div")`
  display: flex;
  gap: ${(props) => `${props.gap}vw`};
  align-items: ${(props) => props.alignY};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.alignX};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexwrap && "wrap"};
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex && "1"};
  overflow: ${(props) => props.overflow && "hidden"};
  max-width: ${(props) => props.maxWidth};
  position: ${(props) => props.position};
  border-top: ${(props) => `1px solid ${props.border}`};
`;
