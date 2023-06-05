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
        title={login ? "Log in to your account" : "Register"}
        subTitle={
          login
            ? "Welcome back! Sign in to your account"
            : "Create new account today."
        }
        bgrColor={BG_COLOR_BLUE}
        buttonTitle={login ? "Login" : "Register"}
        login={!login && props.mobile}
        handleChange={handleChangeView}
      />
      {!props.mobile && (
        <Login
          mobile={props.mobile}
          title="Register"
          subTitle="Create new account today."
          bgrColor={PRIMARY_WHITE}
          buttonTitle="Register"
          login={login || !props.mobile}
        />
      )}
    </FlexContainer>
  );
}

export default LoginPage;
