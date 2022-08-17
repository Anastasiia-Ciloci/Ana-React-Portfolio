import React from "react";
import { FaGithub } from "react-icons/fa";
const styles = {
  a: {
    textDecoration: "none black",
    color: "black",
    fontSize: "25px",
  },

  container: {
    height: "500px",
  },

  img: {
    height: "200px",
  },
  btnColor: {
    height: "50px",
    color: "white",
  },
};
export default function renderProject({
  name,
  link,
  githubLink,
  imgPath,
  description,
  skills,
}) {
  return (
    <>
      {/* container inline-block col-lg-6 col-sm-6 p-5 m-5 col-sm-12  py-5 bg-light */}
      <div className="col col-lg-6 col-sm-12" style={styles.container}>
        <div className="p-3 border bg-light">
          <a
            className="text-decoration-none"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={styles.a}
          >
            <img
              id="image"
              className="img-fluid  text-decoration-none col-12 px-5 "
              src={imgPath}
              title={name}
              alt={name}
              width="50%"
              style={styles.img}
            ></img>
          </a>
          <div className="pt-3 ps-5">
            <a
              className=" github btn col-5 border border-2 "
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              style={styles.a}
            >
              <FaGithub />
            </a>
            <a href={link}>
              <button
                className="btn btn-secondary col-6 project-button text-decoration-none  my-2"
                type="button"
                style={styles.btnColor}
              >
                view project
              </button>
            </a>
          </div>

          <div className="pt-2 container-fluid shadow-sm">
            <p id="projects"> {description}</p>

            <p id="techs">
              <strong>Used:</strong>
              {skills}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
