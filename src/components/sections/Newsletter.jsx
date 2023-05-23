import React from "react";
import Button from "../../common/button";
import Input from "../../common/input";
import { CommonLayout } from "../../common/Layouts.styled";
import { SectionText, SectionTitle } from "../../themes/typography";
import { NewsLetterContainer, NewsLetterRow } from "./sections.styled";

function Newsletter(props) {
  return (
    <CommonLayout>
      <NewsLetterContainer mobile={props.mobile}>
        <SectionTitle>Newsletter</SectionTitle>
        <SectionText size="16px">
          Subscribe to our newsletter and stay updated with our offer
        </SectionText>

        <NewsLetterRow>
          <Input placeholder="Your email address" />
          <Button text="Sign up" maxWidth />
        </NewsLetterRow>
      </NewsLetterContainer>
    </CommonLayout>
  );
}

export default Newsletter;
