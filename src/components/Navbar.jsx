import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/Company Logo.png";

function Navbar() {
  return (
    <header>
      <Link to="/" state={{ scrollTo: "Banner" }} className="company-logo">
        <img src={CompanyLogo} />
        <p>Balaji Proto Tools</p>
      </Link>
      <nav>
        <Link to="/" state={{ scrollTo: "OurServices" }}>
          Our Service
        </Link>
        <Link to="/" state={{ scrollTo: "AboutUs" }}>
          About Us
        </Link>
      </nav>
      <a href="/contact" className="primary-button">
        <p>Contact Us</p>
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
      </a>
    </header>
  );
}

export default Navbar;
