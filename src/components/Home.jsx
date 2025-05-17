import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import MissionVision from "./Home/MissionVision";
import Clientele from "./Home/Clientele";
import ServiceOptions from "./Home/ServiceOptions";
import Experience from "./Home/Experience";
import Machine from "./Home/Machine";
import Engineering from "./Home/Engineering";
import ServiceInfo from "./Home/ServiceInfo";
import OurTeam from "./Home/OurTeam";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Certifications from "./Home/Certifications";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

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
      <Experience />
      <Machine />
      <Engineering />
      <ServiceInfo />
      <Certifications />
      <OurTeam />
    </>
  );
}

export default Home;
