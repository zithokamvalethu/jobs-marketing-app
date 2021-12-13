import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";
import JobForm from "./jobForm";

const JobList = (props) => {


   const user = useSelector((state) => state.user.value);

  return (
    <div>
      <br />

      <table className="table" id="job-list">
        <thead>
          <tr>
            <th>Job name</th>
            <th>position</th>
            <th>salary</th>
            <th>location</th>
          </tr>
        </thead>

        <tbody>
          {(user, id) => (
            <tr key={id}>
              <td>{user.jobName}</td>
              <td>{user.surname}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>{user.location}</td>
              <td>
                {" "}
                <Route
                  path="JobForm/*"
                  element={
                    <JobForm
                      handleChange
                      handleSubmit
                      formData
                    />
                  }
                />
                <Route
                  path="JobList/*"
                  element={<JobList />}
                 
                />
              </td>
              <td>
                <button>Apply</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
