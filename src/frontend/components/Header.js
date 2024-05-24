import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const UserName = sessionStorage.getItem("UserName");
  const UserType = sessionStorage.getItem("UserType");
  const navigate = useNavigate();
  const image = { height: "16px" };

  const handleLogout = () => {
    //setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn"); // Remove session after logout
    sessionStorage.removeItem("UserName");
    sessionStorage.removeItem("UserType");
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
          <ul>
            {" "}
            {isLoggedIn ? (
              <>
                {UserName ? (
                  <li
                    className="nav-link dropdown-toggle text-white nav-item dropdown  mt-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="logo192.png"
                      alt="Avatar Logo"
                      className="rounded-pill"
                      style={image}
                    />
                    &nbsp; Welcome {UserName}
                    <ul className="dropdown-menu">
                      <Link className="nav-link" to="/contact">
                        Profile
                      </Link>

                      <li className="nav-link">
                        <a onClick={handleLogout}>Logout</a>
                      </li>
                    </ul>
                  </li>
                ) : (
                  ""
                )}
              </>
            ) : (
              <li class="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
