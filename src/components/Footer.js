import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="text-center col-12">
        <div className="row text-center text-secondary py-4">
          <div className="text-center">
            <span className=" fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="mailto:anastasiiailoci@gmail.com"
              >
                <FaEnvelope />
                {/* <img src="./assets/images/gmail.png" alt="gmail-icon" /> */}
              </a>
            </span>
            <span className="fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="https://github.com/Anastasiia-Ciloci"
              >
                <FaGithub />
                {/* <img src="./assets/images/github-sign.png" alt="github-icon" /> */}
              </a>
            </span>
            <span className=" fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="https://www.linkedin.com/in/anastasiia-ciloci-83260b228/"
              >
                <FaLinkedin />
                {/* <img src="./assets/images/linkedin.png" alt="linkedin-icon" /> */}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
