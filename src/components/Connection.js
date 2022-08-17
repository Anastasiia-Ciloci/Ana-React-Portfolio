import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className=" text-center col-12">
        <div className="row text-center  ">
          <div className="text-center">
            <span className=" fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="mailto:anastasiiailoci@gmail.com"
              >
                <FaEnvelope />
              </a>
            </span>
            <span className="fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="https://github.com/Anastasiia-Ciloci"
              >
                <FaGithub />
              </a>
            </span>
            <span className=" fs-2 me-3">
              <a
                className="col-12 text-decoration-none text-secondary"
                href="https://www.linkedin.com/in/anastasiia-ciloci-83260b228/"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
