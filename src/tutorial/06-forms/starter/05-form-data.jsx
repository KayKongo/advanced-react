import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialise the FormData API
    const formData = new FormData(e.currentTarget); // event.target refers to the DOM element that triggers an event | e.currentTarget refers to the DOM element that event listener is listening on.

    // Check to see if user is submitting empty fields

    // How to get a value using a key ("name" should be set in the input/select fields) from FormData
    // const name = formData.get("name");

    // Displaying the entries of the FormData
    // console.log([...formData.entries()]);

    // COnverting FormData (which is an array of arrays) into objects -- some servers want JSON only
    const newUser = Object.fromEntries(formData);
    console.log(newUser);

    // Update the state value and use the `e.currentTarget.reset()` method to clear out the form after a submission's re-render.
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password" // never forget aboout the "name" value when using formData
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;

// const [value, setValue] = useState(0);
// const formData = new FormData(e.curretTarget);
// const newUser = Object.fromEntries(formData);
// console.log(newUser);
// setValue(value + 1);
// e.currentTarget.reset();
