import React, { useEffect, useState } from "react";
import "./Login.css";
import { InputField } from "./InputField";
export const getdata = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  }
};

const Login = ({closemodal}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
    gender:""
  });

  const [records, setRecords] = useState([]);

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user ,id:new Date().getTime().toString()};
    setRecords([...records, newRecord]);
    setUser({ name: "", email: "", confirmPassword: "", password: "" });
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(records));
  }, [records]);

  return (
    <div className="main">
      <div className="login">
        <h1>Sign-Up Form</h1>
        <form action="#" onSubmit={HandleSubmit}>
          <InputField 
          InputName={user.name}
          type="text"
          HandleInput={HandleInput}
          name="name"
          labelName="Name"
          />

          
          <div className="inputBox">
            <input
              type="text"
              value={user.email}
              onChange={HandleInput}
              autoComplete="off"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              value={user.confirmPassword}
              onChange={HandleInput}
              autoComplete="off"
              name="confirmPassword"
              required
            />
            <label htmlFor="confirmPassword">ConfirmPassword</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              value={user.password}
              onChange={HandleInput}
              autoComplete="off"
              name="password"
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="inputBox gender">
            <input
              type="radio"
              value={user.radio}
              onChange={HandleInput}
              autoComplete="off"
              name="gender"
              placeholder="Male"
              required
            />
            <label htmlFor="password" className="genderMale">Male</label>
          </div>

          <div className="inputBox gender" >
            <input
              type="radio"
              value={user.radio}
              onChange={HandleInput}
              autoComplete="off"
              name="gender"
              placeholder="Female"
              required
            />
            <label htmlFor="password" className="genderFemale">Female</label>
          </div>

          <input type="submit" name="" value="Submit" />
          <button onClick={closemodal}>Finish</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
