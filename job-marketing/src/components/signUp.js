import React, { useState } from "react";
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    selectOption: "",
    employed: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signup", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <input
            name="firstName"
            onChange={handleChange}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      ls
      <div>
        <label>Select</label>
        <div>
          <select name="selectOption" onChange={handleChange}>
            <option />
            <option value="Employing">Advertise</option>
            <option value="Job Seeker">Get Hired</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <input
            onChange={handleChange}
            name="employed"
            id="employed"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <Link to="/joblist">
          <button type="submit">Submit</button>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
