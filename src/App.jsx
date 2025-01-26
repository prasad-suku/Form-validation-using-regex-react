import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  // regex for validating for all input

  const regex = {
    name: /\w{3,}/,
    email: /^[\w-_$]+\@\w+\.\w{2,}/,
    phone: /^[6-9]\d{9}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9])\w{6,}$/,
  };

  // onchange function to update the state value
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //validate the form
  const validateForm = () => {
    let isValid = true; // Tracks overall form validity
    const errors = {}; // Temporary error object

    // Validate name field
    if (input.name) {
      input.name = input.name.trim();
      if (!regex.name.test(input.name)) {
        errors.name = "Name is invalid";
        isValid = false;
      }
    } else {
      errors.name = "Name is required";
      isValid = false;
    }

    // Validate email field
    if (input.email) {
      input.email = input.email.trim();
      if (!regex.email.test(input.email)) {
        errors.email = "Invalid Email. Please check!";
        isValid = false;
      }
    } else {
      errors.email = "Email is required";
      isValid = false;
    }

    // Validate phone field
    if (input.phone) {
      input.phone = input.phone.trim();
      if (!regex.phone.test(input.phone)) {
        errors.phone = "Phone must start with 6-9 and be 10 digits long.";
        isValid = false;
      }
    } else {
      errors.phone = "Phone number is required";
      isValid = false;
    }

    // Validate password field
    if (input.password) {
      input.password = input.password.trim();
      if (!regex.password.test(input.password)) {
        errors.password =
          "Password must be at least 6 characters long and include one number and one letter.";
        isValid = false;
      }
    } else {
      errors.password = "Password is required";
      isValid = false;
    }

    // Update state with errors
    setErrorMessage(errors);

    return isValid;
  };

  // handlesubmit function to submit the form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully");
      console.log("Userdata", input);
      setInput({ name: "", phone: "", email: "", password: "" });
    } else {
      alert("can't submit the Form please check the fields");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Form validation</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={input.name}
            placeholder="Enter your name"
          />
          <span>{errorMessage.name}</span>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={input.email}
            placeholder="Enter your email"
          />
          <span>{errorMessage.email}</span>
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={(e) => handleChange(e)}
            value={input.phone}
            placeholder="Enter your phone"
          />
          <span>{errorMessage.phone}</span>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
            value={input.password}
            placeholder="Enter your password"
          />
          <span> {errorMessage.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
