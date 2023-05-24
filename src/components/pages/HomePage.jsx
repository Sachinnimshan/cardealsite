import React from "react";
import { carData, mobileData, service, vehicleBrands } from "../../common/data";
import Featured from "../sections/Featured";
import Home from "../home";
import Popular from "../sections/Popular";
import Service from "../sections/Service";
import Mobile from "../sections/Mobile";
import { FlexContainer, PageContainer } from "../../common/Layouts.styled";

function HomePage(props) {
  return (
    <FlexContainer direction="column">
      <Home mobile={props.mobile} />
      <Featured mobile={props.mobile} data={carData} />
      <Popular mobile={props.mobile} carData={carData} data={vehicleBrands} />
      <Service mobile={props.mobile} data={service} />
      <Mobile mobile={props.mobile} data={mobileData} />
    </FlexContainer>
  );
}

export default HomePage;
