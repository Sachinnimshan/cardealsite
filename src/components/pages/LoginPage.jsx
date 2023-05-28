import React from "react";
import { useState } from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import { BG_COLOR_BLUE, PRIMARY_WHITE } from "../../themes/common";
import Login from "../sections/Login";

function LoginPage(props) {
  const [login, setLogin] = useState(true);
  const handleChange = () => setLogin(!login);
  return (
    <FlexContainer aligX="space-between">
      <Login
        mobile={props.mobile}
        title={props.mobile && login ? "Log in to your account" : "Register"}
        subTitle={
          props.mobile && login
            ? "Welcome back! Sign in to your account"
            : "Create new account today"
        }
        bgrColor={BG_COLOR_BLUE}
        buttonTitle={props.mobile && login ? "Login" : "Register"}
        login={login}
        handleChange={handleChange}
      />
      {!props.mobile && (
        <Login
          mobile={props.mobile}
          title="Register"
          subTitle="Create new account today."
          bgrColor={PRIMARY_WHITE}
          buttonTitle="Register"
          login={login}
          handleChange={handleChange}
        />
      )}
    </FlexContainer>
  );
}

export default LoginPage;
