import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/login";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ApplicationForm = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [select, setSelect] = useState();

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const redirect = () => {
    navigate(select === "Job Advertise" ? "/advertise" : "/list");

    console.log(select);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && select !== "") {
      dispatch(login({ firstname, lastname, select }), redirect());
    }
  };
  return (
    <div className="">
      <h1>Login Form</h1>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <div>
          <label for="firstname">First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div>
          <label for="lastname">Las Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            class="form-control"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label for="options">Select</label>
          <select
            onChange={(e) => setSelect(e.target.value)}
            class="form-control"
            value={select}
          >
            <option disabled selected>
              Choose
            </option>
            <option>Job Advertise</option>
            <option>Job Markerting</option>
          </select>
        </div>
        <br />
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
