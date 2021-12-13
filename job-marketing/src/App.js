import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/jobForm";
import SignUp from "./components/signUp";
import JobList from "./components/jobList";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/jobForm" element={<Form />} />
          <Route path="/availableJobs" element={<JobList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
