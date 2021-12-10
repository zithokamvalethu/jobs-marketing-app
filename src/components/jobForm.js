import React from "react";
import { useDispatch } from "react-redux";
import { register } from "./feature/user";



const JobForm = (props) => {
  
  const { handleChange, handleSubmit, formData } = props;
 const dispatch = useDispatch(register)
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label>Job name</label>
        <input
          name="jobName"
          type="jobName"
          onChange={handleChange}
          value={formData}
        ></input>
        <label>position</label>
        <select name="position" onChange={handleChange}>
          <option defaultValue>SELECT POSITION FOR POST </option>
          <option value="junior back-end">Junior </option>
          <option value="senior back-end"> Senior </option>
        </select>
        <label>salary</label>

        <input
          onfocus="this.value=''"
          type="number"
          name="salary"
          onChange={handleChange}
        ></input>

        <label>LOCATION</label>
        <input type="location" name="location" onChange={handleChange}></input>
        <br />
        <button onClick={() => {
          dispatch(
            register({
              position: "",
              jobName: "",
              salary: "",
              location: "",
              
            })
          );
        }}type="submit">Post Job</button>
      </form>
    </div>
  );
};
export default JobForm;
