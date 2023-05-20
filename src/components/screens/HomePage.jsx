import React from "react";
import { carData, mobileData, service, vehicleBrands } from "../../common/data";
import Featured from "../sections/Featured";
import Home from "../home";
import { ScreenContainer } from "./screens.styled";
import Popular from "../sections/Popular";
import Service from "../sections/Service";
import Mobile from "../sections/Mobile";
import Newsletter from "../sections/Newsletter";

function HomePage(props) {
  return (
    <ScreenContainer>
      <Home mobile={props.mobile} />
      <Featured mobile={props.mobile} data={carData} />
      <Popular mobile={props.mobile} data={vehicleBrands} />
      <Service mobile={props.mobile} data={service} />
      <Mobile mobile={props.mobile} data={mobileData} />
      <Newsletter mobile={props.mobile} />
    </ScreenContainer>
  );
}

export default HomePage;
