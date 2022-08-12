import React from "react";
import SkillsSet from "../../utils/skillsSet";
import { FaCode } from "react-icons/fa";
function Skills() {
  return (
    <>
      <div
        className="mt-5 
      pt-5"
      >
        <h2>
          <FaCode />
          Skills
        </h2>
        <div className="container pt-5">
          <SkillsSet />
        </div>
      </div>
    </>
  );
}
export default Skills;
