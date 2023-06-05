import React from "react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Button from "../../common/button";
import Input from "../../common/input";
import { FlexContainer } from "../../themes/Layouts.styled";
import Tabs from "../../common/tab";
import { GoogleIcon, IconWrapper } from "../../icons";
import {
  BG_COLOR_BLUE,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_500,
  WEIGHT_600,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";

function Login(props) {
  return (
    <FlexContainer
      bgrColor={props.bgrColor}
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      flex
      direction="column"
      gap={2}
    >
      {props.mobile && (
        <FlexContainer gap={1} flex alignX="center" alignY="center">
          <FlexContainer
            padding="1rem"
            onClick={props.handleChange}
            bgrColor={props.login && PRIMARY_WHITE}
            radius
            flex
            alignX="center"
            cursor
          >
            <TextView weight={WEIGHT_500}>Login</TextView>
          </FlexContainer>
          <FlexContainer
            padding="1rem"
            onClick={props.handleChange}
            bgrColor={!props.login && PRIMARY_WHITE}
            radius
            flex
            alignX="center"
            cursor
          >
            <TextView weight={WEIGHT_500}>Register</TextView>
          </FlexContainer>
        </FlexContainer>
      )}
      <FlexContainer direction="column" flex gap={2}>
        <FlexContainer
          direction="column"
          gap={0.5}
          alignY={props.mobile && "center"}
        >
          <TextView size={1} weight={WEIGHT_700}>
            {props.title}
          </TextView>
          <TextView size={0.001} weight={WEIGHT_400}>
            {props.subTitle}
          </TextView>
        </FlexContainer>
        <FlexContainer
          alignY={!props.mobile && "center"}
          gap={1}
          flexwrap
          direction={props.mobile && "column"}
        >
          <TextView
            size={0.05}
            weight={WEIGHT_500}
            align={props.mobile && "center"}
          >
            Continue with:
          </TextView>
          <FlexContainer
            radius
            bgrColor={PRIMARY_WHITE}
            padding="1rem"
            gap={1}
            border={BG_COLOR_BLUE}
            alignX={props.mobile && "center"}
          >
            <IconWrapper size="1.5rem">
              <GoogleIcon />
            </IconWrapper>
            <TextView size={0.1}>Google</TextView>
          </FlexContainer>
          <FlexContainer
            radius
            bgrColor={PRIMARY_WHITE}
            padding="1rem"
            gap={1}
            border={BG_COLOR_BLUE}
            alignX={props.mobile && "center"}
          >
            <IconWrapper size="1.5rem">
              <FaFacebook />
            </IconWrapper>
            <TextView size={0.1}>Facebook</TextView>
          </FlexContainer>
        </FlexContainer>
        <TextView transform="lowercase">or</TextView>
        <FlexContainer direction="column" gap={0.75}>
          <Input placeholder="Email or Username" />
          {props.login && (
            <>
              <Input placeholder="Email*" />
              <Input placeholder="Phone" />
            </>
          )}
          <Input placeholder="Password*" />
          <Button text={props.buttonTitle} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Login;
