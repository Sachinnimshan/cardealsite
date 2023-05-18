import React from "react";
import Featured from "../featured";
import Home from "../home";
import { ScreenContainer } from "./screens.styled";

function HomePage(props) {
  return (
    <ScreenContainer>
      <Home mobile={props.mobile} />
      <Featured mobile={props.mobile} />
    </ScreenContainer>
  );
}

export default HomePage;
