import React from "react";
import Img from "../../assets/Machine.png";

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
            <img src={Img} />
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
            <img src={Img} />
          </div>
        </div>
        <div
          className="service-info-set"
          id="Design&ManufacturingOfForgingDiesMachiningUpTo55-58HRc"
        >
          <section>
            <h3>
              Design & Manufacturing of Forging dies machining up to 55-58HRc
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Img} />
          </div>
        </div>
        <div
          className="service-info-set"
          id="FixturesDesign&Manufacturing"
        >
          <section>
            <h3>
            Fixtures Design & Manufacturing
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
              faucibus urna. Malesuada consectetur senectus nisi aliquet. Lorem
              ipsum dolor sit amet consectetur. Morbi pellentesque quis faucibus
              urna. Malesuada consectetur senectus nisi aliquet.
            </p>
          </section>
          <div className="service-info-set-img">
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
