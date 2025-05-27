import React from "react";
import Img from "../../assets/Machine.png";
import Foundry from "../../assets/Services/Foundry Tool..jpg";
import Gravity from "../../assets/Services/Gravity Die Casting.jpeg";
import Gating from "../../assets/Services/Gating Design & Manufacturing.jpg";
import Pattern from "../../assets/Services/Design of patterns and manufacturing.jpg";
import Corebox from "../../assets/Services/Corebox.jpg";

function ServiceInfo() {
  return (
    <div className="section-container" id="OurServices">
      <div className="section-heading">
        <h2>Engineering Excellence Starts Here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
          faucibus urna. Malesuada consectetur senectus nisi aliquet.
        </p>
      </div>
      <div className="service-info">
        <div
          className="service-info-set"
          id="Design&ManufacturingOfFoundaryTool"
        >
          <section>
            <h3>Design & Manufacturing of Foundry Tool</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Foundry} />
          </div>
        </div>
        <div
          className="service-info-set"
          id="Design&ManufacturingOfGravityDieCasting"
        >
          <section>
            <h3>Design & Manufacturing of Gravity Die Casting </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Gravity} />
          </div>
        </div>
        <div className="service-info-set" id="GatingDesign&Manufacturing">
          <section>
            <h3>Gating Design & Manufacturing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Gating} />
          </div>
        </div>
        <div className="service-info-set" id="PatternsDesign&Manufacturing">
          <section>
            <h3>Patterns Design & Manufacturing </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Pattern} />
          </div>
        </div>
        <div className="service-info-set" id="CoreboxDesign&Manufacturing">
          <section>
            <h3>Corebox Design & Manufacturing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Corebox} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
