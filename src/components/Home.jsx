import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import MissionVision from "./Home/MissionVision";
import Clientele from "./Home/Clientele";
import ServiceOptions from "./Home/ServiceOptions";

function Home() {
  return (
    <>
      <Helmet>
        <title>Balaji Proto Tools</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Helmet>
      <Banner />
      <MissionVision />
      <Clientele />
      <ServiceOptions />
    </>
  );
}

export default Home;
