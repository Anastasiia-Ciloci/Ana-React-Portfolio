import React from "react";
import Resume from "./Resume";
import Connection from "../Connection";
import { FaCode } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className=" shadow  text-center " id="contact">
        <span className="mx-5 ">
          <h2>
            <FaCode />
            Contact Me
          </h2>
        </span>

        <div className=" col-12 bg-black shadow-lg">
          <div className="pt-5">
            <Resume />
          </div>
          <div className="pt-5 pb-5">
            <a href={`mailto:anastasiiaciloci@gmail.com`}>
              <h5>anastasiiaciloci@gmail.com</h5>
            </a>
          </div>
        </div>
        <div className="p-2 ">
          <div className=" ">
            <Connection />
          </div>
        </div>
      </div>
    </>
  );
}
