import React from "react";
import Button from "../../common/button";
import { socialIcons } from "../../common/data";
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
  FeaturedContainer,
  SocialContainer,
  SocialIcon,
} from "./sections.styled";

function Featured(props) {
  const tabs = ["New", "Used"];
  return (
    <FeaturedContainer mobile={props.mobile}>
      <SectionHeader>
        <SectionHeaderColumn column>
          <SectionSubTitle>Handy picked</SectionSubTitle>
          <SectionTitle>Featured Listings</SectionTitle>
        </SectionHeaderColumn>
        <Tabs data={tabs} bgrColor={BG_COLOR}/>
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
          />
        ))}
      </FeatureCardContainer>
      <SectionBottom>
        <SocialContainer>
          {socialIcons?.map((icon, index) => (
            <SocialIcon>{icon.icon}</SocialIcon>
          ))}
        </SocialContainer>
        <Button text="View 29 New" bgrColor={PRIMARY_ORANGE} maxWidth/>
      </SectionBottom>
    </FeaturedContainer>
  );
}

export default Featured;
