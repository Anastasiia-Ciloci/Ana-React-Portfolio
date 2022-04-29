import React from "react";
import resume from "../../assets/Anastasiia Ciloci RESUME.pdf";

export default function Resume() {
  return (
    <div className="container mt-5 mb-4" id="skills">
      <h1>Skills</h1>
      <br />
      <ul>MongoDb</ul>
      <ul>Sql</ul>
      <ul>Handlebars</ul>
      <ul>Css</ul>
      <ul>Bootstrap</ul>
      <ul>Express</ul>

      <br />

      <a href={resume}>Download resume</a>
    </div>
  );
}
