import React from "react";
import profilePhoto from "../../assets/images/portfolio-img.png";

export default function About() {
  return (
    <div className="container mt-5 mb-4">
      <h1>About Page</h1>
      <div className="d-flex flex-row" id="about">
        <div className="align-middle" id="personal-img">
          <img id="profile-img" src={profilePhoto} alt="" />
        </div>

        <div className="col-6 mt-5">
          <p>
            Hello everyone! My name is Anastasiia Ciloci. For the last 6 years I
            have been living in Virginia Beach, Virginia. I worked in beauty
            industry for five years and decided to swich career. I got my
            passion in computers about a year ago. Now I'm a junior
            web-developer. Currently I am focusing on improving coding skills to
            become a senior full stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}
