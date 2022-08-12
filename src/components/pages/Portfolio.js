import React from "react";
import Project from "./Project";
import projectData from "../../utils/projectData";
import { FaCode } from "react-icons/fa";
export default function Projects({ project }) {
  return (
    <>
      <div
        className="container my-5 
      pt-5"
      >
        <h2>
          <FaCode /> Projects
        </h2>
        <div className="flex row row-cols-2 shadow mt-5" id="project-card">
          {/* <section className=""> */}
          {projectData.map((project) => (
            <Project {...project} />
          ))}
          {/* </section> */}
        </div>
      </div>
    </>
  );
}
