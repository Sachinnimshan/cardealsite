import styled from "@emotion/styled";
import { BG_COLOR, PRIMARY_BLACK } from "../../themes/common";

export const SocialContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SocialIcon = styled("div")`
  background-color: ${(props) => props.bgrColor || BG_COLOR};
  color: ${(props) => props.color || PRIMARY_BLACK};
  font-size: 1.25rem;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 50%;
`;