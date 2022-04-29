import React from "react";
const styles = {
  a: {
    textDecoration: "none black",
    color: "black",
  },

  container: {
    height: "250px",
    overflow: "scroll",
  },

  img: {},
  btnColor: {
    backgroundColor: "rgba(50, 9, 9, 0.439)",
  },
};
export default function renderProject({ name, link, githubLink, imgPath }) {
  return (
    <>
      <div id="project-card">
        <div className="col-12 my-5">
          <div style={styles.container}>
            <a
              className="text-decoration-none"
              href={link}
              target="_blank"
              rel="noreferrer"
              style={styles.a}
            >
              <img
                id="image"
                className="img-fluid text-decoration-none col-12"
                src={imgPath}
                title={name}
                alt={name}
                width="100%"
                height="250px"
                style={styles.img}
              ></img>
            </a>
          </div>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            style={styles.a}
          >
            <button
              className="btn col-12 project-button text-decoration-none btnColor my-2"
              type="button"
              style={styles.btnColor}
            >
              Check repo
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
