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
            {jobs.map((job) => {
              return (
                <tr>
                  <td>{job.jobName}</td>
           
                </tr>
              );
            })}
          </tr>
        <tr>
            {jobs.map((job) => {
              return (
                <tr>
                  <td>{job.position}</td>
           
                 
                </tr>
              );
            })}

            {jobs.map((job) => {
              return (
                <tr>
                  <td>{job.salary}</td>
              
                </tr>
              );
            })}
          </tr>
          <tr>
            {jobs.map((job) => {
              return (
                <tr>
                  <td>{job.salary}</td>
             
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



