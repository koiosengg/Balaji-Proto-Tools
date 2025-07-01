import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Banner Background Desktop.png";
import MobileBackground from "../../assets/Banner Background Mobile.png";
import Img9 from "../../assets/Marquee/Img 9.jpeg";
import Img10 from "../../assets/Marquee/Img 10.jpg";
import Img11 from "../../assets/Marquee/Img 11.jpg";
import Img12 from "../../assets/Marquee/Img 12.jpg";
import Img13 from "../../assets/Marquee/Img 13.jpg";
import Img14 from "../../assets/Marquee/Img 14.jpg";
import Img15 from "../../assets/Marquee/Img 15.jpg";
import Img16 from "../../assets/Marquee/Img 16.jpg";
import Img17 from "../../assets/Marquee/Img 17.jpg";
import Img18 from "../../assets/Marquee/Img 18.jpg";
import Img19 from "../../assets/Marquee/Img 19.jpg";

function Banner() {
  return (
    <div className="banner" id="Banner">
      <img src={DesktopBackground} className="banner-background desktop" />
      <img src={MobileBackground} className="banner-background mobile" />
      <div className="banner-shade-up"></div>
      <div className="banner-shade-down"></div>
      <div className="banner-left">
        <section>
          <h1>
            Engineering Precision.
            <br /> Powering Production.
          </h1>
          <p>
            We craft high-performance foundry tools, GDC Dies, and fixtures that
            elevate quality, speed, and reliability. Explore our services.
          </p>
        </section>
        <Link to="/" state={{ scrollTo: "Explore" }} className="primary-button">
          <p>Explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_215_40"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_215_40)">
              <path
                d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="banner-right">
        <div className="banner-wrapper">
          <div className="banner-marquee">
            <div className="marquee-group">
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
            </div>
          </div>
        </div>
        <div className="banner-wrapper">
          <div className="banner-marquee banner-marquee-rev">
            <div className="marquee-group">
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
              <img src={Img9} />
              <img src={Img10} />
              <img src={Img11} />
              <img src={Img12} />
              <img src={Img13} />
              <img src={Img14} />
              <img src={Img15} />
              <img src={Img16} />
              <img src={Img17} />
              <img src={Img18} />
              <img src={Img19} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
