import React from "react";
import { useDispatch } from "react-redux"
import { register } from "./feature/user";


const SignUp = (props) => {
  const { handleChange, handleSubmit, formData } = props;


  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formData}
        ></input>
        <label>surname</label>
        <input name="surname" type="text" onChange={handleChange}></input>
       
        <label>position</label>
        <select name="option" onChange={handleChange}>
          <option defaultValue>SELECT POSITION</option>
          <option value="Advertise Job">Advertise</option>
          <option value="Apply for a job"> Apply</option>
       
        </select>
     
        <br />

        <button onClick={() => {
          dispatch(
            register({
              name: "",
              surname: "",
              option:""
            })
          );
        }} type="submit">Register</button>
      </form>
    </div>

  );
}
export default SignUp;