import React from "react";

import { useSelector } from "react-redux";


const JobPortfolio = () => {
  const user = useSelector((state) => state.user.value);


  return (
    <div>
      <table className="table" id="list">
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
                <tr>
                  <td>{user.jobName}</td>
                  <td>{user.position}</td>
                  <td>{user.salary}</td>
                <td>{user.location}</td>
                <td></td>
                </tr>
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

export default JobPortfolio;
