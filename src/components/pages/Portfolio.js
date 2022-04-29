import React from "react";
import Project from "./Project";
import projectData from "../../utils/projectData";

export default function Projects({ project }) {
  return (
    <>
      <h2 className=" titles h1-responsive font-weight-bold text-center my-5 ">
        Projects
      </h2>
      <div id="project-card">
        <div className="row mx-5 pb-5 mb-5">
          <section className="col-12">
            {projectData.map((project) => (
              <Project {...project} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
