import React from "react";
import Project from "./Project";
import projectData from "../../utils/projectData";
import { FaCode } from "react-icons/fa";
export default function Projects({ project }) {
  return (
    <>
      <div className="container  " id="projects">
        <h2>
          <FaCode /> Projects
        </h2>
        {/* flex row row-cols-2 shadow mt-5 */}
        <div className="row gy-5" id="project-card">
          {projectData.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
