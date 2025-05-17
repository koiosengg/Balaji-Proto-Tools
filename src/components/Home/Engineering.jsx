import React from "react";
import Img from "../../assets/Machine.png";

function Engineering() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <h2>Engineering Excellence Starts Here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
          faucibus urna. Malesuada consectetur senectus nisi aliquet.
        </p>
      </div>
      <div className="engineering-container">
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>Radial Drilling Machine (Up to 40mm Dia Hole Drilling)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>Surface Plate (1000 x 1000 mm)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>WorkNC (Cam Software)</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>2000 SQ-FT area Rented Shop</p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>
            Height Gauge, Digital Vernier, Z Axis Tool Setter, Edge Finder,
            Boring Kit
          </p>
        </div>
        <div className="engineering-set">
          <div className="engineering-img">
            <img src={Img} />
          </div>
          <p>Overhead Crane for Material Handling / Assembly -1Ton</p>
        </div>
      </div>
    </div>
  );
}

export default Engineering;
