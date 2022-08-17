import React from "react";
import resume from "../../assets/Anastasiia Ciloci RESUME.pdf";
import { FaDownload } from "react-icons/fa";
export default function Resume() {
  return (
    <li className="nav-item btn btn-outline-warning px-5 ">
      <a id="tab-resume" href={resume}>
        <FaDownload />
        Resume
      </a>
    </li>
  );
}
