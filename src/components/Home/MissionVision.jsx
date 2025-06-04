import React from "react";
import Glow1 from "../../assets/Mission Vision Glow 1.png";
import Glow2 from "../../assets/Mission Vision Glow 2.png";

function MissionVision() {
  return (
    <div className="section-container" id="AboutUs">
      <div className="section-heading">
        <h2>Engineered by Precision, Trusted Lasting Impact.</h2>
        <p>
          We deliver high-precision tooling solutions, driven by industry needs,
          technical skill, and customer satisfaction.
        </p>
      </div>
      <div className="mission-vision-container">
        <div className="mission-vision-set">
          <img src={Glow1} className="desktop" />
          <img src={Glow2} className="mobile" />
          <h3>MISSION</h3>
          <p>
            We aim to be the trusted partner by delivering high-precision,
            durable solutions. With advanced machining, expert craftsmanship,
            and customer-first service, we help industries build better and
            faster.
          </p>
        </div>
        <div className="mission-vision-set">
          <img src={Glow2} />
          <h3>VISION</h3>
          <p>
            We aim to grow as a leading tooling provider in die casting,
            forging, and fixture design. Expanding into bio-implant tooling, we
            set new standards in quality and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
