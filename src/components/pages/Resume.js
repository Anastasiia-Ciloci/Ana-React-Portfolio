import React from "react";
import resume from "../../assets/Anastasiia Ciloci RESUME.pdf";

export default function Resume() {
  return (
    <div className="container mt-5 mb-4" id="skills">
      <button type="button" class="btn btn-outline-warning">
        <a href={resume}>Download resume</a>
      </button>
    </div>
  );
}
