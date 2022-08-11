import React from "react";
const styles = {
  a: {
    textDecoration: "none black",
    color: "black",
  },

  container: {
    height: "300px",
  },

  img: {
    height: "200px",
  },
  btnColor: {
    backgroundColor: "grey",
    height: "50px",
    color: "blue",
  },
};
export default function renderProject({ name, link, githubLink, imgPath }) {
  return (
    <>
      <div className="col-lg-6 py-5 col-sm-12" style={styles.container}>
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
            // height="250px"
            style={styles.img}
          ></img>
        </a>

        <a href={githubLink} target="_blank" rel="noreferrer" style={styles.a}>
          <button
            className="btn col-12 project-button text-decoration-none btnColor my-2"
            type="button"
            style={styles.btnColor}
          >
            Check repo
          </button>
        </a>
      </div>
    </>
  );
}
