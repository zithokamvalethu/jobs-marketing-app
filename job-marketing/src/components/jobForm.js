import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/actions/jobForm";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    jobName: "",
    location: "",
    position: "",
    salary: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { jobName, location, position, salary } = formData;
    if ((jobName && location && position && salary) === "") {
      return alert("Please fill in inputs");
    }
    dispatch(addJob(formData));
  };

  return (
    <div>
      <form method="POST" action="/SignUp" onSubmit={handleSubmit}>
        <label>Job name</label>
        <input
          name="jobName"
          type="text"
          onChange={handleChange}
          value={formData.jobName}
        ></input>
        <label>Location</label>
        <input name="location" type="text" onChange={handleChange}></input>
        <label>position</label>
        <select name="position" onChange={handleChange}>
          <option defaultValue>SELECT POSITION</option>
          <option value="junior back-end">Junior </option>
          <option value="senior back-end"> Senior </option>
        </select>
        <label>salary</label>
        <input
          onfocus="this.value=''"
          type="number"
          name="salary"
          onChange={handleChange}
        ></input>
        <Link to="/availablejobs">
          <button type="submit">Submit</button>
        </Link>{" "}
      </form>
    </div>
  );
};

export default Form;
