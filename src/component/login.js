import React, { useState, useEffect } from "react";
import loginImg from "../svg/login.svg";
import "../scss/login.scss";
import { axiosInstance } from "../config/axios";
import { NavLink } from "react-router-dom";

const Login = ({ authenticate, setAuthenticate }) => {
  const validate = () => {
    // setUser(document.getElementById("username").value);
    // setPassword(document.getElementById("password").value);
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);
    axiosInstance
      .get(`${user}/${password}`)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("in");
          setAuthenticate(true);
          console.log(authenticate);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label>Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <NavLink className="item" to="/admin">
          <div className="btn-purple" onClick={validate}>
            Login
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Login;
