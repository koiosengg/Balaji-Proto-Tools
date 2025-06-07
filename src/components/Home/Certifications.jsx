import React, { useState } from "react";
import Icon from "../../assets/Certification Icon.png";
import PDF from "../../assets/ISO Certificate.jpg";

function Certifications() {
  const [openPDF, setOpenPDF] = useState(false);

  function toggleOpenPDF() {
    if (openPDF === false) {
      setOpenPDF(true);
    } else {
      setOpenPDF(false);
    }
  }

  return (
    <>
      <div className="section-container">
        <div className="section-heading">
          <h2>Certifications</h2>
          <p>
            Achieved to streamline processes, ensure consistent quality, and
            build trust with manufacturers through certified tooling standards.
          </p>
        </div>
        <div className="certifications-container">
          <img src={Icon} />
          <section>
            <div className="heading">
              <h3>ISO 9001:2015</h3>
              <h4>Quality Management System</h4>
            </div>
            <p>
              This is to certify that <span> Balaji Pro Tools</span> has
              undergone an independent assessment by QRO and meets the
              compliance requirements
            </p>
          </section>
          <a onClick={toggleOpenPDF}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M16.5 2L21.5 7V21.008C21.4997 21.2712 21.395 21.5235 21.2088 21.7095C21.0226 21.8955 20.7702 22 20.507 22H4.493C4.23038 21.9982 3.97902 21.8931 3.79322 21.7075C3.60742 21.5219 3.50209 21.2706 3.5 21.008V2.992C3.5 2.444 3.945 2 4.493 2H16.5ZM12.5 16C13.5609 16 14.5783 15.5786 15.3284 14.8284C16.0786 14.0783 16.5 13.0609 16.5 12C16.5 10.9391 16.0786 9.92172 15.3284 9.17157C14.5783 8.42143 13.5609 8 12.5 8H8.5V16H12.5ZM10.5 10H12.5C13.0304 10 13.5391 10.2107 13.9142 10.5858C14.2893 10.9609 14.5 11.4696 14.5 12C14.5 12.5304 14.2893 13.0391 13.9142 13.4142C13.5391 13.7893 13.0304 14 12.5 14H10.5V10Z"
                fill="#E60D0D"
              />
            </svg>
            <p>Click Here </p>
          </a>
        </div>
      </div>
      {openPDF && (
        <div className="certifications-popup">
          <div className="certifications-popup-container">
            <div className="certifications-popup-heading">
              <div
                onClick={toggleOpenPDF}
                className="certifications-popup-cancel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
                    stroke="#121212"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="certifications-popup-img">
              <img src={PDF} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;
