import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

function JobList() {
  const jobs = useSelector((state) => state.employer.jobs);
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            return (
              <tr>
                <td>{job.jobName}</td>
                <td>{job.location}</td>
                <td>{job.position}</td>
                <td>{job.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default JobList;
