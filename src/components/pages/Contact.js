import React from "react";
import { FaCode } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <div className="container mt-10 p-5" id="contact">
        <h1>
          <FaCode />
          Contact Me
        </h1>
        <form className="form-group p-2 m-5">
          <div className="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Enter your name:
            </label>
            <input
              type="emailtext"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
