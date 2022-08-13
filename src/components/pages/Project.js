import React from "react";
import { FaGithub } from "react-icons/fa";
const styles = {
  a: {
    textDecoration: "none black",
    color: "black",
    fontSize: "25px",
  },

  container: {
    height: "450px",
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
      <div
        className="col-lg-6 p-5 mb-5 col-sm-12 card "
        style={styles.container}
      >
        <a
          className="text-decoration-none"
          href={link}
          target="_blank"
          rel="noreferrer"
          style={styles.a}
        >
          <img
            id="image"
            className="img-fluid text-decoration-none col-12 px-5 "
            src={imgPath}
            title={name}
            alt={name}
            width="50%"
            // height="300px"
            style={styles.img}
          ></img>
        </a>
        <div className="pt-3">
          <a
            className="btn col-5 "
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

        <div className="pt-5 container-fluid shadow-sm">
          {description}
          <br />
          Used:{skills}
        </div>
        <div></div>
      </div>
    </>
  );
}
