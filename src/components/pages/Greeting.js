import React from "react";
// import styled, { keyframes } from "styled-components";
// import { bounce } from "react-animation";
// const Bounce = styled.div`
//   animation: 3s ${keyframes`${bounce}`};
// `;

import "animate.css";

function Greeting() {
  return (
    <>
      <div className="greeting "></div>

      <div id="greeting-text">
        Hi,
        <br />
        I'm Anastasiia Ciloci
        <br />
        <h2 id="dropped" className="animate__animated animate__fadeIn pb-5 ">
          Full Stack Web Developer...
          <span className="animate__animated animate__flash infinite">|</span>
        </h2>
      </div>
    </>
  );
}
export default Greeting;
