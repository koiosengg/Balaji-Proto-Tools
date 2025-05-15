import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Banner Background Desktop.png";
import Img1 from "../../assets/Marquee/Img 1.png";
import Img2 from "../../assets/Marquee/Img 2.png";
import Img3 from "../../assets/Marquee/Img 3.png";
import Img4 from "../../assets/Marquee/Img 4.png";
import Img5 from "../../assets/Marquee/Img 5.png";
import Img6 from "../../assets/Marquee/Img 6.png";

function Banner() {
  return (
    <div className="banner" id="Banner">
      <img src={DesktopBackground} className="banner-background" />
      <div className="banner-shade-up"></div>
      <div className="banner-shade-down"></div>
      <div className="banner-left">
        <section>
          <h1>Engineering Excellencein Every Shape</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis maecenas tristique
            sagittis lectus id ut. Sed nunc felis facilisis urna ac morbi.
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
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
            </div>
          </div>
        </div>
        <div className="banner-wrapper">
          <div className="banner-marquee banner-marquee-rev">
            <div className="marquee-group">
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
              <img src={Img4} />
              <img src={Img5} />
              <img src={Img6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
