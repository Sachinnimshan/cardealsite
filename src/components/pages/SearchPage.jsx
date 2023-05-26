import React from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import BreadCrumbs from "../../common/sectioncommons/BreadCrumbs";
import Tabs from "../../common/tab";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PADDING_MOBILE_X,
  PADDING_MOBILE_Y,
  PRIMARY_WHITE,
} from "../../themes/common";
import ListView from "../sections/ListView";
import MainSearch from "../sections/MainSearch";

function SearchPage(props) {
  return (
    <FlexContainer direction="column">
      <BreadCrumbs
        title="Search"
        mobile={props.mobile}
      />
      <MainSearch mobile={props.mobile} />
      <ListView mobile={props.mobile} data={props.data} />
    </FlexContainer>
  );
}

export default SearchPage;
