import React from "react";
import profilePhoto from "../../assets/images/portfolio-img.png";
import { FaCode } from "react-icons/fa";
export default function About() {
  return (
    <div className="about  mt-5 pb-5">
      <div className="container">
        <h2 className="pt-5 text-light opacity-55">
          <FaCode />
          About me
        </h2>
        <div className="d-flex flex-row" id="about">
          <div className="align-middle" id="personal-img">
            <img id="profile-img" src={profilePhoto} alt="" />
          </div>

          <div className="col-6 mt-5">
            <p className="about-descr">
              I got my passion in computers about 2 year ago. In may of 2022
              I've graduated from the Coding Bootcamp. Now I'm a junior
              web-developer. I like working with React and Bootstrap for
              building UI and MongoDb for the database. Currently I am focusing
              on improving coding skills to become a senior full stack
              developer. In free time I usually travel to explore different
              places.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
