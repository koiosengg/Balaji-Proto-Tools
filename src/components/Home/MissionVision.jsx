import React from "react";
import Glow1 from "../../assets/Mission Vision Glow 1.png";
import Glow2 from "../../assets/Mission Vision Glow 2.png";

function MissionVision() {
  return (
    <div className="section-container mission-vision" id="AboutUs">
      <div className="section-heading">
        <h2>Driven by Precision, Guided by Purpose</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
          faucibus urna. Malesuada consectetur senectus nisi aliquet.
        </p>
      </div>
      <div className="mission-vision-container">
        <div className="mission-vision-set">
          <img src={Glow1} />
          <h3>MISSION</h3>
          <p>
            At Balaji Proto Tools, we create high-precision tooling by
            leveraging advanced technology, skilled labor, and specialized
            knowledge tailored for the foundry industry.
          </p>
        </div>
        <div className="mission-vision-set">
          <img src={Glow2} />
          <h3>VISION</h3>
          <p>
            At Balaji Proto Tools, we craft high-precision tooling using
            advanced tech, expert craftsmanship, and foundry-specific expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
