import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.employee.applys);
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position Applied For</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {user.map((apply) => {
              return (
                <tr>
                  <td>{apply.Name}</td>
                </tr>
              );
            })}
          </tr>
          <tr>
            {user.map((apply) => {
              return (
                <tr>
                  <td>{apply.position}</td>
                </tr>
              );
            })}

            {user.map((apply) => {
              return (
                <tr>
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



