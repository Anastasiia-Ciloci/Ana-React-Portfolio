import React from "react";
import { FaCode } from "react-icons/fa";
import Resume from "../components/pages/Resume";

function NavTabs() {
  return (
    <ul id="navbar" className="nav  d-flex justify-content-center nav-tabs p-2">
      <li className="nav-item btn-outline-secondary rounded px-5 pt-2">
        <a className=" text-decoration-none" id="tab" href="#about">
          <FaCode /> About
        </a>
      </li>
      <li className="nav-item  btn-outline-secondary rounded pt-2 px-5">
        <a className=" text-decoration-none " id="tab" href="#projects">
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
      <Resume />
    </ul>
  );
}

export default NavTabs;
