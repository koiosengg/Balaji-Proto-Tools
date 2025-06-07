import React from "react";
import DesktopBackground from "../../assets/Our Team Background Desktop.png";
import MobileBackground from "../../assets/Our Team Background Mobile.png";

function OurTeam() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <h2>Our Team</h2>
        <p>
          A skilled team of engineers and toolmakers, united by precision,
          experience, and commitment to your success.
        </p>
      </div>
      <div className="our-team-container">
        <div className="our-team-div">
          <div className="our-team-set">
            <h3>Cam Engineer</h3>
            <p>12 Years of Experience</p>
          </div>
          <div className="our-team-set">
            <h3>VMC Engineer</h3>
            <p>10 Years of Experience</p>
          </div>
          <div className="our-team-set">
            <h3>Assembly & Filter</h3>
            <p>08 Years of Experience</p>
          </div>
        </div>
        <img src={DesktopBackground} className="desktop" />
        <img src={MobileBackground} className="mobile" />
      </div>
    </div>
  );
}

export default OurTeam;
