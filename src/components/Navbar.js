import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container ">
          <div className="d-flex">
            <img src={logo} />
            <a class="navbar-brand fw-bold fs-4" href="#">
              <span className="fst-italic ">The</span>Box
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active d-flex justify-content-start"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-start" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-start" href="#">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-start" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-start" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
