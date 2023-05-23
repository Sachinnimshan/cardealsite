import React from "react";
import Button from "../../common/button";
import { CommonLayout } from "../../common/Layouts.styled";
import SocialMediaIcons from "../../common/social";
import Tabs from "../../common/tab";
import { BG_COLOR, PRIMARY_ORANGE } from "../../themes/common";
import {
  SectionBottom,
  SectionHeader,
  SectionHeaderColumn,
  SectionSubTitle,
  SectionTitle,
} from "../../themes/typography";
import CarCard from "../cards/CarCard";
import {
  FeatureCardContainer,
} from "./sections.styled";

function Featured(props) {
  const tabs = ["New", "Used"];
  return (
    <CommonLayout
      mobile={props.mobile}
      display="flex"
      direction="column"
      gap="2rem"
    >
      <SectionHeader>
        <SectionHeaderColumn column>
          <SectionSubTitle>Handy picked</SectionSubTitle>
          <SectionTitle>Featured Listings</SectionTitle>
        </SectionHeaderColumn>
        <Tabs data={tabs} bgrColor={BG_COLOR} />
      </SectionHeader>
      <FeatureCardContainer>
        {props.data?.slice(0, 7).map((item, index) => (
          <CarCard
            key={index}
            images={item?.images}
            title={item?.title}
            price={item?.price}
            year={item?.year}
            fuel={item?.fuel}
            transmission={item?.transmission}
            mobile={props.mobile}
            id={item?.id}
          />
        ))}
      </FeatureCardContainer>
      <SectionBottom>
        <SocialMediaIcons />
        <Button text="View 29 New" bgrColor={PRIMARY_ORANGE} maxWidth />
      </SectionBottom>
    </CommonLayout>
  );
}

export default Featured;
