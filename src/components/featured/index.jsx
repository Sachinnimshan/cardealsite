import React from "react";
import { vehicleBrands } from "../../common/data";
import Tabs from "../../common/tab";
import {
  SectionHeader,
  SectionHeaderColumn,
  SectionSubTitle,
  SectionTitle,
} from "../../themes/typography";
import { FeaturedContainer } from "./featured.styled";

function Featured(props) {
  return (
    <FeaturedContainer mobile={props.mobile}>
      <SectionHeader>
        <SectionHeaderColumn column>
          <SectionSubTitle>Handy picked</SectionSubTitle>
          <SectionTitle>Featured Listings</SectionTitle>
        </SectionHeaderColumn>
              <Tabs data={vehicleBrands}/>
      </SectionHeader>
    </FeaturedContainer>
  );
}

export default Featured;
