import React from "react";
import { socialIcons } from "../data";
import { SocialContainer, SocialIcon } from "./social.styled";

function SocialMediaIcons(props) {
  return (
    <SocialContainer>
      {socialIcons?.map((icon, index) => (
        <SocialIcon color={props.color} bgrColor={props.bgrColor} key={index}>
          {icon.icon}
        </SocialIcon>
      ))}
    </SocialContainer>
  );
}

export default SocialMediaIcons;
