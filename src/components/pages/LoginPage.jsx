import React from "react";
import { useState } from "react";
import { FlexContainer } from "../../themes/Layouts.styled";
import { BG_COLOR_BLUE, PRIMARY_WHITE } from "../../themes/common";
import Login from "../sections/Login";

function LoginPage(props) {
  const [login, setLogin] = useState(true);
  const handleChangeView = () => setLogin(!login);
  return (
    <FlexContainer aligX="space-between">
      <Login
        mobile={props.mobile}
        title="Log in to your account"
        subTitle="Welcome back! Sign in to your account"
        bgrColor={BG_COLOR_BLUE}
        buttonTitle="Login"
      />
      {!props.mobile && (
        <Login
          mobile={props.mobile}
          title="Register"
          subTitle="Create new account today."
          bgrColor={PRIMARY_WHITE}
          buttonTitle="Register"
        />
      )}
    </FlexContainer>
  );
}

export default LoginPage;
