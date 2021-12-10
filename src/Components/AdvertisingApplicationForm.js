import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { advertise } from "../features/user.js";
import { useNavigate } from "react-router-dom";

const AdvertisingApplicationForm = () => {
  const [advertiseForm, setAdvertiseForm] = useState({
    company: "",
    address: "",
    title: "",
    contact: "",
    position: "",
  });
 

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const redirect = () => {
const {company , position, contact, title, address } = advertiseForm
console.log( company)
    navigate( company === "" ? "/advertise" : "/list");

  };

  const direct = () => {
    navigate("/advertise" ? "/applicationform" : null);

    console.log(advertise);
  };

  const handleChange = (e) => {
    setAdvertiseForm({
      ...advertiseForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlePervious = (e) => {
    e.preventDefault();
    direct();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(advertise(advertiseForm , redirect()));
  };

  return (
    <div className="AdvertisingApplicationFormBody">
      <h1>Organization Information</h1>
      <form onSubmit={onSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstname">Company Name</label>
            <input
              type="text"
              name="company"
              class="form-control"
              placeholder="Company Name"
              value={advertiseForm.company}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lastname">Job Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              value={advertiseForm.title}
              placeholder="Job Title"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              placeholder="1234 Main St"
              value={advertiseForm.address}
              onChange={handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputContact">Contact Number</label>
            <input
              type="number"
              name="contact"
              class="form-control"
              placeholder="Contact Number"
              value={advertiseForm.contact}
              onChange={handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPosition">Position</label>
            <input
              type="text"
              name="position"
              class="form-control"
              placeholder="Position"
              value={advertiseForm.position}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Adertise
        </button>
        <button type="submit" class="btn btn-danger" onClick={handlePervious}>
          Previous Page
        </button>
      </form>
    </div>
  );
};

export default AdvertisingApplicationForm;
