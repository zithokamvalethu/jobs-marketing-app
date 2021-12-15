import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.employer.jobs);
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position Applied For</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Location</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {user.map((apply) => {
              return (
                <tr>
                  <td>{apply.jobName}</td>
                  <td>{apply.firstName}</td>
                  <td>{apply.lastName}</td>
                  <td>{apply.location}</td>
                  <td>{apply.position}</td>
                  <td>{apply.salary}</td>
                </tr>
              );
            })}
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Profile;



