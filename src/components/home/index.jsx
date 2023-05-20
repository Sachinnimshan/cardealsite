import React from "react";
import Button from "../../common/button";
import { HomeImg } from "../../images";
import { PRIMARY_ORANGE } from "../../themes/common";
import { SectionText } from "../../themes/typography";
import {
  HomeBanner,
  HomeBannerText,
  HomeContainer,
  HomeTop,
  HomeTopLeft,
} from "./home.styled";
import SearchBox from "./SearchBox";

function Home(props) {
  return (
    <HomeContainer mobile={props.mobile}>
      <HomeTop mobile={props.mobile}>
        <HomeTopLeft mobile={props.mobile}>
          <HomeBannerText>
            Find your <br /> dream car
          </HomeBannerText>
          <SectionText>
            We can help you find the best car. Check our reviews, <br /> compare
            models and find cars for sale.
          </SectionText>
          {!props.mobile && (
            <Button
              text="About Us"
              bgrColor="transparent"
              hoverBgColor={PRIMARY_ORANGE}
              border={`2px solid ${PRIMARY_ORANGE}`}
              maxWidth="125px"
            />
          )}
        </HomeTopLeft>
        <SearchBox />
      </HomeTop>
      <HomeBanner src={HomeImg} alt="Silver Benz car" mobile={props.mobile} />
    </HomeContainer>
  );
}

export default Home;
