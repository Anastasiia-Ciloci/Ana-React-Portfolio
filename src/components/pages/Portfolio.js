import React from "react";
import Project from "./Project";
import projectData from "../../utils/projectData";

export default function Projects({ project }) {
  return (
    <>
      <div className="container">
        <h2>Projects</h2>
        <div className="flex row row-cols-2" id="project-card">
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
