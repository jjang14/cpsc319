import React, { useState, useEffect } from "react";
import loginImg from "../svg/login.svg";
import "../scss/login.scss";
import { axiosInstance } from "../config/axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
const Login = ({ authenticate, setAuthenticate }) => {
  const history = useHistory();
  const validate = () => {
    // setUser(document.getElementById("username").value);
    // setPassword(document.getElementById("password").value);
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);
    setTimeout(function() {
      axiosInstance
        .get(`${user}/${password}`, { timeout: 30000 })
        .then(response => {
          console.log(response.status);
          if (response.status === 200) {
            console.log("inss");
            setAuthenticate(true);
            console.log("the authenticate value is ", authenticate);
            history.push("/admin");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  };
  console.log("the history is ", history);
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
