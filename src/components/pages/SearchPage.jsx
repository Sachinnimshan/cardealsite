import React from "react";
import { FlexContainer } from "../../themes/Layouts.styled";
import ListView from "../sections/ListView";
import MainSearch from "../sections/MainSearch";

function SearchPage(props) {
  return (
    <FlexContainer direction="column" padding={!props.mobile && "1rem 0"}>
      <MainSearch mobile={props.mobile} />
      <ListView mobile={props.mobile} data={props.data} />
    </FlexContainer>
  );
}

export default SearchPage;
