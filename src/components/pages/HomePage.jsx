import React from "react";
import { carData, mobileData, service, teamData, vehicleBrands } from "../../common/data";
import Featured from "../sections/Featured";
import Home from "../home";
import Popular from "../sections/Popular";
import Service from "../sections/Service";
import Mobile from "../sections/Mobile";
import { FlexContainer } from "../../themes/Layouts.styled";
import Brands from "../sections/Brands";
import Team from "../slideshows/Team";
function HomePage(props) {
  return (
    <FlexContainer direction="column">
      <Home mobile={props.mobile} />
      <Featured mobile={props.mobile} data={carData} />
      <Popular mobile={props.mobile} carData={carData} data={vehicleBrands} />
      <Service mobile={props.mobile} data={service} />
      <Team mobile={props.mobile} data={teamData}/>
      <Brands mobile={props.mobile} />
      <Mobile mobile={props.mobile} data={mobileData} />
    </FlexContainer>
  );
}

export default HomePage;
