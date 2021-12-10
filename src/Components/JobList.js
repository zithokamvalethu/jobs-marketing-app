import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const JobList = () => {
  const user = useSelector((state) => state.user.value);

  let navigate = useNavigate();

  const redirect = () => {
    navigate("/list" ? "/advertise" : null);

    console.log();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("tumi");
  };

  const handlePervious = (e) => {
    e.preventDefault();
    redirect()
  };

  return (
    <div>
      <h1>Job Vacancy List</h1>;
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Position</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, id) => {
            return (
              <tr key={id}>
                <th scope="row">{user.company}</th>
                <td>{user.title}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td>{user.position}</td>

                <td>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Select
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="submit" class="btn btn-danger" onClick={handlePervious}>
        Previous Page
      </button>
    </div>
  );
};

export default JobList;
