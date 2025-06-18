import React from "react";
import RadialDrilling from "../../assets/Engineering/Pentagon-Brand-Radial-Drilling-machine-Z3050x20-1..png";
import SurfacePlate from "../../assets/Engineering/suraface Plate.avif";
import WorkNC from "../../assets/Engineering/worknc-cam-mastercam-jpg.jpg";
import ZAxis from "../../assets/Engineering/z-setter.jpg";
import Overhead from "../../assets/Engineering/overhead crane.png";
import Shop from "../../assets/Engineering/shop.jpg";

function Engineering() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <h2>Built for Precision Manufacturing</h2>
        <p>
          Equipped with advanced machinery to handle complex tooling,
          high-accuracy machining, and large-scale production demands.
        </p>
      </div>
      <div className="engineering-container">
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={RadialDrilling} alt="Radial Drilling Machine" />
          </div>
          <p>Radial Drilling Machine (Up to 40mm Dia Hole Drilling)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={SurfacePlate} alt="Surface Plate" />
          </div>
          <p>Surface Plate (1000 x 1000 mm)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={WorkNC} className="WorkNC" />
          </div>
          <p>WorkNC (Cam Software)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Shop} alt="2000 SQ-FT area Shop" />
          </div>
          <p>2000 SQ-FT area Rented Shop</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={ZAxis} alt=" Z Axis Tool Setter" />
          </div>
          <p>
            Height Gauge, Digital Vernier, Z Axis Tool Setter, Edge Finder,
            Boring Kit
          </p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Overhead} alt="Overhead Crane for Material Handling" />
          </div>
          <p>Overhead Crane for Material Handling / Assembly -1Ton</p>
        </div>
      </div>
    </div>
  );
}

export default Engineering;
