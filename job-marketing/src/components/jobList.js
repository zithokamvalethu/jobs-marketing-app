import React from "react";
import { useSelector } from "react-redux";


function JobList() {
  const jobs = useSelector((state) => state.employer.jobs);
  
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Name</th>
            <th scope="col">Location</th>
            <th scope="col">Available Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {jobs.map((jobs) => {
              return (
                <tr>
                  <td>{jobs.jobName}</td>
                  <td>{jobs.location}</td>
                  <td>{jobs.position}</td>
                  <td>{jobs.salary}</td>
                </tr>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default JobList;



