import styled from "@emotion/styled";
import {
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_WHITE,
} from "../themes/common";

export const CommonLayout = styled("div")`
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  background-color: ${(props) => props.bgrColor || PRIMARY_WHITE};
  display: ${(props) => props.display };
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => `${props.gap}rem`};
  align-items: ${(props) => props.alignVertical};
  justify-content: ${(props) => props.alignHorizontal};
  flex-wrap: ${(props) => props.flexwrap && "wrap"};
  flex: ${(props) => props.flex && "1"};
`;

export const PageContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled("div")`
  display: flex;
  gap: ${(props) => `${props.gap}rem`};
  align-items: ${(props) => props.alignY};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.alignX};
  border-radius: ${(props) => props.radius && "10px"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexwrap && "wrap" };
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex && "1"};
`;
