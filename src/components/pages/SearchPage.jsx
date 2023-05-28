import React from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import BreadCrumbs from "../../common/sectioncommons/BreadCrumbs";
import ListView from "../sections/ListView";
import MainSearch from "../sections/MainSearch";

function SearchPage(props) {
  return (
    <FlexContainer direction="column">
      
      <MainSearch mobile={props.mobile} />
      <ListView mobile={props.mobile} data={props.data} />
    </FlexContainer>
  );
}

export default SearchPage;
