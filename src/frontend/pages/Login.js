// import React from 'react';
import React, { useState, Fragment } from "react";
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // alert(sessionStorage.getItem('isLoggedIn'));

  const handleLogin = () => {
    // Here you can implement your login logic, such as sending a request to a server
    // to verify the username and password.
    // For the sake of simplicity, I'm just checking if the username and password are 'admin'.
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("UserName", username);
      sessionStorage.setItem("UserType", "admin");
      navigate("/booking");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <div class="container">
        <div class="sidenav">
          <div class="login-main-text">
            <h2>
              Application
              <br /> Login Page
            </h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        <div class="main">
          <div class="col-md-6 col-sm-12">
            <div class="login-form">
              <form>
                <div class="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-black"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
