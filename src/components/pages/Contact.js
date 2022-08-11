import React from "react";

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = e.target;

  //   // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  //   return name === "firstName" ? setFirstName(value) : setLastName(value);
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // Alert the user their first and last name, clear the inputs
  //   alert(`Hello ${firstName} ${lastName}`);
  //   setFirstName("");
  //   setLastName("");
  // };
  return (
    <>
      <div className="container mt-10 p-5">
        <h1>Contact Me</h1>
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
