import React from "react";
import { Link } from "react-router-dom";

function ServiceOptions() {
  return (
    <div className="section-container" id="Explore">
      <div className="section-heading">
        <h2>What We Do & Do Best</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi pellentesque quis
          faucibus urna. Malesuada consectetur senectus nisi aliquet.
        </p>
      </div>
      <div className="service-options-container">
        <Link
          to="/"
          state={{ scrollTo: "Design&ManufacturingOfFoundaryTool" }}
          className="service-options-set"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_198_1409"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_1409)">
              <path
                d="M8.53332 24L6.66666 22.1334L19.4667 9.33335H7.99999V6.66669H24V22.6667H21.3333V11.2L8.53332 24Z"
                fill="#229191"
              />
            </g>
          </svg>
          <h3>
            Design & Manufacturing of <span>Foundry Tool</span>
          </h3>
        </Link>
        <Link
          to="/"
          state={{ scrollTo: "Design&ManufacturingOfGravityDieCasting" }}
          className="service-options-set"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_198_1409"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_1409)">
              <path
                d="M8.53332 24L6.66666 22.1334L19.4667 9.33335H7.99999V6.66669H24V22.6667H21.3333V11.2L8.53332 24Z"
                fill="#229191"
              />
            </g>
          </svg>
          <h3>
            Design & Manufacturing of <span>Gravity Die Casting </span>
          </h3>
        </Link>
        <Link
          to="/"
          state={{ scrollTo: "GatingDesign&Manufacturing" }}
          className="service-options-set"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_198_1409"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_1409)">
              <path
                d="M8.53332 24L6.66666 22.1334L19.4667 9.33335H7.99999V6.66669H24V22.6667H21.3333V11.2L8.53332 24Z"
                fill="#229191"
              />
            </g>
          </svg>
          <h3>
            <span> Gating Design & </span>
            Manufacturing
          </h3>
        </Link>
        <Link
          to="/"
          state={{ scrollTo: "PatternsDesign&Manufacturing" }}
          className="service-options-set"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_198_1409"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_1409)">
              <path
                d="M8.53332 24L6.66666 22.1334L19.4667 9.33335H7.99999V6.66669H24V22.6667H21.3333V11.2L8.53332 24Z"
                fill="#229191"
              />
            </g>
          </svg>
          <h3>
            <span> Patterns Design & </span>
            Manufacturing
          </h3>
        </Link>
        <Link
          to="/"
          state={{ scrollTo: "CoreboxDesign&Manufacturing" }}
          className="service-options-set"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_198_1409"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_1409)">
              <path
                d="M8.53332 24L6.66666 22.1334L19.4667 9.33335H7.99999V6.66669H24V22.6667H21.3333V11.2L8.53332 24Z"
                fill="#229191"
              />
            </g>
          </svg>
          <h3>
            <span> Corebox Design & </span>
            Manufacturing
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default ServiceOptions;
