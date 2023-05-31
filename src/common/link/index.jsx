import React from "react";
import { LinkContainer } from "./link.styled";

function ButtonLink({ children, ...props }) {
  return <LinkContainer to={props.to}>{children}</LinkContainer>;
}

export default ButtonLink;
