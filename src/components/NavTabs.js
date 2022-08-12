import React from "react";
import { FaCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Anastasiia Ciloci RESUME.pdf";
function NavTabs({ handlePageChange }) {
  return (
    <ul id="navbar" className="nav  d-flex justify-content-center nav-tabs p-2">
      <li className="nav-item btn-outline-secondary rounded px-5 pt-2">
        <a className=" text-decoration-none" id="tab" href="#about">
          <FaCode /> About
        </a>
      </li>
      <li className="nav-item  btn-outline-secondary rounded pt-2 px-5">
        <a className=" text-decoration-none " id="tab" href="#portfolio">
          <FaCode />
          Projects
        </a>
      </li>
      <li className="nav-item btn-outline-secondary rounded pt-2 px-5">
        <a className=" text-decoration-none " id="tab" href="#contact">
          <FaCode />
          Contact
        </a>
      </li>
      <li className="nav-item btn btn-outline-warning px-5 ">
        <a id="tab-resume" href={resume}>
          <FaDownload />
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
