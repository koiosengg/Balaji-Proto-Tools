import React from "react";
import { Helmet } from "react-helmet-async";
import DesktopBackground from "../assets/Contact Background Desktop.png";
import MobileBackground from "../assets/Contact Background Mobile.png";

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Balaji Proto Tools Contact Us Page" />
      </Helmet>
      <img src={DesktopBackground} className="contact-background desktop" />
      <img src={MobileBackground} className="contact-background mobile" />
      <div className="contact-info">
        <h2>
       Is Your Precision Dieing? Contact Us!
        </h2>
        <div className="contact-info-container">
          <a href="https://mail.google.com/mail/?view=cm&to=bpt.nov24@gmail.com" target="_blank" className="contact-info-set">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                fill="#2DC2C2"
              />
            </svg>
            <div className="contact-info-set-line"></div>
            <section>
              <h3>Mail Us</h3>
              <p>bpt.nov24@gmail.com</p>
            </section>
          </a>
          <div className="contact-info-set">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_198_1794"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_198_1794)">
                <path
                  d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                  fill="#2DC2C2"
                />
              </g>
            </svg>
            <div className="contact-info-set-line"></div>
            <section>
              <h3>Address</h3>
              <p>
               Plot Number J-535/11, MIDC, Bhosari, Pimpri
                Chinchwad - Maharastra- 411026
              </p>
            </section>
          </div>
          <div className="contact-info-set">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 3.375C3.75 2.339 4.59 1.5 5.625 1.5H9C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V7.125C12.75 8.161 13.59 9 14.625 9H16.5C17.4946 9 18.4484 9.39509 19.1517 10.0983C19.8549 10.8016 20.25 11.7554 20.25 12.75V20.625C20.25 21.66 19.41 22.5 18.375 22.5H5.625C5.12772 22.5 4.65081 22.3025 4.29917 21.9508C3.94754 21.5992 3.75 21.1223 3.75 20.625V3.375ZM14.25 5.25C14.2518 3.98855 13.7975 2.76896 12.971 1.816C14.6442 2.25615 16.1705 3.13273 17.3939 4.35611C18.6173 5.57949 19.4938 7.1058 19.934 8.779C18.981 7.95248 17.7615 7.49825 16.5 7.5H14.625C14.5255 7.5 14.4302 7.46049 14.3598 7.39016C14.2895 7.31984 14.25 7.22446 14.25 7.125V5.25ZM9.75 10.5C9.55109 10.5 9.36032 10.579 9.21967 10.7197C9.07902 10.8603 9 11.0511 9 11.25C9 11.4489 9.07902 11.6397 9.21967 11.7803C9.36032 11.921 9.55109 12 9.75 12H10.125C10.894 12 11.555 12.463 11.844 13.125H9.75C9.55109 13.125 9.36032 13.204 9.21967 13.3447C9.07902 13.4853 9 13.6761 9 13.875C9 14.0739 9.07902 14.2647 9.21967 14.4053C9.36032 14.546 9.55109 14.625 9.75 14.625H11.844C11.6975 14.9591 11.457 15.2433 11.1518 15.4431C10.8465 15.6428 10.4898 15.7495 10.125 15.75H9.75C9.60176 15.7501 9.45688 15.7942 9.33367 15.8766C9.21045 15.959 9.11442 16.0761 9.05771 16.2131C9.001 16.35 8.98615 16.5007 9.01503 16.6461C9.04392 16.7915 9.11524 16.9251 9.22 17.03L11.47 19.28C11.6122 19.4125 11.8002 19.4846 11.9945 19.4812C12.1888 19.4777 12.3742 19.399 12.5116 19.2616C12.649 19.1242 12.7277 18.9388 12.7312 18.7445C12.7346 18.5502 12.6625 18.3622 12.53 18.22L11.337 17.026C11.8539 16.8269 12.3139 16.5038 12.6766 16.0851C13.0393 15.6664 13.2936 15.165 13.417 14.625H14.25C14.4489 14.625 14.6397 14.546 14.7803 14.4053C14.921 14.2647 15 14.0739 15 13.875C15 13.6761 14.921 13.4853 14.7803 13.3447C14.6397 13.204 14.4489 13.125 14.25 13.125H13.416C13.3241 12.7238 13.1601 12.3426 12.932 12H14.25C14.4489 12 14.6397 11.921 14.7803 11.7803C14.921 11.6397 15 11.4489 15 11.25C15 11.0511 14.921 10.8603 14.7803 10.7197C14.6397 10.579 14.4489 10.5 14.25 10.5H10.5C10.46 10.5 10.42 10.5033 10.38 10.51C10.2952 10.5031 10.2101 10.4997 10.125 10.5H9.75Z"
                fill="#2DC2C2"
              />
            </svg>
            <div className="contact-info-set-line"></div>
            <section>
              <h3>GSTIN</h3>
              <p>27ABDFB7931K1Z7</p>
            </section>
          </div>
        </div>
      </div>
      <form action="https://formspree.io/f/xwpoywvp" method="POST">
        <div className="form-name">
          <section>
            <label htmlFor="firstName">
              First name <span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="First Name"
              placeholder="Enter First Name"
              required
            />
          </section>
          <section>
            <label htmlFor="lastName">
              Last name <span>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="Last Name"
              placeholder="Enter Last Name"
              required
            />
          </section>
        </div>

        <section>
          <label htmlFor="email">
            Email address <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter Email Address"
            autoComplete="Email"
            required
          />
        </section>

        <section>
          <label htmlFor="mobile">
            Mobile number <span>*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="Mobile Number"
            placeholder="Enter Mobile Number"
            required
          />
        </section>

        <section>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="Message"
            placeholder="Enter your message"
          ></textarea>
        </section>

        <button type="submit" className="primary-button">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}

export default Contact;
