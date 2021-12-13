import "./App.css";
import React, {useState} from "react";
import JobForm from "./components/jobForm";
import JobList from "./components/jobList";
import JobPortfolio from "./components/jobPortfolio";
import SignUp from "./components/signUp";

import { BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  const [formData, setFormData] = useState({
    jobName: "",
    location: "",
    position: "",
    salary: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { jobName, location, position, salary } = formData;
    if (jobName && location && position && salary) {
      setPeople([...people, formData]);
    }
    console.log(formData);
  };

  
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="SignUp/*"
            element={
              <SignUp
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            }
          />
          <Route
            path="JobForm/*"
            element={
              <JobForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            }
          />
          <Route
            path="JobList/*"
            element={<JobList people={people} />}
            people={people}
          />

          <Route
            path="JobPortfolio/*"
            element={<JobPortfolio people={people} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
