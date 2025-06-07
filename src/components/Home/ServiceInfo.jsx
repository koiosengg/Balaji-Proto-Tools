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
        <h2>Trusted by Manufacturers from Design to Manufacturing</h2>
        <p>
          We support foundries and engineering teams with reliable tooling
          solutions that meet complex production and quality demands.
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
              Generic tools don’t solve production-specific challenges. We build
              custom foundry tools — including fixtures, jigs, and inspection
              aids — designed to fit your exact process. Manufacturers trust us
              for solutions that boost production, safety, and process
              repeatability on the shop floor.
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
              Need long-lasting dies with minimal maintenance?We manufacture gravity dies using hardened tool steel and precision machining, designed for durability and dimensional accuracy. Suitable for aluminum and non-ferrous casting, our dies improve part consistency and reduce tooling downtime.
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
             Poor gating leads to turbulence, defects, and inefficient casting cycles.Our gating systems are engineered for balanced metal flow and reduced porosity. We design gating for a variety of casting setups, helping foundries achieve better surface finish, production quantity and quality control.
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
            Inaccurate patterns can lead to casting defects and material wastage.We create high-precision patterns tailored for gravity die casting and sand casting applications. Trusted by automotive and industrial manufacturers, our patterns guarantee reliable mold performance and optimized material flow.
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
             Struggling with inconsistent cores or poor mold accuracy?We design and manufacture precision core boxes that ensure repeatability core quality. Ideal for high-volume foundries and casting setups, our solutions reduce rework, increase production, and deliver dimensional accuracy every time.
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
